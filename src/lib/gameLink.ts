// Link zum Minispiel „Berliner Weihnachtsmarkt-Sause“.
// mtm_kwd zeigt in Matomo, über welchen Einstieg in der Karte geklickt wurde.
const GAME_URL = 'https://weihnachtsmarktsause.vercel.app/'

export function getGameLink(source: 'intro' | 'button'): string {
  return `${GAME_URL}?mtm_campaign=weihnachtsmarktkarte&mtm_kwd=${source}`
}
