import sqlite3 from "sqlite3";

export default class Sqlitelinker {

    constructor(filename){
        this.filename = filename;
        this.db = null;
    }

    async connect(){
        return new Promise((resolve, reject) => {
            this.db = new sqlite3.Database(this.filename, (err) => {
                if(err){
                    console.log(err);
                    reject(err);
                    return;
                }
                console.log(`database is started ${this.filename}`);
                resolve();
            });
        });
    }

    async run(sql, params = []){
        const result = await new Promise((resolve, reject) => {
            this.db.run(sql, params, function (err){
                if(err){
                    console.log(err);
                    reject(err);
                    return;
                }
                resolve({
                    lastId: this.lastID,
                    changes: this.changes,
                })
            })
        });
        return result; 
    }

    async get(sql, params = []){
        const result = await new Promise((resolve, reject) => {
            this.db.get(sql, params, (err, row) => {
                if(err){
                    console.log(err);
                    reject(err);
                    return;
                }
                resolve(row)
            });
        });
        return result;
    }

    async all(sql, params = []){
        const result = await new Promise((resolve, reject) => {
            this.db.all(sql, params, (err, rows) => {
                if(err){
                    console.log(err);
                    reject(err);
                    return;
                }
                resolve(rows)
            });
        });
        return result;
    }

    async close(){
        return new Promise((resolve, reject) => {
            if(!this.db) {
                resolve();
                return;
            }
            this.db.close((err) => {
                if(err){
                    console.log(err);
                    reject(err);
                    return;
                }
                resolve();
            })
        });
    }
}
