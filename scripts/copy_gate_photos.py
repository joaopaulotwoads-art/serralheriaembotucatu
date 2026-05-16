"""Copy WhatsApp gate photos from Cursor workspace storage into the Astro project.

Source filenames exceed Windows MAX_PATH when joined with the default assets path;
this script uses extended-length Win32 paths so copy works on Windows.
"""
from __future__ import annotations

import os
import shutil
from pathlib import Path


def win_long_path(path: str) -> str:
    p = os.path.abspath(os.path.normpath(path))
    if p.startswith("\\\\?\\"):
        return p
    if p.startswith("\\\\"):
        return "\\\\?\\UNC\\" + p[2:]
    return "\\\\?\\" + p


def main() -> None:
    home = Path(os.environ["USERPROFILE"])
    src_dir = (
        home
        / ".cursor"
        / "projects"
        / "c-Users-Jo-o-Desktop-vibe-serralheria-botucatu-astro"
        / "assets"
    )
    project_root = Path(__file__).resolve().parents[1]
    dst_dir = project_root / "src" / "assets" / "images" / "portfolio-portoes"
    dst_dir.mkdir(parents=True, exist_ok=True)

    names = sorted(
        n
        for n in os.listdir(win_long_path(str(src_dir)))
        if n.endswith(".png") and "WhatsApp_Image_2026-05-07" in n
    )
    if not names:
        raise SystemExit(f"No matching PNG files in {src_dir}")

    for i, name in enumerate(names, start=1):
        src = win_long_path(str(src_dir / name))
        dst = win_long_path(str(dst_dir / f"portao-modelo-{i:02d}.png"))
        shutil.copy2(src, dst)

    print(f"Copied {len(names)} images to {dst_dir}")


if __name__ == "__main__":
    main()
