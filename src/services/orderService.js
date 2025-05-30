import { orderDao } from "../dao/mongoDB/orderDao.js";
import { Service } from "./service.js";
import { userService } from "./userService.js";

class OrderService extends Service {

    constructor(orderDao) {
        super(orderDao)
        this.orderDao = orderDao;
    }



    async create(body) {
        try {

            const id = body.purchaser;
            userService.clearCartUser(id);

            
            return await this.dao.create(body);
            if (!response) throw new CustomError("no se ah podido crear el elemento", 404);
        } catch (error) {
            throw error;
        }
    }

    async getAllbyUser(id) {
        try {
            return await this.dao.getAllbyUser(id);
            if (!response) throw new CustomError("error al buscar en la base de datos", 500);
        } catch (error) {
            throw error;
        }
    }

    async getUserOrderById(id, idUser) {
        try {
            return await this.dao.getUserOrderById(id, idUser);
            if (!response) throw new CustomError("error al buscar en la base de datos", 404);
        } catch (error) {
            throw error;
        }
    }



}


export const orderService = new OrderService(orderDao);