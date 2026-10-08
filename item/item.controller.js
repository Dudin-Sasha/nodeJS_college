import ItemServices from "./item.services.js";
import { isNotEmptyArray, isString } from "../utils.js";
export const deleteItem = async(ctx) => {

};

export const getItem = async(ctx) => {
};

export const getItems = async(ctx) => {
    const service = new ItemServices();
    const {id, name, locations, status, isOutOfPlace, category} = ctx.params;
    const items = await service.getAll({
        ids: isNotEmptyArray(id)?id:[id],
        name: isString(name)? name: undefined,
        locations: isNotEmptyArray(locations)?locations:[locations],
        status:,
    });
};

export const createItem = async(ctx) => {
};

export const updatetItem = async(ctx) => { 
};


//такие контроллеры еще называют end-point'ы они вызываются по определённому url


