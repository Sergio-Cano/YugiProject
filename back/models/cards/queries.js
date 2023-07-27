const { sql } = require("slonik");

const insertCard = (cardId, cardName, cardType, type, attribute, archetype, cardDescription, attack, defense, levelRank, linkRating, scale, imgUrl, imgUrlSmall, imgUrlCrop) => sql.unsafe`
    INSERT INTO cards (
        card_id, card_name, card_type, type, attribute, archetype, card_description, attack, defense, level_rank, link_rating, scale, img_url, img_url_small, img_url_cropped
    ) VALUES (
        ${cardId}, ${cardName}, ${cardType}, ${type}, ${attribute}, ${archetype}, ${cardDescription}, ${attack}, ${defense}, ${levelRank}, ${linkRating}, ${scale}, ${imgUrl}, ${imgUrlSmall}, ${imgUrlCrop}
    )
`

const receiveCard = (cardName, cardType, attribute, type, archetype, levelRank, linkRating, scale) => sql.unsafe`
    SELECT * FROM cards WHERE
    ${ cardName ? sql.fragment`card_name ILIKE ${cardName}` : true } AND
    ${ cardType ? sql.fragment`card_type ILIKE ${cardType}` : true } AND
    ${ type ? sql.fragment`type ILIKE ${type}` : true } AND
    ${ attribute ? sql.fragment`attribute ILIKE ${attribute}` : true } AND
    ${ archetype ? sql.fragment`archetype ILIKE ${archetype}` : true } AND
    ${ levelRank ? sql.fragment`level_rank = ${levelRank}` : true } AND
    ${ linkRating ? sql.fragment`link_rating = ${linkRating}` : true } AND
    ${ scale ? sql.fragment`scale = ${scale}` : true }
`

const receiveAllCards = () => sql.unsafe`
    SELECT * FROM cards
`

module.exports = {
    insertCard,
    receiveCard,
    receiveAllCards
}