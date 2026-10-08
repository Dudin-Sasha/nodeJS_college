// тут как бы импорт
import {isString, isNumber, isNotEmpty} from "../../utils.js";

export default class StructureDTO{
    constructor({name, address}){//тут у нас деструктуризация объекта, так писать удобнее, чем условно data.name, плюс (эммит) работает как надо
        this.name = name;
        this.address = address;
    }
    #checkObject(){
        return(
            isNotEmpty(this.name)&&
            isNotEmpty(this.address)&&
            isString(this.name)&&
            isString(this.address)
        );
    }
    
    get object(){
        if(!this.#checkObject){
            throw new Error("Try another data for this object!");
        }
        return{
            name:this.name,
            address:this.address
        };
    }
}
