import express from "express";
import { orderController } from "../controller/orderController.js";


export const orderRoute = express.Router();

orderRoute.post("/api/order", orderController.create);
orderRoute.get("/api/order/:id", orderController.getById);
orderRoute.get("/api/order", orderController.getAll);
orderRoute.put("/api/order/:id", orderController.update);
orderRoute.delete("/api/order/:id", orderController.delete);


