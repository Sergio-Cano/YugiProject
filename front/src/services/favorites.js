const PATH = "/favorites";

export const getFavorites = (client) => async (params) => {
    try {
        const { data } = client.get(PATH, params);
        return data;
    } catch (error) {
        console.log("GetFavorites error:", error.message);
        return { success: false };
    }    
}

export const setFavorites = (client) => async (params) => {
    try {
        const { data } = client.post(PATH, params);
        return data;
    } catch (error) {
        console.log("GetFavorites error:", error.message);
        return { success: false };
    }    
}

export const updateFavorites = (client) => async (params) => {
    try {
        const { data } = client.put(PATH, params);
        return data;
    } catch (error) {
        console.log("GetFavorites error:", error.message);
        return { success: false };
    }    
}

export const deleteFavorites = (client) => async (params) => {
    try {
        const { data } = client.delete(PATH, params);
        return data;
    } catch (error) {
        console.log("GetFavorites error:", error.message);
        return { success: false };
    }    
}
