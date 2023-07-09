const cardCount = require("./cardCount");

const getBanlist = require("./getBanlist")

module.exports = async (decklist, next) => {
    const banlist = await getBanlist();

    for(let card of decklist) {
        const count = cardCount(card.cardName, decklist);

        const cardOnBanlist = banlist.find((cardOnBan) => cardOnBan.name === card.cardName) || null;

        if(cardOnBanlist){
            const { name, status } = cardOnBanlist;
    
            if(status === "Banned") return {
                success: false,
                next: next({
                    statusCode: 406,
                    error: new Error(`${name} is forbidden, you can't include this card`)
                })
            } 

            if(status === "Limited" && count > 1) return {
                success: false,
                next: next({
                    statusCode: 406,
                    error: new Error(`${name} is limited, you can't use more than 1 copy`)
                })
            }

            if(status === "Semi-Limited" && count > 2) return {
                success: false,
                next: next({
                    statusCode: 406,
                    error: new Error(`${name} is semi-limited, you can't use more than 2 copies`)
                })
            }
        }
    }

    return { success: true }
}