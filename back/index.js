require("dotenv").config();
const express = require("express");
const cors = require("cors");
const cookieParser = require("cookie-parser");
const { db, cors: options } = require("./configs");
const errors = require("./misc/errors");
const routes = require("./routes");

const app = express();

app.use(express.json());
app.use(cors(options));
app.use(cookieParser());
app.use(routes(db));

app.use((_, __, next) => {
    next(errors[404])
})

app.use(({ statusCode, error }, _, res, __) => {
    res.status(statusCode).json({
        success: false,
        message: error.message,
    })
})

app.listen(process.env.PORT, () => console.log("> Listening at:", process.env.PORT));