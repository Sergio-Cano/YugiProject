const getCard = require("../controllers/cards/getCard");

const router = require("express").Router();

module.exports = () => {
    router.post("/", getCard());

    return router;
}