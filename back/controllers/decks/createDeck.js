const { checkDeck, checkBanlist } = require("../../utils");
const errors = require("../../misc/errors");
const { createDeck } = require("../../models/decks");

module.exports = (db) => async (req, res, next) => {
    const { deckList } = req.body;
    const { email } = res.locals;

    console.log(deckList);
    
    const banlistCheck = await checkBanlist(deckList, next);

    if(!banlistCheck.success) return banlistCheck.next;
    
    const deckCheck = checkDeck(deckList, next);

    if(!deckCheck.success) return deckCheck.next;

    const response = await createDeck(await db)(deckList, email);

    if(!response.ok) return next(errors[500]);

    res.status(200).json({
        success: true,
        data: deckList
    })
}