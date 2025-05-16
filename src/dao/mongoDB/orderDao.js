import { orderModel } from "./models/orders.js"
import { CRUD } from "./CRUD.js";


class OrderDao extends CRUD {

    constructor(orderModel) {
        super(orderModel)
    }



}


export const orderDao = new OrderDao(orderModel);
