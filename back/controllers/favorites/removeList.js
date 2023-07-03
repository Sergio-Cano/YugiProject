const { removeFavoriteList } = require("../../models/favorites");
const errors = require("../../misc/errors");

module.exports = (db) => async (req, res, next) => {
    const { email } = res.locals;

    const response = await removeFavoriteList(await db)(email);

    if(!response.ok) return next(errors[500]);

    res.status(200).json({
        success: true,
    })
}