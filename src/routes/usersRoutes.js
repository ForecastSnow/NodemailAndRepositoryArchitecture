import express from "express";
import { userController } from "../controller/userController.js";
import passport from "passport";
import { checkRole } from "../middleware/checkRole.js";
import { ROLETYPE } from "../util/dictionary.js";

export const userRoute = express.Router();

userRoute.get("/api/user/login", userController.login);
userRoute.post("/api/user/requestResetPassword", userController.requestResetPassword)
userRoute.post("/api/user/resetPassword/:token", userController.resetPassword)

userRoute.get("/api/user/cart/", passport.authenticate("jwtCookies"), userController.getCart);
userRoute.post("/api/user/cart/", passport.authenticate("jwtCookies"), userController.pushProductInCartUser);
userRoute.put("/api/user/cart/", passport.authenticate("jwtCookies"), userController.decreaseProductQuantityInCart);
userRoute.delete("/api/user/cart/", passport.authenticate("jwtCookies"), userController.removeProductInCartUser);


userRoute.post("/api/user", userController.create);
userRoute.get("/api/userCurrent", passport.authenticate("jwtCookies"), userController.current);
userRoute.get("/api/user/:id", passport.authenticate("jwtCookies"), checkRole(ROLETYPE.admin), userController.getById);
userRoute.get("/api/user", passport.authenticate("jwtCookies"), checkRole(ROLETYPE.admin), userController.getAll);
userRoute.put("/api/user/:id", passport.authenticate("jwtCookies"), checkRole(ROLETYPE.admin), userController.update);
userRoute.delete("/api/user/:id", passport.authenticate("jwtCookies"), checkRole(ROLETYPE.admin), userController.delete);
