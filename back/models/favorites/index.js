const { insertCard, getList, removeList } = require("./queries");

const createFavoriteList = (db) => async (cardList, email) => {
    try {
        for(let card of cardList) {
            const { cardName, cardType, type, attribute = null, cardDescription, attack = null, defense = null, levelRankLink = null, scale = null, imgUrl, imgUrlSmall, imgUrlCrop } = card;
    
            await db.query(insertCard(cardName, cardType, type, attribute, cardDescription, attack, defense, levelRankLink, scale, imgUrl, imgUrlSmall, imgUrlCrop, email));
        }

        return { ok: true }        
    } catch (error) {
        console.log(error.message);
        
        return { ok: false }
    }
}

const removeFavoriteList = (db) => async (email) => {
    try {
        await db.query(removeList(email));

        return { ok: true }
    } catch (error) {
        console.log(error.message);

        return { ok: false }
    }
}

const updateFavoriteList = (db) => async (cardList, email) => {
    try {
        await removeFavoriteList(db)(email);

        await createFavoriteList(db)(cardList, email);

        return { ok: true }
    } catch (error) {
        console.log(error.message);

        return { ok: false }
    }
}

const getFavoriteList = (db) => async (email) => {
    try {
        const data = await db.query(getList(email));

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
    createFavoriteList,
    removeFavoriteList,
    updateFavoriteList,
    getFavoriteList
}