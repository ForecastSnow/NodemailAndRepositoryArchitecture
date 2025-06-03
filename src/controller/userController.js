import { userService } from "../services/userService.js";
import { userDTO } from "../dto/userDTO.js";
import { passwordResetService } from "../services/passwordResetService.js";

class UserController {
    constructor(userService) {
        this.userService = userService;
    }

    getCart = async (req, res, next) => {

        try {
            const id = req.user._id;

            const response = await this.userService.getUserCart(id);
            res.status(200).json(response);
        } catch (error) {
            next(error)
        }

    }

    pushProductInCartUser = async (req, res, next) => {

        try {

            const id = req.user._id;

            const { product, quantity } = req.body;

            const response = await this.userService.pushProductInCartUser(id, product, quantity);
            res.status(200).json(response);
        } catch (error) {
            next(error)
        }

    }

    decreaseProductQuantityInCart = async (req, res, next) => {

        try {

            const id = req.user._id;

            const { product, quantity } = req.body;

            const response = await this.userService.decreaseProductQuantityInCart(id, product, quantity);
            res.status(200).json(response);
        } catch (error) {
            next(error)
        }

    }

    removeProductInCartUser = async (req, res, next) => {

        try {

            const id = req.user._id;

            const { product } = req.body;

            const response = await this.userService.removeProductInCartUser(id, product);
            res.status(200).json(response);
        } catch (error) {
            next(error)
        }

    }

    getAll = async (req, res, next) => {


        try {
            const response = await this.userService.getAll();
            res.status(200).json(response);
        } catch (error) {
            next(error);
        }
    }

    getById = async (req, res, next) => {


        try {
            const id = req.params.id;
            const response = await this.userService.getById(id);
            res.status(200).json(response);
        } catch (error) {
            next(error);
        }
    }

    create = async (req, res, next) => {


        try {
            const data = req.body;
            const response = await this.userService.create(data);
            res.status(200).json(response)
        } catch (error) {
            next(error);
        }
    }

    update = async (req, res, next) => {


        try {
            const id = req.params.id;
            const body = req.body;
            const response = await this.userService.update(id, body);
            res.status(200).json(response);
        } catch (error) {
            next(error);
        }
    }

    delete = async (req, res, next) => {


        try {
            const id = req.params.id;
            const response = await this.userService.delete(id);
            res.status(200).json(response);
        } catch (error) {
            next(error);
        }
    }

    login = async (req, res, next) => {
        try {
            const { email, password } = req.body;
            const user = await this.userService.login(email, password);
            const token = await this.userService.generateToken(user);
            res.cookie("token", token, { httpOnly: true }).json({ message: "cookie de sesion seteada" })
        } catch (error) {
            next(error)
        }
    }

    current = async (req, res, next) => {

        try {

            const user = req.user;

            res.status(200).json(new userDTO(user))
        } catch (error) {
            next(error)
        }

    }


    requestResetPassword = async (req, res, next) => {

        try {

            const { destination } = req.body;

            const response = await passwordResetService.requestResetPassword(destination)

            res.status(200).json(response);

        } catch (error) {
            next(error)
        }

    }

    resetPassword = async (req, res, next) => {

        try {

            const { newPassword } = req.body;

            const { token } = req.params;

            const response = await passwordResetService.resetPassword(newPassword, token);

            res.status(200).json(response)


        } catch (error) {
            next(error)
        }

    }


}

export const userController = new UserController(userService)