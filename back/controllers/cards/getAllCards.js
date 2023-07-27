const { getAllCards } = require("../../models/cards")
const errors = require("../../misc/errors");

module.exports = (db) => async (req, res, next) => {
    const response = await getAllCards(await db)();

    if(!response.ok) return next(errors[500]);

    res.status(200).json({
        success: true,
        data: response.content
    })
}