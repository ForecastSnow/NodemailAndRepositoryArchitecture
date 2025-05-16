import { orderDao } from "../dao/mongoDB/orderDao.js";
import { Service } from "./service.js";

class OrderService extends Service {

    constructor(orderDao) {
        super(orderDao)
        this.orderDao = orderDao;
    }

    



}


export const orderService = new OrderService(orderDao);