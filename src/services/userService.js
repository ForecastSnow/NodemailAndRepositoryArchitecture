import { Service } from "./service.js";
import { userDao } from "../dao/mongoDB/userDao.js";
import { hashPassword, comparedPassword } from "../util/bcryptUtil.js"
import { CustomError } from "../util/customError.js";
import jwt from "jsonwebtoken";

class UserService extends Service {
    constructor(userDao) {
        super(userDao);
    }


    async getUserCart(data) {

        try {
            return await this.dao.getUserCart(data);
        } catch (error) {
            throw error;
        }


    }

    async pushProductInCartUser(id, productId, quantity) {

        try {
            return await this.dao.pushProductInCartUser(id, productId, quantity);
        } catch (error) {
            throw error;
        }

    }

    async decreaseProductQuantityInCart(id, productId, quantity) {

        try {
            return await this.dao.decreaseProductQuantityInCart(id, productId, quantity);
        } catch (error) {
            throw error;
        }

    }

    async removeProductInCartUser(id, product) {

        try {
            return await this.dao.removeProductInCartUser(id, product);
        } catch (error) {
            throw error;
        }

    }

    async GetAndclearCartUser(id) {

        try {
            return await this.dao.GetAndclearCartUser(id);
        } catch (error) {
            throw error;
        }

    }

    async create(data) {
        try {

            data.password = hashPassword(data.password);

            return await this.dao.create(data);
            if (!response) throw new CustomError("no se ah podido crear el elemento", 404);
        } catch (error) {
            throw error;
        }
    }

    async getByEmail(email) {

        try {
            const response = await this.dao.findOne({ email: email })
            return response;
        } catch (error) {
            throw new Error
        }

    }

    async login(email, password) {
        try {
            const userExist = await this.dao.getByEmail(email);
            if (!userExist) throw new CustomError("Credenciales incorrectas", 400);
            const passValid = comparedPassword(password, userExist.password);
            if (!passValid) throw new CustomError("Credenciales incorrectas", 400);
            return userExist;
        } catch (error) {
            throw error
        }
    }

    async generateToken(user) {

        try {
            const payload = {
                _id: user._id,
                first_name: user.first_name,
                last_name: user.last_name,
                email: user.mail,
                age: user.age,
                cart: user.cart,
                role: user.role
            }

            return jwt.sign(payload, process.env.JWT_KEY, { expiresIn: "1h" });
        } catch (error) {
            throw error
        }


    }
}

export const userService = new UserService(userDao);
