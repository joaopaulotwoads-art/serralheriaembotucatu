export const SERVICE_FILTER_TABS = [
  { id: 'all', label: 'Todos' },
  { id: 'portoes', label: 'Portões' },
  { id: 'coberturas', label: 'Coberturas' },
  { id: 'grades', label: 'Grades' },
  { id: 'estruturas', label: 'Estruturas' },
] as const;

export type ServiceCategoryId = (typeof SERVICE_FILTER_TABS)[number]['id'];

/** Rótulo exibido no card (categoria) */
export const SERVICE_CATEGORY_LABEL: Record<string, string> = {
  'cerca-concertina': 'Cercas',
  'fabricacao-de-grade': 'Grades',
  'fabricacao-de-portao': 'Portões',
  'fabricacao-de-tela': 'Grades',
  'manutencao-e-reforma': 'Estruturas',
  'motor-para-portao-eletronico-automatico': 'Portões',
  'porta-de-aco': 'Portões',
  'portao-basculante': 'Portões',
  'portao-deslizante': 'Portões',
  'portao-deslizante-em-l-em-botucatu': 'Portões',
  'toldo-de-policarbonato-em-botucatu-cobertura-de-policarbonato': 'Coberturas',
  'portao-pivotante-em-botucatu': 'Portões',
  'fabricacao-de-decks-e-decks-para-piscina-em-botucatu': 'Estruturas',
};

export const SERVICE_CATEGORY_FILTER: Record<string, Exclude<ServiceCategoryId, 'all'>> = {
  'cerca-concertina': 'coberturas',
  'fabricacao-de-grade': 'grades',
  'fabricacao-de-portao': 'portoes',
  'fabricacao-de-tela': 'grades',
  'manutencao-e-reforma': 'estruturas',
  'motor-para-portao-eletronico-automatico': 'portoes',
  'porta-de-aco': 'portoes',
  'portao-basculante': 'portoes',
  'portao-deslizante': 'portoes',
  'portao-deslizante-em-l-em-botucatu': 'portoes',
  'toldo-de-policarbonato-em-botucatu-cobertura-de-policarbonato': 'coberturas',
  'portao-pivotante-em-botucatu': 'portoes',
  'fabricacao-de-decks-e-decks-para-piscina-em-botucatu': 'estruturas',
};

/** Classes de grid assimétrico (índice do serviço na lista) */
export function serviceGridClass(index: number): string {
  if (index === 0) return 'sm:col-span-2 lg:col-span-2 lg:row-span-2';
  if (index === 4) return 'lg:col-span-2';
  if (index === 8) return 'lg:row-span-2';
  return '';
}
