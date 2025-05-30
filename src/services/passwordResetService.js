import { Service } from "./service.js";
import { passwordResetOrdersDao } from "../dao/mongoDB/passwordResetOrdersDao.js";
import jwt from "jsonwebtoken";


class PasswordResetService {

    constructor(passwordResetOrdersDao) {
        this.passwordResetOrdersDao = passwordResetOrdersDao
    }

    async requestResetPassword(email) {

        try {
            const userExist = await this.dao.getByEmail(email);
            if (!userExist) throw new CustomError("Email indicado no encontrado", 400);

            const payload = {
                _id: userExist._id,
                first_name: userExist.first_name,
                last_name: userExist.last_name,
                email: userExist.mail,
            }

                
        } catch (error) {
            throw error
        }

    }

    async tokenResetPassword() {


        try {

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