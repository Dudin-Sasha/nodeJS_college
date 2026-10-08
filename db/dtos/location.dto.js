// тут как бы импорт
import {isString, isNumber, isNotEmpty} from "../../utils.js";

export default class LocationDTO{
    constructor(name, place_id){//тут у нас деструктуризация объекта, так писать удобнее, чем условно data.name, плюс (эммит) работает как надо
        this.name = name;
        this.place_id = place_id;
    }
    #checkObject(){
        return(
            isNotEmpty(this.name)&&
            isString(this.name)&&
            (isNotEmpty(this.place_id)? isNumber(this.place_id):true)
        );
    }
    
    get object(){
        if(!this.#checkObject){
            throw new Error("Try another data for this object!");
        }
        return{
            name:this.name,
            place_id:this.place_id
        };
    }
}
