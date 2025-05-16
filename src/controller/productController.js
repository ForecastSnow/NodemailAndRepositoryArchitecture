import { productService } from "../services/productService.js"

class ProductController {
    constructor(productService) {
        this.productService = productService;
    }

    getAll = async (req, res, next) => {


        try {
            const response = await this.productService.getAll();
            res.status(200).json(response);
        } catch (error) {
            next(error);
        }
    }

    getById = async (req, res, next) => {


        try {
            const id = req.params.id;
            const response = await this.productService.getById(id);
            res.status(200).json(response);
        } catch (error) {
            next(error);
        }
    }

    create = async (req, res, next) => {


        try {
            const data = req.body;
            const response = await this.productService.create(data);
            res.status(200).json(response)
        } catch (error) {
            next(error);
        }
    }

    update = async (req, res, next) => {


        try {
            const id = req.params.id;
            const body = req.body;
            const response = await this.productService.update(id, body);
            res.status(200).json(response);
        } catch (error) {
            next(error);
        }
    }

    delete = async (req, res, next) => {


        try {
            const id = req.params.id;
            const response = await this.productService.delete(id);
            res.status(200).json(response);
        } catch (error) {
            next(error);
        }
    }


}

export const productController = new ProductController(productService)