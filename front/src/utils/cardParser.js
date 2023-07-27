export const cardParser = (cardList) => {
    const parsedCards = [];

    for(let card of cardList){
        const parsedCard = {
            cardId: card.card_id,
            deckName: card.deck_name || null,
            cardName: card.card_name,
            cardType: card.card_type,
            type: card.type,
            attribute: card.attribute || null,
            cardDescription: card.card_description,
            attack: card.attack || null,
            defense: card.defense || null,
            levelRank: card.level_rank || null,
            linkRating: card.link_rating || null,
            scale: card.scale || null,
            imgUrl: card.img_url,
            imgUrlSmall: card.img_url_small,
            imgUrlCrop: card.img_url_cropped
        }

        parsedCards.push(parsedCard);
    }

    return parsedCards;
}