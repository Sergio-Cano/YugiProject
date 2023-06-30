const { deleteDeck } = require("../../models/decks")
const errors = require("../../misc/errors");

module.exports = (db) => async (req, res, next) => {
    const { deckName } = req.body;
    const { email } = res.locals;

    const response = await deleteDeck(await db)(deckName, email);

    if(!response.ok) return next(errors[500]);

    res.status(200).json({
        success: true,
        message: "Removed deck: " + deckName
    })
}