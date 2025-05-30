import { orderModel } from "./models/orders.js"
import { CRUD } from "./CRUD.js";


class OrderDao extends CRUD {

    constructor(orderModel) {
        super(orderModel)
    }

    getAllByUser = async (id) => {
        try {
            return await this.model.find({ purchaser: id });
        } catch (error) {
            throw Error(error);
        }
    }

    getUserOrderById = async (id, idUser) => {
        try {
            return await this.model.findOne({ _id: id, purchaser: idUser });
        } catch (error) {
            throw Error(error);
        }
    }



}


export const orderDao = new OrderDao(orderModel);
