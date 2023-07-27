const { cardInstance } = require("./configs");

module.exports = async (cardSearch) => {
    const { cardName = null, cardType = null, attribute = null, type = null, archetype = null, levelRank = null, linkRating = null, scale = null } = cardSearch;

    let apiSearch = "";

    cardName && (apiSearch += `fname=${encodeURIComponent(cardName)}&`);
    cardType && (apiSearch += `type=${encodeURIComponent(cardType)}&`);    
    attribute && (apiSearch += `attribute=${encodeURIComponent(attribute)}&`);
    type && (apiSearch += `race=${encodeURIComponent(type)}&`);    
    archetype && (apiSearch += `archetype=${encodeURIComponent(archetype)}&`);
    levelRank && (apiSearch += `level=${parseInt(levelRank)}&`);   
    linkRating && (apiSearch += `link=${parseInt(linkRating)}&`);
    scale && (apiSearch += `scale=${scale}`);

    try {
        const response = await cardInstance.get(`?${apiSearch}`)
        
        return {
            ok: true,
            content: response.data.data
        }
    } catch (error) {
        console.log(error.message);

        return { ok: false }
    }
}