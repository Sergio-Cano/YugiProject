const errors = require("../../misc/errors");
const checkDeck = require("../../utils/checkDeck");
const { updateDeck } = require("../../models/decks");


module.exports = (db) => async (req, res, next) => {
    const { originalDeckName, deckList } = req.body;
    const { email } = res.locals;

    const check = checkDeck(deckList, next);

    if(!check.success) return check;

    const response = await updateDeck(await db)(originalDeckName, deckList, email);

    if(!response.ok) return next(errors[500]);

    res.status(200).json({
        success: true,
        data: deckList
    })
}