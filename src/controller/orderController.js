import { orderService } from "../services/orderService.js"


class OrderController {
    constructor(orderService) {
        this.orderService = orderService;
    }

    getAll = async (req, res, next) => {


        try {
            const response = await this.orderService.getAll();
            res.status(200).json(response);
        } catch (error) {
            next(error);
        }
    }

    getById = async (req, res, next) => {


        try {
            const id = req.params.id;
            const response = await this.orderService.getById(id);
            res.status(200).json(response);
        } catch (error) {
            next(error);
        }
    }

    create = async (req, res, next) => {


        try {
            const data = req.body;
            const response = await this.orderService.create(data);
            res.status(200).json(response)
        } catch (error) {
            next(error);
        }
    }

    update = async (req, res, next) => {


        try {
            const id = req.params.id;
            const body = req.body;
            const response = await this.orderService.update(id, body);
            res.status(200).json(response);
        } catch (error) {
            next(error);
        }
    }

    delete = async (req, res, next) => {


        try {
            const id = req.params.id;
            const response = await this.orderService.delete(id);
            res.status(200).json(response);
        } catch (error) {
            next(error);
        }
    }


}

export const orderController = new OrderController(orderService)