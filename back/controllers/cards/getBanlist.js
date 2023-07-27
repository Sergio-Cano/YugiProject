const errors = require("../../misc/errors");
const { getBanlist } = require("../../utils");

module.exports = (db) => async (req, res, next) => {
    const response = await getBanlist();

    if(!response) return next(errors[500]);

    res.status(200).json({
        success: true,
        data: response
    })
}