const User = [
    {
    id:12,
    name: "Max"
    }
];
export const deleteItem = async(ctx) => {
    const id = ctx.params.id;
    const deletedItem = User.findIndex(u => u.id === id);
    if(!~deleteItem){ // ~ превращает -1 в 0, а ноль это тоже самое что и false
        User[deleteItem] = null
    }
    //User.splice(deletedItem, 1)[0]; // тут был delete, но он удаляет только аргументы а не переменные, или элементы переменной
    ctx.status = 200;
};

export const getItem = async(ctx) => {

    ctx.status = 200;
    ctx.body = User[0];
};


export const createItem = async(ctx) => {
    const item = ctx.request.body;
    User.push(item)
    ctx.status = 200;
};

export const updatetItem = async(ctx) => {
    const id = ctx.request.body?.id;
    const name = ctx.request.body?.name;

    if(name !== null){
        const user = User.find(u => u.id === id);
        user.name = name;
    }

    ctx.status = 200;
    ctx.body = "success"
};


//ура асинк в node.js я как будто обычный js знаю
// export async const getItem(ctx)=>{};
// export async function getItem(ctx)=>{};


