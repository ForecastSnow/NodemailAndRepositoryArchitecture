import express from "express";
import { userController } from "../controller/userController.js";
import passport from "passport";
import { checkRole } from "../middleware/checkRole.js";
import { ROLETYPE } from "../util/dictionary.js";

export const userRoute = express.Router();

userRoute.get("/api/user/login", userController.login);

userRoute.get("/api/user/cart/", userController.getCart);
userRoute.post("/api/user/cart/", userController.pushProductInCartUser);
userRoute.put("/api/user/cart/", userController.decreaseProductQuantityInCart);
userRoute.delete("/api/user/cart/", userController.removeProductInCartUser);


userRoute.post("/api/user", userController.create);
userRoute.get("/api/user/:id", passport.authenticate("jwtCookies"), checkRole(ROLETYPE.admin), userController.getById);
userRoute.get("/api/user", passport.authenticate("jwtCookies"), checkRole(ROLETYPE.admin), userController.getAll);
userRoute.put("/api/user/:id", passport.authenticate("jwtCookies"), checkRole(ROLETYPE.admin), userController.update);
userRoute.delete("/api/user/:id", passport.authenticate("jwtCookies"), checkRole(ROLETYPE.admin), userController.delete);
