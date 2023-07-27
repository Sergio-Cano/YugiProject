const router = require("express").Router();
const { authorizer } = require("../middlewares");

const deckCtrl = require("../controllers/decks");

module.exports = (db) => {
    router.post("/", authorizer, deckCtrl.createDeck(db));
    router.delete("/", authorizer, deckCtrl.deleteDeck(db));
    router.put("/", authorizer, deckCtrl.updateDeck(db));
    router.get("/", deckCtrl.getAllDecks(db));
    router.get("/user", authorizer, deckCtrl.getUserDecks(db));
    router.get("/name/", deckCtrl.getDeckByName(db));

    return router;
}