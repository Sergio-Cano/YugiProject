const axios = require("axios").default;
const { getApiImages } = require("../services")

const parseBanlist = (banlist) => {

    const banArray = [];

    for(let card of banlist) {
        const banCard = {
            id: card.id,
            name: card.name,
            status: card.banlist_info.ban_tcg
        }
        
        banArray.push(banCard)
    }
    
    return banArray;
}

module.exports = async () => {
    const banlist = await axios.get("https://db.ygoprodeck.com/api/v7/cardinfo.php?banlist=tcg").then(res => res.data.data);

    const parsed = parseBanlist(banlist);

    return parsed;
}



