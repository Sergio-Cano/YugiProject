const router = require("express").Router();
const cardCtrl = require("../controllers/cards");

module.exports = (db) => {
    router.get("/", cardCtrl.getCard(db));
    router.get("/all", cardCtrl.getAllCards(db));
    router.get("/banlist", cardCtrl.getBanlist());

    return router;
}