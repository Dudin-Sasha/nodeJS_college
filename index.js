import Koa from 'koa';
import BodyParser from 'koa-bodyparser';
import Router from '@koa/router';
// import {function} from "./item/item-controller.js"  импорт конкретной функции доступной для экспорта (там же может быть только одна дефолтная функция доступная для экспорта и несолько обычных)
//npm init создание проекта
//npm install установка (koa и тп)
// node 'название' запускает
import {getItem, createItem, updatetItem, deleteItem} from "./item/item-controller.js"

const koa = new Koa();
const router = new Router();
router.get('/', getItem, updatetItem, createItem, deleteItem);
koa.use(router.routes());
koa.use(router.allowedMethods());
koa.use(BodyParser());

koa.use((ctx) =>{
    ctx.body = 'hello world';
});

koa.listen(3000);