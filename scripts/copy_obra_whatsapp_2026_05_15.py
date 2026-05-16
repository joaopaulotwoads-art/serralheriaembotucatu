"""
Copia fotos reais (WhatsApp 2026-05-15) para src/assets/images com nomes usados pelo site.
Execute a partir da raiz do projeto: python scripts/copy_obra_whatsapp_2026_05_15.py
"""
from __future__ import annotations

import os
import shutil
import pathlib


def main() -> None:
    # No Windows, Path.home() pode não coincidir com USERPROFILE; a pasta do Cursor fica em %USERPROFILE%.
    profile = os.environ.get("USERPROFILE") or str(pathlib.Path.home())
    src_dir = pathlib.Path(profile) / ".cursor" / "projects" / "c-Users-Jo-o-Desktop-vibe-serralheria-botucatu-astro" / "assets"
    root = pathlib.Path(__file__).resolve().parents[1]
    dst_dir = root / "src" / "assets" / "images"

    if not src_dir.is_dir():
        raise SystemExit(f"Pasta de origem não encontrada: {src_dir}")

    def find_by_uuid(prefix: str) -> pathlib.Path:
        for name in os.listdir(src_dir):
            if prefix in name and name.endswith(".png"):
                return src_dir / name
        raise FileNotFoundError(f"Nenhum arquivo contendo '{prefix}' em {src_dir}")

    # 13 serviços (ordem alinhada aos slugs / image em services.ts)
    service_mapping: list[tuple[str, str]] = [
        ("0325bfa9", "cobertura-metalica"),  # cerca concertina: cobertura/telhado
        ("c69e333f", "manutencao-de-grades"),  # estrutura em grade / obra
        ("d53fc5ae", "portoes-de-ferro"),
        ("c7fa3ea9", "fabricacao-de-tela"),
        ("63c003c9", "manutencao-de-serralheria"),
        ("d7b340ba", "corte-e-dobra"),
        ("5b364267", "portao-em-aco"),
        ("4d14c902", "portoes-basculante"),
        ("1cfdbcea", "portoes-deslizante"),
        ("f8396ceb", "portoes-gradil"),
        ("fdd8c30a", "toldo-em-policarbonato"),
        ("a6c7d2f8", "portoes-pivotante"),
        ("7330a1ab", "manutencao-de-piscina"),  # deck / teto ripado
    ]

    # Hero / About: fotos com boa leitura de “obra em escala” (não repetidas nos cards)
    page_mapping: list[tuple[str, str]] = [
        ("49d2c843", "severino-oficina-2"),  # hero — munck / treliça
        ("12994863", "severino-oficina-1"),  # sobre — equipe montando estrutura
    ]

    # Páginas que ainda usavam fotos antigas: usar sobras do mesmo dia (10:47.* no diretório)
    extra_ts = ["10.47.46", "10.47.47"]
    extra_pages = ["severino-oficina-3", "severino-fachada"]

    copied: list[str] = []

    for uuid_prefix, base in service_mapping + page_mapping:
        src = find_by_uuid(uuid_prefix)
        dst = dst_dir / f"{base}.png"
        if not src.is_file():
            raise SystemExit(
                f"Origem inacessível (arquivo só na cache da IDE ou não sincronizado): {src}\n"
                f"Baixe/sync as fotos ou rode no PowerShell: .\\scripts\\sync-obra-fotos.ps1 -SourceDir \"C:\\caminho\\com\\png\""
            )
        shutil.copy2(src, dst)
        copied.append(f"{src.name[:48]}… -> {dst.name}")

    # Extras: primeiro arquivo que contém cada timestamp (ordem estável)
    for ts, base in zip(extra_ts, extra_pages, strict=True):
        candidates = sorted(
            p for p in src_dir.iterdir() if p.suffix.lower() == ".png" and ts in p.name
        )
        if not candidates:
            raise FileNotFoundError(f"Nenhuma foto extra com '{ts}' em {src_dir}")
        dst = dst_dir / f"{base}.png"
        first = candidates[0]
        if not first.is_file():
            raise SystemExit(f"Extra {ts}: inacessível {first}")
        shutil.copy2(first, dst)
        copied.append(f"{first.name[:48]}… -> {dst.name} (extra {ts})")

    print(f"Copiados {len(copied)} arquivos para {dst_dir}:\n")
    for line in copied:
        print(line)


if __name__ == "__main__":
    main()
