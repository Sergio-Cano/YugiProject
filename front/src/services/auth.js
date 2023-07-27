const PATH = "/auth";

export const login = (client) => async (params) => {
    try {
        const { data } = await client.post(`${PATH}/signin`, params);
        return data;
    } catch (error) {
        console.log("Login error:", error.message);
        return { success: false }
    }
}

export const register = (client) => async (params) => {
    try {
        const { data } = await client.post(`${PATH}/signup`, params);
        return data;
    } catch (error) {
        console.log("Register error:", error.message);
        return { success: false }
    }
}

export const logout = (client) => async () => {
    try {
        const { data } = await client.post(`${PATH}/signout`);
        return data;
    } catch (error) {
        console.log("Logout error:", error.message);
        return { success: false }
    }
}

export const getUser = (client) => async () => {
    try {
        const { data } = await client.get(`${PATH}/user`);
        return data;
    } catch (error) {
        console.log("GetUser error:", error.message);
        return { success: false }
    }
}
