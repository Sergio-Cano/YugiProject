const router = require("express").Router();

const getCard = require("../controllers/cards/getCard");
const authRoutes = require("./auth");
const deckRoutes = require("./deck");
const favoritesRoutes = require("./favorites");
const cardRoutes = require("./card");

module.exports = (db) => {
    router.use("/auth", authRoutes(db));
    router.use("/deck", deckRoutes(db));
    router.use("/favorites", favoritesRoutes(db));
    router.use("/card", cardRoutes(db));
    
    return router;
}