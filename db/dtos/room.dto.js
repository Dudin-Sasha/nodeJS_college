// тут как бы импорт
import {isString, isNumber, isNotEmpty} from "../../utils.js";

export default class RoomDTO{
    constructor({name, floor_id}){//тут у нас деструктуризация объекта, так писать удобнее, чем условно data.name, плюс (эммит) работает как надо
        this.name = name;
        this.floor_id = floor_id;
    }
    #checkObject(){
        return(
            isNotEmpty(this.name)&&
            isString(this.name)&&
            (isNotEmpty(this.floor_id)? isNumber(this.floor_id):true)
        );
    }
    
    get object(){
        if(!this.#checkObject){
            throw new Error("Try another data for this object!");
        }
        return{
            name:this.name,
            floor_id:this.floor_id
        };
    }
}
