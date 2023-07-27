const { insertCard, receiveCard, receiveAllCards } = require("./queries");

const setCard = (db) => async (card) => {
    const { cardId, cardName, cardType, type, attribute, archetype, cardDescription, attack, defense, levelRank, linkRating, scale, imgUrl, imgUrlSmall, imgUrlCrop } = card;

    try {
        await db.query(insertCard(cardId, cardName, cardType, type, attribute, archetype, cardDescription, attack, defense, levelRank, linkRating, scale, imgUrl, imgUrlSmall, imgUrlCrop));

        return { ok: true }
    } catch (error) {
        console.log(error.message);

        return { ok: false }
    }
}

const getCard = (db) => async (card) => {
    const { cardName = null, cardType = null, attribute = null, type = null, archetype = null, levelRank = null, linkRating = null, scale = null } = card;

    const parsedCard = cardName ? `%${cardName}%` : null

    try {
        const data = await db.query(receiveCard(parsedCard, cardType, attribute, type, archetype, levelRank, linkRating, scale));

        return {
            ok: true,
            content: data.rows
        }
    } catch (error) {
        console.log(error.message);

        return { ok: false }
    }
}

const getAllCards = (db) => async () => {
    try {
        const data = await db.query(receiveAllCards());

        return {
            ok: true,
            content: data.rows
        }
    } catch (error) {
        console.log(error.message);

        return { ok: false }
    }
}

module.exports = {
    setCard,
    getCard,
    getAllCards
}