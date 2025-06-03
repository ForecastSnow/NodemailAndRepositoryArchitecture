import { createTransport } from "nodemailer";
import hbs from "nodemailer-express-handlebars";
import path from "path";
import { CustomError } from "../util/customError.js";

class EmailService {

    constructor() {

        const hbsConfig = {
            viewEngine: {
                extName: ".handlebars",
                partialsDir: path.resolve("./src/views"),
                defaultLayout: false
            },
            viewPath: path.resolve("src/views"),
            extName: ".handlebars",
        }

        this.transporter = createTransport({

            service: "gmail",
            port: 465,
            auth: {
                user: process.env.NODEMAILER_USER,
                pass: process.env.NODEMAILER_PASSWORD
            }

        });

        this.transporter.use("compile", hbs(hbsConfig));

    }

    async resetPasswordEmail(destinationMail, linkToken) {

        try {

            await this.transporter.sendMail({
                from: process.env.NODEMAILER_USER,
                to: destinationMail,
                subject: `restablecer su contraseña`,
                template: "resetPassword",
                context: {
                    linkToken: linkToken
                }
            })

        } catch (error) {
            throw new CustomError(("error al enviar el mail" + error), 500);
        }


    }
}




export const emailService = new EmailService();

