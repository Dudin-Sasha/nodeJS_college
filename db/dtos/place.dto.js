// тут как бы импорт
import {isString, isNumber, isNotEmpty} from "../../utils.js";

export default class PlaceDTO{
    constructor({number, room_id}){//тут у нас деструктуризация объекта, так писать удобнее, чем условно data.number, плюс (эммит) работает как надо
        this.number = number;
        this.room_id = room_id;
    }
    #checkObject(){
        return(
            isNotEmpty(this.number)&&
            isNumber(this.number)&&
            (isNotEmpty(this.room_id)? isNumber(this.room_id):true)
        );
    }
    
    get object(){
        if(!this.#checkObject){
            throw new Error("Try another data for this object!");
        }
        return{
            number:this.number,
            room_id:this.room_id
        };
    }
}
