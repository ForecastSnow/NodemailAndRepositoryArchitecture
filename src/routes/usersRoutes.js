import express from "express";
import { userController } from "../controller/userController.js";
import passport from "passport";

export const userRoute = express.Router();

userRoute.get("/api/user/login", userController.login);

userRoute.get("/api/user/cart/", userController.getCart);
userRoute.post("/api/user/cart/", userController.pushProductInCartUser);
userRoute.put("/api/user/cart/", userController.decreaseProductQuantityInCart);
userRoute.delete("/api/user/cart/", userController.removeProductInCartUser);


userRoute.get("/api/session/header", passport.authenticate("jwt"), userController.current);
userRoute.get("/api/session/cookie", passport.authenticate("jwtCookies"), userController.current);
userRoute.post("/api/user", userController.create);
userRoute.get("/api/user/:id", userController.getById);
userRoute.get("/api/user", userController.getAll);
userRoute.put("/api/user/:id", passport.authenticate("jwtCookies"), userController.update);
userRoute.delete("/api/user/:id", userController.delete);
