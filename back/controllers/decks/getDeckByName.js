const { getDeckByName } = require("../../models/decks");
const errors = require("../../misc/errors");

module.exports = (db) => async (req, res, next) => {
    const { deckName } = req.query;

    const response = await getDeckByName(await db)(deckName);

    if(!response.ok) return next(errors[500]);

    res.status(200).json({
        success: true,
        data: response.content
    })
}