const router = require("express").Router();

const authRoutes = require("./auth");
const deckRoutes = require("./deck");

module.exports = (db) => {
    router.use("/auth", authRoutes(db));
    router.use("/deck", deckRoutes(db));

    return router;
}