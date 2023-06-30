const router = require("express").Router();
const { authorizer } = require("../middlewares");

const deckCtrl = require("../controllers/decks");

module.exports = (db) => {
    router.post("/create", authorizer, deckCtrl.createDeck(db));
    router.delete("/delete", authorizer, deckCtrl.deleteDeck(db));
    router.put("/update", authorizer, deckCtrl.updateDeck(db));

    return router;
}