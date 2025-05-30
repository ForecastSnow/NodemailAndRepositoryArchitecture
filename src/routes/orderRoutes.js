import express from "express";
import { orderController } from "../controller/orderController.js";
import passport from "passport";
import { checkRole } from "../middleware/checkRole.js";
import { ROLETYPE } from "../util/dictionary.js";

export const orderRoute = express.Router();

orderRoute.post("/api/order/user", passport.authenticate("jwtCookies"), checkRole(ROLETYPE.user), orderController.create);
orderRoute.get("/api/order/user", passport.authenticate("jwtCookies"), checkRole(ROLETYPE.user), orderController.getAllbyUser);
orderRoute.get("/api/order/user/:id", passport.authenticate("jwtCookies"), checkRole(ROLETYPE.user), orderController.getUserOrderById);

orderRoute.post("/api/order", passport.authenticate("jwtCookies"), checkRole(ROLETYPE.admin), orderController.create);
orderRoute.get("/api/order/:id", passport.authenticate("jwtCookies"), checkRole(ROLETYPE.admin), orderController.getById);
orderRoute.get("/api/order", passport.authenticate("jwtCookies"), checkRole(ROLETYPE.admin), orderController.getAll);
orderRoute.put("/api/order/:id", passport.authenticate("jwtCookies"), checkRole(ROLETYPE.admin), orderController.update);
orderRoute.delete("/api/order/:id", passport.authenticate("jwtCookies"), checkRole(ROLETYPE.admin), orderController.delete);


