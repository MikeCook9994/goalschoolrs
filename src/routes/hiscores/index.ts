// import { api } from './_api';
import type { RequestHandler } from '.svelte-kit/types/src/routes/todos/__types';

export const get: RequestHandler = async () => {
    // const response = await api('osdraenal');

    const staticData = '1752045,926,2534295 -1,1,-1 -1,1,-1 -1,1,-1 -1,1,-1 -1,1,-1 -1,1,-1 1345919,71,842196 -1,1,-1 -1,1,-1 -1,1,-1 1413952,60,281212 1741749,50,104445 1536237,54,153142 1687167,44,59372 -1,1,-1 1752106,23,6345 1105634,61,304623 1626381,40,40330 -1,1,-1 1485041,20,4978 1656681,17,3509 -1,1,-1 1831027,14,2380 -1,-1 -1,-1 -1,-1 -1,-1 1262805,1 -1,-1 -1,-1 -1,-1 -1,-1 -1,-1 -1,-1 -1,-1 -1,-1 -1,-1 -1,-1 -1,-1 -1,-1 -1,-1 -1,-1 -1,-1 -1,-1 -1,-1 -1,-1 -1,-1 -1,-1 -1,-1 -1,-1 -1,-1 -1,-1 -1,-1 -1,-1 -1,-1 -1,-1 -1,-1 -1,-1 -1,-1 -1,-1 -1,-1 -1,-1 -1,-1 -1,-1 -1,-1 -1,-1 -1,-1 -1,-1 -1,-1 -1,-1 -1,-1 -1,-1 -1,-1 -1,-1 -1,-1 -1,-1 -1,-1 -1,-1 -1,-1 -1,-1 -1,-1 -1,-1 -1,-1 -1,-1';

    // if (response.status === 200) {
        return {
            body: {
                hiscores: await new Promise(resolve => resolve(staticData))
            }
        }
    // }

    // return {
    //     status: response.status
    // }
};