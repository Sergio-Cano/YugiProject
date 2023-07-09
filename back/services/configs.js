const axios = require("axios").default;

const cardInstance = axios.create({ baseURL: "https://db.ygoprodeck.com/api/v7/cardinfo.php" });

const imageInstance = axios.create({ baseURL: "https://images.ygoprodeck.com/images/" });

module.exports = {
    cardInstance,
    imageInstance
}