import { createTransport } from "nodemailer";
import hbs from "nodemailer-express-handlebars";
import path from "path";


const hbsConfig = {
    viewEngine: {
        extName: ".handlebars",
        partialsDir: path.resolve("./src/views"),
        defaultLayout: false
    },
    viewPath: path.resolve("src/views"),
    extName: ".handlebars",
}

export const transporter = createTransport({

    service: "gmail",
    port: 465,
    auth: {
        user: process.env.NODEMAILER_USER,
        pass: process.env.NODEMAILER_PASSWORD
    }

});

transporter.use("compile", hbs(hbsConfig));


export const resetPasswordEmail = (destinationMail, linkToken) => ({
    from: process.env.NODEMAILER_USER,
    to: destinationMail,
    subject: `restablecer su contraseña`,
    template: "resetPassword",
    context: {
        tokenlink: "linkToken"
    }
})

