import { CustomError } from "../util/customError.js";
import jwt from "jsonwebtoken";

export const checkAuthTokenHeaders = (req, res, next) => {

    try {

        const authHeader = req.get("auth");

        if (!authHeader) {
            throw new CustomError("Token no presente", 401)
        }

        const decodedToken = jwt.verify(authHeader, process.env.JWT_KEY);

        req.user = decodedToken;

        next()
    } catch (error) {
        if (error instanceof jwt.JsonWebTokenError) next(new CustomError("Error en el token", 401));
        next(error)

    }


} 