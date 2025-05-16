import { createTransport } from "nodemailer";



export const transporter = createTransport({

    host: 'smtp.ethereal.email',
    port: 587,
    auth: {
        user: 'maudie.tromp@ethereal.email',
        pass: 'vaq2nfFUANwg5phdmr'
    }

});

export const configMail = {
    from: 'maudie.tromp@ethereal.email',
    to: "maudie.tromp@ethereal.email",
    subject: "prueba",
    text: "pruebatext"
}