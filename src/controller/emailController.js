import { transporter, resetPasswordEmail } from "../services/emailService.js"


export const sendEmail = async (req, res, next) => {

    const { destinationMail } = req.body;

    const response = await transporter.sendMail(resetPasswordEmail(destinationMail));

    res.json(response)
}