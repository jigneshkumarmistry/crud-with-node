const jwt = require('jsonwebtoken');
const omit = require('lodash');

const JWT_SECRET = process.env.JWT_SECRET;
const TOKEN_EXPIRY = process.env.TOKEN_EXPIRY;

export function verifyToken(req, res, next) {

    const token = req.headers.authorization;
    let result;

    if (token) {
        const options = {
            expiresIn: TOKEN_EXPIRY,
            algorithm: 'HS256'
        };

        try {
            result = jwt.verify(token, JWT_SECRET, options);
            req.decoded = result;
            next();
        }
        catch (err) {
            result = {
                error: `${err.message || err}`,
                status: 401
            };

            res.status(401).send(result);
        }
    }
    else {
        result = {
            error: `Authentication error. Token required.`,
            status: 401
        };

        res.status(401).send(result);
    }
}

export function generateToken(user) {
    let token = jwt.sign(
        {
            data: user.id
        },
        JWT_SECRET,
        {
            expiresIn: TOKEN_EXPIRY,
            algorithm: 'HS256'
        });

    return token
}