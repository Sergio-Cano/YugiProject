const router = require("express").Router();
const { authorizer } = require("../middlewares");
const favoritesCtrl = require("../controllers/favorites");

module.exports = (db) => {
    router.get("/", authorizer, favoritesCtrl.getList(db));
    router.post("/", authorizer, favoritesCtrl.createList(db));
    router.put("/", authorizer, favoritesCtrl.updateList(db));
    router.delete("/", authorizer, favoritesCtrl.removeList(db));

    return router;
}