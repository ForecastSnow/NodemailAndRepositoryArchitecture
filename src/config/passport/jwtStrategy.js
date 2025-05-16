import passport from "passport";
import { ExtractJwt, Strategy } from "passport-jwt";
import { userService } from "../../services/userService.js";


const strategyConfig = {
    jwtFromRequest: ExtractJwt.fromAuthHeaderAsBearerToken(),
    secretOrKey: process.env.JWT_KEY
}

const verifyToken = async (decodedToken, done) => {

    if (!decodedToken) return done(null, false, { message: "invalid token" })


    return done(null, decodedToken)
}

passport.use("jwt", new Strategy(strategyConfig, verifyToken));

const cookieExtractor = (req) => {
    return req.cookies.token
}


const strategyConfigCookies = {
    jwtFromRequest: ExtractJwt.fromExtractors([cookieExtractor]),
    secretOrKey: process.env.JWT_KEY

}

passport.use("jwtCookies", new Strategy(strategyConfigCookies, verifyToken));


passport.serializeUser((user, done) => {

    try {

        done(null, user._id)

    } catch (error) {
        done(error)
    }

});

passport.deserializeUser(async (id, done) => {
    try {
        const user = await userService.getById(id);
        return done(null, user);
    } catch (error) {
        done(error)
    }
})