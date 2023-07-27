const cardCount = require("./cardCount");
const errors = require("../misc/errors");

module.exports = (deckList, next) => {
    for(let card of deckList) {
        const { cardName } = card;
        const count = cardCount(cardName, deckList);

        if(count > 3) return {
            success: false,
            next: next({
                statusCode: 406,
                error: new Error(`You can't use more of 3 copies of ${cardName}`),
            })
        }
    }

    let mainDeck = 0;
    let extraDeck = 0;

    const EXTRA_DECK = ['Fusion Monster', 'Pendulum Effect Fusion Monster', 'Synchro Monster', 'Synchro Tuner Monster', 'Synchro Pendulum Effect Monster', 'XYZ Monster', 'XYZ Pendulum Effect Monster', 'Link Monster']

    for(let card of deckList) {
        const { cardType } = card;
        EXTRA_DECK.includes(cardType) ? extraDeck += 1 : mainDeck += 1;
    }

    if(extraDeck > 15) return {
        success: false,
        next: next(errors["long_extra_deck"])
    }

    if(mainDeck < 40) return {
        success: false,
        next: next(errors["short_deck"])
    }

    if(mainDeck > 60) return {
        success: false,
        next: next(errors["long_main_deck"])
    }

    return { success: true }
}