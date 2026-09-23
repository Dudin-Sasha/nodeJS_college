import Sqlitelinker from "./sqlite.js";

class Migrations {

    constructor() {
        this.linker = new Sqlitelinker('./database.db');
    }

    async #exec(sql) {
        if (typeof sql !== 'string' || sql.trim() === '' ) {
            throw new Error("Запрос должен быть непустой строкой");
        }
        try{
            await this.linker.connect();
            await this.linker.run(sql);
        }
        catch(error)
        {
            console.error(`ошибка какая-то \n${error}`);
        }
        finally{
            await this.linker.close();
        }
    }

    async up(sql) {
        console.log("up");
        

        await this.#exec(sql);
    }

    async down(sql) {
        console.log("down");

        
        await this.#exec(sql);
    }
}

export const migration = new Migrations();


