import { orderDao } from "../dao/mongoDB/orderDao.js";
import { CustomError } from "../util/customError.js";
import { Service } from "./service.js";
import { userService } from "./userService.js";

class OrderService extends Service {

    constructor(orderDao) {
        super(orderDao)
        this.orderDao = orderDao;
    }



    async create(id) {
        try {

            const userCart = await userService.GetAndclearCartUser(id);

            if (!userCart?.cart?.length) {
                throw new CustomError("El carrito esta vacio", 400);

            }

            let amount = 0;
            const outStock = [];

            for (let product = 0; product < userCart.cart.length; product++) {
                if (userCart.cart[product].product.stock < userCart.cart[product].quantity) {
                    outStock.push({ product: userCart.cart[product].product, missing: Math.abs(userCart.cart[product].product.stock - userCart.cart[product].quantity) })
                } else {
                    amount = amount + ((userCart.cart[product].product.price) * userCart.cart[product].quantity)
                }

            }

            const data = {
                purchaser: id,
                bought: userCart.cart,
                amount: amount,
                outStock: outStock
            }

            return await this.dao.create(data);
        } catch (error) {
            throw error;
        }
    }

    async getAllbyUser(id) {
        try {
            return await this.dao.getAllByUser(id);
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