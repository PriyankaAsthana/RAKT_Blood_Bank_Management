const JWT = require('jsonwebtoken');

module.exports = async (req, res, next) => {
    try {
        const authHeader = req.headers["authorization"];
        if (!authHeader) {
            return res.status(401).send({
                success: false,
                message: "Authorization header missing!"
            });
        }

        const token = authHeader.split(" ")[1];

        console.log("Token received:", token);
        console.log("JWT Secret (middleware):", process.env.JWT_SECRET);

        JWT.verify(token, process.env.JWT_SECRET, (err, decode) => {
            if (err) {
                console.log("JWT Error:", err);
                return res.status(401).send({
                    success: false,
                    message: 'Auth Failed!'
                });
            } else {
                console.log("Decoded Token:", decode);
                req.userId = decode.userId;
                next();
            }
        });
    } catch (error) {
        console.log("Middleware Catch Error:", error);
        return res.status(401).send({
            success: false,
            message: 'Auth Failed!',
            error
        });
    }
};
