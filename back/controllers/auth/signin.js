const { hash, serialize } = require("simple-stateless-auth-library");
const { selectUser } = require("../../models/auth");
const errors = require("../../misc/errors");

module.exports = (db) => async (req, res, next) => {
    const { email, password } = req.body;

    const response = await selectUser(await db)(email, hash.compare(password));

    if(!response.ok) return next(errors[response.error_code || 500]);

    serialize(res, response.content);

    res.status(200).json({
        success: true,
    })
}