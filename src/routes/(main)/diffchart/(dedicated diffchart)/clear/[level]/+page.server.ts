import DiffchartDB from "$lib/module/common/diffchart/diffchart.server";
import { error } from "@sveltejs/kit";

export async function load({params}){
    const level = Number(params.level);

    if(isNaN(level)){
        throw error(500);
    }

    const diffChart = await DiffchartDB.getClearByLevel(level)

    return {
        diffChart
    }
}