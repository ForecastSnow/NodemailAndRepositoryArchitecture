import { CRUD } from "./CRUD.js";
import { productModel } from "./models/product.js";


class ProductDao extends CRUD {

    constructor(productModel) {
        super(productModel)
        this.productModel = productModel;
    }

}



export const productDao = new ProductDao(productModel);