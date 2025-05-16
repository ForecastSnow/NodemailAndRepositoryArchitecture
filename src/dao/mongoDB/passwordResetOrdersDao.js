import { CRUD } from "./CRUD.js";
import { passwordResetOrdersModel } from "./models/passwordResetOrders.js";

class PasswordResetOrdersDao extends CRUD {


    constructor(passwordResetOrdersModel) {
        super(passwordResetOrdersModel)
    }


}


export const passwordResetOrdersDao = new PasswordResetOrdersDao(passwordResetOrdersModel)