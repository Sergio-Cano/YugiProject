const PATH = "/deck";

export const getAllDecks = (client) => async () => {
    try {
        const { data } = await client.get(PATH);
        return data;
    } catch (error) {
        console.log("GetAll error:", error.message);
        return { success: false };
    }
}

export const getDeckByName = (client) => async (params) => {    
    try {
        const deckName = params.queryKey[1];

        const { data } = await client.get(`${PATH}/name`, {
            params: {...deckName}
        });
        return data;
    } catch (error) {
        console.log("GetByName error:", error.message);
        return { success: false };
    }
}

export const getDeckByUser = (client) => async () => {
    try {
        const { data } = await client.get(`${PATH}/user`);
        return data;
    } catch (error) {
        console.log("GetByUser error:", error.message);
        return { success: false };
    }
}

export const createDeck = (client) => async (params) => {
    try {
        const { data } = await client.post(PATH, params);
        return data;
    } catch (error) {
        console.log("CreateDeck error:", error.message);
        return { success: false };
    }
}

export const deleteDeck = (client) => async (params) => {
    try {
        const { data } = await client.delete(PATH, params);
        return data;
    } catch (error) {
        console.log("DeleteDeck error:", error.message);
        return { success: false };
    }
}

export const updateDeck = (client) => async (params) => {
    try {
        const { data } = await client.put(PATH, params);
        return data;
    } catch (error) {
        console.log("DeleteDeck error:", error.message);
        return { success: false };
    }
}