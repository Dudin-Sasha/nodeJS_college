import SqliteLinker from "../db/sqlite.js";
export default class ItemServices{
    constructor(){
        this.link = new SqliteLinker();
    }
//хорошо бы если бы эти файлы не совпадали с названиями crud
    async getAll({ids, name, locations, status, isOutOfPlace, category}){
    };
    async getScannedItem(){};//getOne(){}
    async softDelete(){};
    async update(){};
    async create(){};
}