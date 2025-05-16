import { productDao } from "../dao/mongoDB/productDao.js";
import { Service } from "./service.js";


class ProductService extends Service {

    constructor(productDao) {
        super(productDao)
    }

}


export const productService = new ProductService(productDao);