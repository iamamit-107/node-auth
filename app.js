const express = require("express");
const logger = require("morgan");

const indexRouter = require("./routes/index");
const usersRouter = require("./routes/users");
const productsRouter = require("./routes/products");

const { head } = require("./controller/appController");

const app = express();

app.use(logger("dev"));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

app.use(head);
app.use("/", indexRouter);
app.use("/users", usersRouter);
app.use("/products", productsRouter);

module.exports = app;
