module.exports = (name, decklist) => {
    let count = 0;

    for(let card of decklist) {
        const { cardName } = card;

        if(cardName === name) count += 1;
    }

    return count;
}