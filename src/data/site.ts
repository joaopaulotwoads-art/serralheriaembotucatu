/** Dados fixos da empresa (endereço, mapa) — um único lugar para atualizar no site */
export const SITE_MAPS_URL = 'https://maps.app.goo.gl/Ap6FxrJBi7qQ472Y6';

export const SITE_STREET = 'Av. Rúbens Rúbio da Rosa, 99';
export const SITE_NEIGHBORHOOD = 'Jardim Santa Eliza';
export const SITE_CITY_STATE = 'Botucatu - SP';

/** Bloco para parágrafos / rodapé */
export const SITE_ADDRESS_LINES = [SITE_STREET, `${SITE_NEIGHBORHOOD} — ${SITE_CITY_STATE}`] as const;
