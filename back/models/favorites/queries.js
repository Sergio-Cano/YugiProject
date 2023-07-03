const { sql } = require("slonik");

const insertCard = (cardName, cardType, type, attribute = null, cardDescription, attack = null, defense = null, levelRankLink = null, imgUrl, imgUrlSmall, imgUrlCrop, email) => sql.unsafe`
    INSERT INTO favorites (
        card_name, card_type, type, attribute, card_description, attack, defense, level_rank_link, img_url, img_url_small, img_url_cropped, created_by
    ) VALUES (
        ${cardName}, ${cardType}, ${type}, ${attribute}, ${cardDescription}, ${attack}, ${defense}, ${levelRankLink}, ${imgUrl}, ${imgUrlSmall}, ${imgUrlCrop}, (SELECT id FROM users WHERE email LIKE ${email})
    )
`

const removeList = (email) => sql.unsafe`
    DELETE FROM favorites
    WHERE created_by = (SELECT id FROM users WHERE email LIKE ${email})
`

const getList = (email) => sql.unsafe`
    SELECT * FROM favorites
    WHERE created_by = (SELECT id FROM users WHERE email LIKE ${email})
`

module.exports = {
    insertCard,
    removeList,
    getList
}