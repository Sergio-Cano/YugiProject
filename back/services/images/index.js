const fs = require("fs");
const { imageInstance } = require("../configs");

const getImages = async (cardId) => {
    const normalImgResponse = await imageInstance.get(`https://images.ygoprodeck.com/images/cards/${cardId}.jpg`,{ responseType: "stream" });
    const smallImgResponse = await imageInstance.get(`https://images.ygoprodeck.com/images/cards_small/${cardId}.jpg`,{ responseType: "stream" });
    const croppedImgResponse = await imageInstance.get(`https://images.ygoprodeck.com/images/cards_cropped/${cardId}.jpg`,{ responseType: "stream" });

    try {
        normalImgResponse.data.pipe(fs.createWriteStream(`data/images/normal/${cardId}.jpg`));
        smallImgResponse.data.pipe(fs.createWriteStream(`data/images/small/${cardId}.jpg`));
        croppedImgResponse.data.pipe(fs.createWriteStream(`data/images/crop/${cardId}.jpg`));
    } catch (error) {
        console.log(error.message);
    }
}

module.exports = {
    getImages
}