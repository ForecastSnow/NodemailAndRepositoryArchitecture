import bcrypt from "bcrypt";


export const hashPassword = (password) => {
    return bcrypt.hashSync(password, bcrypt.genSaltSync(10))
}



export const comparedPassword = (flatPassword, hashedPassword) => {
    return bcrypt.compareSync(flatPassword, hashedPassword);
}