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
            const idUser = req.user._id;
            const response = await this.orderService.create(idUser);
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

    getAllbyUser = async (req, res, next) => {
        try {
            const idUser = req.user._id
            const response = await this.orderService.getAllbyUser(idUser);
            res.status(200).json(response);
        } catch (error) {
            next(error);
        }
    }

    getUserOrderById = async (req, res, next) => {

        try {
            const id = req.params.id;
            const idUser = req.user._id
            const response = await this.orderService.getUserOrderById(id, idUser);
            res.status(200).json(response);
        } catch (error) {
            next(error);
        }

    }


}

export const orderController = new OrderController(orderService)