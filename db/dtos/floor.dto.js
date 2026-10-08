// тут как бы импорт
import {isString, isNumber, isNotEmpty} from "../../utils.js";

export default class FloorDTO{
    constructor({name, structure_id}){//тут у нас деструктуризация объекта, так писать удобнее, чем условно data.name, плюс (эммит) работает как надо
        this.name = name;
        this.structure_id = structure_id;
    }
    #checkObject(){
        return(
            isNotEmpty(this.name)&&
            isString(this.name)&&
            (isNotEmpty(this.structure_id)? isNumber(this.structure_id):true)
        );
    }
    
    get object(){
        if(!this.#checkObject){
            throw new Error("Try another data for this object!");
        }
        return{
            name:this.name,
            structure_id:this.structure_id
        };
    }
}
