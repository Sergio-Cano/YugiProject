const { updateFavoriteList } = require("../../models/favorites");
const errors = require("../../misc/errors");

module.exports = (db) => async (req, res, next) => {
    const { email } = res.locals;

    const cardList = req.body;

    const response = await updateFavoriteList(await db)(cardList, email);

    if(!response.ok) return next(errors[500]);

    res.status(200).json({
        success: true,
    })
}