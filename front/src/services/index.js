import axios from "axios";

import { getUser, login, logout, register } from "./auth";
import { createDeck, deleteDeck, updateDeck, getAllDecks, getDeckByName, getDeckByUser  } from "./decks";
import { getCard, getAllCards, getBanlist } from "./cards";
import { getFavorites, setFavorites, deleteFavorites, updateFavorites } from "./favorites";

const client = axios.create({
    baseURL: import.meta.env.VITE_API_URL,
    withCredentials: true
})

export const auth = {
    login: login(client),
    register: register(client),
    logout: logout(client),
    getUser: getUser(client)
}

export const deck = {
    createDeck: createDeck(client),
    deleteDeck: deleteDeck(client),
    updateDeck: updateDeck(client),
    getAllDecks: getAllDecks(client),
    getDeckByName: getDeckByName(client),
    getDeckByUser: getDeckByUser(client)
}

export const card = {
    getCard: getCard(client),
    getAllCards: getAllCards(client),
    getBanlist: getBanlist(client)
}

export const favorites = {
    getFavorites: getFavorites(client),
    setFavorites: setFavorites(client),
    deleteFavorites: deleteFavorites(client),
    updateFavorites: updateFavorites(client)
}