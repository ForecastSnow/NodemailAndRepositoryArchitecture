import { transporter, configMail } from "../services/emailService.js"


export const sendEmail = async (req, res, next) => {

    const response = await transporter.sendMail(configMail);

    res.json(response)
}