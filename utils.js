export function isString(data){
    return typeof data ==="string";
}

export function isNumber(data){
    return typeof data ==="number";

}

export function isNotEmpty(data){
    return(
        data !== null||
        data !== undefined||
        JSON.stringify(data) !== '{}'||
        data !== ''
    );
}

export function isEmpty(data){
        return(
        data === null||
        data === undefined||
        JSON.stringify(data) === '{}'||
        data === ''
    );
}

export function isNotEmptyArray(data){
    return Array.isArray(data) && data.length != 0;
}

export function isCorrectStatus(enams,status){
//статус текст и надо проверить совпадает ли он с указанными енамамамамама
};