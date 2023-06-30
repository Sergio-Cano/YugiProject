const errors = require("../misc/errors");

module.exports = (deckList, next) => {
    const extraDeckTypes = ["fusion","synchro","xyz","link"];

    let mainDeck = 0;
    let extraDeck = 0;

    for(let card of deckList) {
        const { cardType } = card;
        extraDeckTypes.includes(cardType) ? extraDeck += 1 : mainDeck += 1;
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