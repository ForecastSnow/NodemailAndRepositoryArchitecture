import express from "express";
import { userRoute } from "./usersRoutes.js";
import { productRoute } from "./productRoutes.js";
import { orderRoute } from "./orderRoutes.js";


export const treeRoutes = express.Router()



treeRoutes.use(userRoute);
treeRoutes.use(productRoute);
treeRoutes.use(orderRoute);
