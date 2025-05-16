import { Service } from "./service.js";
import { passwordResetOrdersDao } from "../dao/mongoDB/passwordResetOrdersDao.js";
import jwt from "jsonwebtoken";


class PasswordResetService extends Service {

    constructor(passwordResetOrdersDao) {
        super(passwordResetOrdersDao)
    }

    async requestResetPassword(email) {


        try {
            const userExist = await this.dao.getByEmail(email);
            if (!userExist) throw new CustomError("Email indicado no encontrado", 400);



        } catch (error) {
            throw error
        }




    }

    async tokenResetPassword() {


        try {
            const payload = {
                _id: user._id,
                first_name: user.first_name,
                last_name: user.last_name,
                email: user.mail,
            }

            return jwt.sign(payload, process.env.JWT_KEY, { expiresIn: "1h" });
        } catch (error) {
            throw error
        }




    }

    async resetPassword(id, newPassword, token) {



        try {


            const response = await this.dao.resetPassword(id, newPassword);

            return response;
        } catch (error) {
            throw error
        }


    }

}


export const passwordResetService = new PasswordResetService(passwordResetOrdersDao);