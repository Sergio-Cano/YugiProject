const { checkDeck, checkBanlist } = require("../../utils");
const errors = require("../../misc/errors");
const { createDeck } = require("../../models/decks");

module.exports = (db) => async (req, res, next) => {
    const decklist = req.body;
    const { email } = res.locals;

    const banlistCheck = await checkBanlist(decklist, next);

    if(!banlistCheck.success) return banlistCheck.next;
    
    const deckCheck = checkDeck(decklist, next);

    if(!deckCheck.success) return deckCheck.next;

    const response = await createDeck(await db)(decklist, email);

    if(!response.ok) return next(errors[500]);

    res.status(200).json({
        success: true,
        data: decklist
    })
}