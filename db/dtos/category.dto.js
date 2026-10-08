// тут как бы импорт
import {isString, isNumber, isNotEmpty} from "../../utils.js";

export default class CategoryDTO{
    constructor({name, parent_id}){//тут у нас деструктуризация объекта, так писать удобнее, чем условно data.name, плюс (эммит) работает как надо
        this.name = name;
        this.parent_id = parent_id;
    }
    #checkObject(){
        return(
            isNotEmpty(this.name)&&
            isString(this.name)&&
            isNumber(this.parent_id)
        );
    }
    
    get object(){
        if(!this.#checkObject){
            throw new Error("Try another data for this object!");
        }
        return{
            name:this.name,
            parent_id:this.parent_id
        };
    }
}
