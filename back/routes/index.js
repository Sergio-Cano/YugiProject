const router = require("express").Router();

const authRoutes = require("./auth");
const deckRoutes = require("./deck");
const favoritesRoutes = require("./favorites");

module.exports = (db) => {
    router.use("/auth", authRoutes(db));
    router.use("/deck", deckRoutes(db));
    router.use("/favorites", favoritesRoutes(db));

    return router;
}