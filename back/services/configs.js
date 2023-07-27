const axios = require("axios").default;

const cardInstance = axios.create({ baseURL: "https://db.ygoprodeck.com/api/v7/cardinfo.php" });

module.exports = {
    cardInstance
}