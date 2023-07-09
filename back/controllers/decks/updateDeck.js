const errors = require("../../misc/errors");
const { checkBanlist, checkDeck } = require("../../utils");
const { updateDeck } = require("../../models/decks");

module.exports = (db) => async (req, res, next) => {
    const { originalDeckName, deckList } = req.body;
    const { email } = res.locals;

    const banlistCheck = await checkBanlist(deckList, next);

    if(!banlistCheck.success) return banlistCheck.next;

    const deckCheck = checkDeck(deckList, next);

    if(!deckCheck.success) return deckCheck.next;

    const response = await updateDeck(await db)(originalDeckName, deckList, email);

    if(!response.ok) return next(errors[500]);

    res.status(200).json({
        success: true,
        data: deckList
    })
}