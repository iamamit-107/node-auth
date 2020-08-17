module.exports.head = (req, res, next) => {
    console.log(req.headers);
    next();
};

module.exports.root = (req, res, next) => {
    res.json({ message: "hello World" });
};

module.exports.about = (req, res, next) => {
    console.log(req.body);
    res.json({ message: "Successfully added your about post" });
};
