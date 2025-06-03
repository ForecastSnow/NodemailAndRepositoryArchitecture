import { userDao } from "../dao/mongoDB/userDao.js"
import { CustomError } from "../util/customError.js";
import { emailService } from "./emailService.js";
import { hashPassword } from "../util/bcryptUtil.js"
import jwt from "jsonwebtoken";


class PasswordResetService {

    constructor() {
        this.emailService = emailService;
        this.userDao = userDao;
    }

    async requestResetPassword(email) {

        try {
            const userExist = await this.userDao.getByEmail(email);
            if (!userExist) throw new CustomError("Email indicado no encontrado", 400);

            const payload = {
                userId: userExist._id,
                first_name: userExist.first_name,
                last_name: userExist.last_name,
                email: userExist.mail,
            }

            const token = jwt.sign(payload, process.env.JWT_KEY, { expiresIn: "1h" });

            await emailService.resetPasswordEmail(email, token);

            return {
                message: "Exito al enviar la solicitud de reinicio de contraseña"
            }

        } catch (error) {
            throw error
        }

    }

    async resetPassword(newPassword, token) {


        try {

            const data = jwt.verify(token, process.env.JWT_KEY);

            const hashedPassword = hashPassword(newPassword);

            await this.userDao.resetPassword(data.userId, hashedPassword);

            return {
                message: "contraseña actualizada con exito"
            };
        } catch (error) {
            throw new CustomError("error al buscar en la base de datos" + error, 404);
        }


    }

}


export const passwordResetService = new PasswordResetService();