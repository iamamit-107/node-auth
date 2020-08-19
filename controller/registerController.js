const jwt = require("jsonwebtoken");

module.exports.register = (req, res, next) => {
    const user = {
        name: req.body.name,
        email: req.body.email,
    };

    const secretKey = "secret";

    const token = jwt.sign(user, secretKey, (err, token) => {
        if (err) console.log(err);
        return res.status(201).json({ token });
    });
};
