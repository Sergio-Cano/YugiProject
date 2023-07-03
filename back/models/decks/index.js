const { insertCard, removeDeck, searchDeckByName, searchUserDecks, searchAllDecks } = require("./queries")

const createDeck = (db) => async (decklist, email) => {
    try {
        for(let card of decklist) {
            const { deckName, cardName, cardType, type, attribute = null, cardDescription, attack = null, defense = null, levelRankLink = null } = card;

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

const getDeckByName = (db) => async (deckName = "") => {
    try {
        const parsedDeckName = "%" + deckName.toLowerCase() + "%";

        const data = await db.query(searchDeckByName(parsedDeckName));

        return {
            ok: true,
            content: data.rows
        }
    } catch (error) {
        console.log(error.message);
        return { ok: false }
    }
}

const getUserDecks = (db) => async (email) => {
    try {
        const data = await db.query(searchUserDecks(email));

        return {
            ok: true,
            content: data.rows
        }
    } catch (error) {
        console.log(error.message);
        return { ok: false }
    }
}

const getAllDecks = (db) => async () => {
    try {
        const data = await db.query(searchAllDecks());

        return {
            ok: true,
            content: data.rows
        }
    } catch (error) {
        console.log(error.message);
        return { ok: false }
    }
}

module.exports = (db) = {
    createDeck,
    deleteDeck,
    updateDeck,
    getDeckByName,
    getUserDecks,
    getAllDecks
}