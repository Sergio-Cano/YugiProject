const { sql } = require("slonik");

const insertCard = (deckName, cardName, cardType, type, attribute, cardDescription, attack, defense, levelRankLink, email) => sql.unsafe`
    INSERT INTO decks (
        deck_name, card_name, card_type, type, attribute, card_description, attack, defense, level_rank_link, created_by
    ) VALUES (
        ${deckName}, ${cardName}, ${cardType}, ${type}, ${attribute}, ${cardDescription}, ${attack}, ${defense}, ${levelRankLink}, (SELECT id FROM users WHERE email LIKE ${email})
    )
`

const removeDeck = (deckName, email) => sql.unsafe`
    DELETE FROM decks
    WHERE deck_name LIKE ${deckName} AND created_by = (SELECT id FROM users WHERE email = ${email})
`

module.exports = {
    insertCard,
    removeDeck
}