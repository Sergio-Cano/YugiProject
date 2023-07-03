const { sql } = require("slonik");

const insertCard = (deckName, cardName, cardType, type, attribute = null, cardDescription, attack = null, defense = null, levelRankLink = null, imgUrl, imgUrlSmall, imgUrlCrop, email) => sql.unsafe`
    INSERT INTO decks (
        deck_name, card_name, card_type, type, attribute, card_description, attack, defense, level_rank_link, img_url, img_url_small, img_url_cropped, created_by
    ) VALUES (
        ${deckName}, ${cardName}, ${cardType}, ${type}, ${attribute}, ${cardDescription}, ${attack}, ${defense}, ${levelRankLink}, ${imgUrl}, ${imgUrlSmall}, ${imgUrlCrop}, (SELECT id FROM users WHERE email LIKE ${email})
    )
`

const removeDeck = (deckName, email) => sql.unsafe`
    DELETE FROM decks
    WHERE deck_name LIKE ${deckName} AND created_by = (SELECT id FROM users WHERE email LIKE ${email})
`

const searchDeckByName = (deckName) => sql.unsafe`
    SELECT * FROM decks
    WHERE LOWER(deck_name) LIKE ${deckName}
`

const searchUserDecks = (email) => sql.unsafe`
    SELECT * FROM decks
    WHERE created_by = (SELECT id FROM users WHERE email LIKE ${email})
`

const searchAllDecks = () => sql.unsafe`
    SELECT * FROM decks
    ORDER BY deck_name
`

module.exports = {
    insertCard,
    removeDeck,
    searchDeckByName,
    searchUserDecks,
    searchAllDecks
}