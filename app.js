import express from "express";
import { connectDB } from "./src/config/connectAtlas.js";
import 'dotenv/config'
import { treeRoutes } from "./src/routes/treeRoutes.js"
import { errorHandler } from "./src/middleware/errorHandler.js"
import session from "express-session";
import passport from "passport";
import "./src/config/passport/jwtStrategy.js"
import cookieParser from "cookie-parser";
import MongoStore from "connect-mongo";


const app = express();

app.use(session({
    store: MongoStore.create({
        mongoUrl: process.env.MONGO_URI,
        ttl: 180
    }),
    secret: process.env.SESSION_KEY,
    resave: false,
    saveUninitialized: false,
    cookie: {
        maxAge: 18000000
    }
}));

app.use(passport.initialize());

app.use(passport.session());

app.use(express.json());

app.use(express.urlencoded({ extended: true }));

app.use(cookieParser());

connectDB()



app.use("/", treeRoutes);

/* app.use(errorHandler); */


app.listen(8080, () => console.log(`Server is running on http://localhost:8080`));