export const errorHandler = (error, req, res, next) => {

    const message = error.message || "Algo salio para el orto";

    res.status(error.status ?? 500).json({ error: message });
};

