const { cardInstance } = require("../configs");


const searchByName = (name) => {
    const parsedSearch = encodeURIComponent(name);

    const nameSearch = `fname=${parsedSearch}`;

    return nameSearch;
}

const searchByCardType = (cardType) => {
    const parsedSearch = encodeURIComponent(cardType);

    const cardTypeSearch = `type=${parsedSearch}`;

    return cardTypeSearch;
}

const searchByAttribute = (attribute) => {
    const attributeSearch = `attribute=${attribute}`;

    return attributeSearch;
}

const searchByType = (type) => {
    const parsedSearch = encodeURIComponent(type);

    const typeSearch = `race=${parsedSearch}`;

    return typeSearch;
}

const searchByArchetype = (archetype) => {
    const parsedSearch = encodeURIComponent(archetype);
    
    const archetypeSearch = `archetype=${parsedSearch}`;

    return archetypeSearch;
}

const searchByLevelRank = (levelRank) => {
    const levelRankSearch = `level=${levelRank}`;

    return levelRankSearch;
}

const searchByLinkRating = (linkRating) => {
    const linkSearch = `link=${linkRating}`;

    return linkSearch;
}

const searchByScale = (scale) => {
    const scaleSearch = `scale=${scale}`;

    return scaleSearch;
}


const searchCard = async (cardSearch) => {
    const { cardName = null, cardType = null, attribute = null, type = null, archetype = null, levelRank = null, linkRating = null, scale = null } = cardSearch;

    let apiSearch = "";

    if(cardName){
        apiSearch += (searchByName(cardName) + "&");
    } 
    
    if(cardType){
        apiSearch += (searchByCardType(cardType) + "&");
    } 
    
    if(attribute){
        apiSearch += (searchByAttribute(attribute) + "&");
    } 
    
    if(type){
        apiSearch += (searchByType(type) + "&");
    } 
    
    if(archetype){
        apiSearch += (searchByArchetype(archetype) + "&");
    } 
    
    if(levelRank){
        apiSearch += (searchByLevelRank(levelRank) + "&");
    } 
    
    if(linkRating){
        apiSearch += (searchByLinkRating(linkRating) + "&");
    } 
    
    if(scale){
        apiSearch += searchByScale(scale);
    }
    
    const response = await cardInstance.get(`?${apiSearch}`)
        .then(res => {
            return {
                ok: true,
                content: res.data.data
            }
        }).catch(() => {
            return { 
                ok: false
            }
        });

    return response;
}

module.exports = {
    searchCard
}