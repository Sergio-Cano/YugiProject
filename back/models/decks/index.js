const { insertCard, removeDeck } = require("./queries")

const createDeck = (db) => async (decklist, email) => {
    try {
        for(let card of decklist) {
            const { deckName, cardName, cardType, type, attribute, cardDescription, attack, defense, levelRankLink } = card;

            await db.query(insertCard(deckName, cardName, cardType, type, attribute, cardDescription, attack, defense, levelRankLink, email));
        }

        return { ok: true };
    } catch (error) {
        console.log(error.message);

        return { ok: false };
    }
}

const deleteDeck = (db) => async (deckName, email) => {
    try {
        await db.query(removeDeck(deckName, email));

        return { ok: true };
    } catch (error) {
        console.log(error.message);

        return { ok: false };
    }
}

const updateDeck = (db) => async (originalDeckName, decklist, email) => {
    try {
        await deleteDeck(db)(originalDeckName, email);

        await createDeck(db)(decklist, email);

        return { ok: true };
    } catch (error) {
        console.log(error.message);
        
        return { ok: false };
    }
}

module.exports = (db) = {
    createDeck,
    deleteDeck,
    updateDeck,
}