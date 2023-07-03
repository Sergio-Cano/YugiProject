const { getAllDecks } = require("../../models/decks")
const errors = require("../../misc/errors");

module.exports = (db) => async (req, res, next) => {
    const response = await getAllDecks(await db)();

    if(!response.ok) return next(errors[500]);

    res.status(200).json({
        success: true,
        data: response.content
    })
}