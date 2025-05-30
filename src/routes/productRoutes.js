import express from "express";
import { productController } from "../controller/productController.js"
import passport from "passport";
import { checkRole } from "../middleware/checkRole.js";
import { ROLETYPE } from "../util/dictionary.js"


export const productRoute = express.Router();

productRoute.post("/api/product", passport.authenticate("jwtCookies"), checkRole(ROLETYPE.admin), productController.create);
productRoute.get("/api/product/:id", productController.getById);
productRoute.get("/api/product", productController.getAll);
productRoute.put("/api/product/:id", passport.authenticate("jwtCookies"), checkRole(ROLETYPE.admin), productController.update);
productRoute.delete("/api/product/:id", passport.authenticate("jwtCookies"), checkRole(ROLETYPE.admin), productController.delete);