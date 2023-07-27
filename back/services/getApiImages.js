const fs = require("fs");
const axios = require("axios").default;

module.exports = async (cardId) => {
    const normalImgResponse = await axios.get(`https://images.ygoprodeck.com/images/cards/${cardId}.jpg`,{ timeout: 300000, responseType: "stream" });
    const smallImgResponse = await axios.get(`https://images.ygoprodeck.com/images/cards_small/${cardId}.jpg`,{ timeout: 300000, responseType: "stream" });
    const croppedImgResponse = await axios.get(`https://images.ygoprodeck.com/images/cards_cropped/${cardId}.jpg`,{ timeout: 300000, responseType: "stream" });

    try {
        normalImgResponse.data.pipe(fs.createWriteStream(`../front/src/images/normal/${cardId}.jpg`));
        smallImgResponse.data.pipe(fs.createWriteStream(`../front/src/images/small/${cardId}.jpg`));
        croppedImgResponse.data.pipe(fs.createWriteStream(`../front/src/images/crop/${cardId}.jpg`));
    } catch (error) {
        console.log(error.message);
    }
}
