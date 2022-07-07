const HISCORES_BASE_URL = 'https://secure.runescape.com/m=hiscore_oldschool/index_lite.ws';

export function api(playerName: string): Promise<Response> {
    return fetch(`${HISCORES_BASE_URL}?player=${playerName}`, {
        method: 'GET'
    });
}