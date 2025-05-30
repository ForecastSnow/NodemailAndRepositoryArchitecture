export const checkRole = (requiredRole) => (req, res, next) => {

    try {

        const role = req.user.role;

        if (!role) {
            res.status(401).json({ error: "no estas logueado" })
        }

        if (role != requiredRole) {
            res.status(403).json({ error: "no estas autorizado plebeyo" })
        }

        next()

    } catch (error) {
        next(error)

    }

} 