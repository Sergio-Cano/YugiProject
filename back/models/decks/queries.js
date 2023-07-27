const { sql } = require("slonik");

const insertCard = (deckName, cardName, cardType, type, attribute, cardDescription, attack, defense, levelRank, linkRating, scale, imgUrl, imgUrlSmall, imgUrlCrop, cardId, email) => sql.unsafe`
    INSERT INTO decks (
        deck_name, card_name, card_type, type, attribute, card_description, attack, defense, level_rank, link_rating, scale, img_url, img_url_small, img_url_cropped, card_id, created_by
    ) VALUES (
        ${deckName}, ${cardName}, ${cardType}, ${type}, ${attribute}, ${cardDescription}, ${attack}, ${defense}, ${levelRank}, ${linkRating}, ${scale}, ${imgUrl}, ${imgUrlSmall}, ${imgUrlCrop}, ${cardId}, (SELECT id FROM users WHERE email LIKE ${email})
    )
`

const removeDeck = (deckName, email) => sql.unsafe`
    DELETE FROM decks
    WHERE deck_name LIKE ${deckName} AND created_by = (SELECT id FROM users WHERE email LIKE ${email})
`

const searchDeckByName = (deckName) => sql.unsafe`
    SELECT decks.*, users.username FROM decks
    INNER JOIN users ON decks.created_by = users.id
    WHERE LOWER(deck_name) LIKE ${deckName}
    ORDER BY card_type ASC, card_name ASC
`    

const searchUserDecks = (email) => sql.unsafe`
    SELECT * FROM decks
    WHERE created_by = (SELECT id FROM users WHERE email LIKE ${email})
`

const searchAllDecks = () => sql.unsafe`
    SELECT decks.*, users.username FROM decks
    INNER JOIN users ON decks.created_by = users.id
    ORDER BY deck_name
`

module.exports = {
    insertCard,
    removeDeck,
    searchDeckByName,
    searchUserDecks,
    searchAllDecks
}