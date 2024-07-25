import { GamecenterController } from '$lib/module/common/gamecenter/gamecenter.server.js';
import { error } from '@sveltejs/kit';

export async function POST({request, locals}){
    if(!locals.userData){
        throw error(403);
    }

    const data = await request.json();

    if(!data.gamecenterOrder || typeof(data.gamecenterOrder) !== "number"){
        throw error(400);
    }

    await GamecenterController.addFavorite(locals.userData.UUID, data.gamecenterOrder);

    return new Response();
}