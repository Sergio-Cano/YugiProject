const PATH = "/card";

export const getCard = (client) => async (params) => {
    try {
        const cardSearch = params.queryKey[1];

        const { data } = await client.get(`${PATH}`, {
            params: {...cardSearch}
        });

        return data;        
    } catch (error) {
        console.log("GetCard error:", error.message);
        return { success: false };
    }
}

export const getAllCards = (client) => async () => {
    try {
        const { data } = await client.get(`${PATH}/all`);
        return data;
    } catch (error) {
        console.log("GetAllCards error:", error.message);
        return { success: false };
    }
}

export const getBanlist = (client) => async () => {
    try {
        const { data } = await client.get(`${PATH}/banlist`);
        return data;
    } catch (error) {
        console.log("GetAllCards error:", error.message);
        return { success: false };
    }
}