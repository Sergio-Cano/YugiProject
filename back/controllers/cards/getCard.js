const { getCard, setCard } = require("../../models/cards");
const errors = require("../../misc/errors");
const { getApiCard, getApiImages } = require("../../services");

module.exports = (db) => async (req, res, next) => {
    const search = req.query;

    if(Object.values(search).length === 0) return next(errors["empty_search"]);

    const dbResponse = await getCard(await db)(search);

    if(!dbResponse.ok) return next(errors[500]);

    const apiResponse = await getApiCard(search);

    if(!apiResponse.ok) return next(errors[500]);

    if(dbResponse.content.length === 0) {
        const apiMatch = apiResponse.content;
    
        for(let card of apiMatch){
            await insertCard(card, db);
        }

    } else {
        const dbMatch = dbResponse.content;
        const apiMatch = apiResponse.content;
        
        for(let card of apiMatch){
            const foundInDb = dbMatch.find(dbCard => dbCard.card_name === card.name);

            if(!foundInDb){
                await insertCard(card, db);
            }
        }
    }

    const secondDbResponse = await getCard(await db)(search);

    res.status(200).json({
        success: true,
        data: secondDbResponse.content
    })
}


const insertCard = async (card, db) => {
    const parsedCard = {
        cardId: card.id,
        cardName: card.name,
        cardType: card.type,
        type: card.race,
        attribute: card.attribute || null,
        archetype: card.archetype || null,
        cardDescription: card.desc,
        attack: card.atk || null,
        defense: card.def || null,
        levelRank: card.level || null,
        linkRating: card.linkval || null,
        scale: card.scale || null,
        imgUrl: card.card_images[0].image_url,
        imgUrlSmall: card.card_images[0].image_url_small,
        imgUrlCrop: card.card_images[0].image_url_cropped
    }

    await setCard(await db)(parsedCard);
    
    await getApiImages(parsedCard.cardId);
}