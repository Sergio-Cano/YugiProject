const checkDeck = require("../../utils/checkDeck");
const errors = require("../../misc/errors");
const { createDeck } = require("../../models/decks");

module.exports = (db) => async (req, res, next) => {
    const decklist = req.body;
    const { email } = res.locals;

    const check = checkDeck(decklist, next);

    if(!check.success) return check;

    const response = await createDeck(await db)(decklist, email);

    if(!response.ok) return next(errors[500]);

    res.status(200).json({
        success: true,
        data: decklist
    })
}