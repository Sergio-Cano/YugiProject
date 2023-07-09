const { searchCard } = require("../../services/cards");
const errors = require("../../misc/errors");
const { getImages } = require("../../services/images");

module.exports = () => async (req, res, next) => {
    const searchedCard = req.body;

    const response = await searchCard(searchedCard);

    if(!response) return next(errors[500]);

    if(!response.ok) return next(errors["card_not_found"]);

    const match = response.content;

    /* for(let card of match){
        getImages(card.id);
    } */

    res.status(200).json({
        success: true,
        data: match
    })
}