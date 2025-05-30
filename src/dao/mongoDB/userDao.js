import { CRUD } from "./CRUD.js";
import { userModel } from "./models/user.js";

class UserDao extends CRUD {
    constructor(userModel) {
        super(userModel)
        this.userModel = userModel;
    }

    getUserCart = async (id) => {

        try {
            const response = await this.userModel.findById(id).populate("cart.product");
            return response.cart;
        } catch (error) {
            throw new Error
        }
    }

    pushProductInCartUser = async (id, product, quantity) => {

        try {

            const response = await this.userModel.updateOne(
                { _id: id, 'cart.product': product },
                { $inc: { 'cart.$.quantity': quantity } }
            );

            if (response.modifiedCount === 0) {
                await this.userModel.updateOne(
                    { _id: id },
                    { $push: { cart: { product: product, quantity } } }
                );
            }

            return response;

        } catch (error) {
            throw new Error
        }
    }

    decreaseProductQuantityInCart = async (id, product, quantity) => {

        try {

            const response = await this.userModel.updateOne(
                { _id: id, 'cart.product': product },
                { $inc: { 'cart.$.quantity': (-quantity) } }
            );

            if (response.modifiedCount === 0) {
                await this.userModel.updateOne(
                    { _id: id },
                    { $pull: { cart: { product: product } } }
                );
            }

            return response;

        } catch (error) {
            throw new Error
        }
    }

    removeProductInCartUser = async (id, product) => {

        try {
            const response = await this.userModel.updateOne(
                { _id: id, 'cart.product': product },
                { $pull: { cart: { product: product } } }
            );
            return response;

        } catch (error) {
            throw new Error
        }
    }

    clearCartUser = async (id) => {

        try {
            const response = await this.userModel.updateOne(
                { _id: id },
                { $set: { cart: [] } }
            );
            return response;

        } catch (error) {
            throw new Error
        }

    }

    getByEmail = async (email) => {

        try {
            const response = await this.userModel.findOne({ email: email })
            return response;
        } catch (error) {
            throw new Error
        }

    }


    resetPassword = async (id, newPassword) => {

        try {
            return await this.model.findByIdAndUpdate(id, newPassword, { new: true });
        } catch (error) {
            throw Error(error);
        }
    }
}


export const userDao = new UserDao(userModel)