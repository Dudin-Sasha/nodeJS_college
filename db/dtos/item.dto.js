// тут как бы импорт
import {isString, isNumber, isNotEmpty} from "../../utils.js";

export default class ItemDTO{
    constructor({name, current_location_id, expected_location_id, category_id, properties, status}){//тут у нас деструктуризация объекта, так писать удобнее, чем условно data.name, плюс (эммит) работает как надо
        this.name = name;
        this.category_id = category_id;
        this.current_location_id = current_location_id;
        this.expected_location_id = expected_location_id;
        this.properties = properties;
        this.status = status;
    }
    
    #checkObject(){
        return(
            isNotEmpty(this.name) && isString(this.name) &&
            (isNotEmpty(this.current_location_id)? isNumber(this.current_location_id):true)&&
            (isNotEmpty(this.expected_location_id)? isNumber(this.expected_location_id):true)&&
            (isNotEmpty(this.category_id)? isNumber(this.category_id):true)&&
            isNotEmpty(this.properties)&&isString(this.properties)&&
            isNotEmpty(this.status)&&isString(this.status)
        );
    }
    
    get object(){
        if(!this.#checkObject){
            throw new Error("Try another data for this object!");
        }
        return{
            name:this.name,
            category:this.category_id,
            current_location_id:this.current_location_id,
            expected_location_id:this.expected_location_id,
            properties:this.properties,
            status:this.status
        };
    }
}
