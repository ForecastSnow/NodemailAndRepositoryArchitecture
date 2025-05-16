import express from "express";
import { productController } from "../controller/productController.js"


export const productRoute = express.Router();

productRoute.post("/api/product", productController.create);
productRoute.get("/api/product/:id", productController.getById);
productRoute.get("/api/product", productController.getAll);
productRoute.put("/api/product/:id", productController.update);
productRoute.delete("/api/product/:id", productController.delete);