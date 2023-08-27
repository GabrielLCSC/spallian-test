import axios from 'axios';

const api = axios.create({
    baseURL: 'https://pokeapi.co/api/v2/',
});

export const fetchPokemonList = async () => {
    try {
        const response = await api.get('pokemon?limit=120');
        const resultsWithIds = response.data.results.map(pokemon => ({
            id: extractIdFromUrl(pokemon.url),
            name: pokemon.name,
            url: pokemon.url
        }));
        return resultsWithIds;
    } catch (error) {
        throw error;
    }
};

const extractIdFromUrl = (url) => {
    const idRegex = /\/(\d+)\/$/;
    const match = url.match(idRegex);
    if (match) {
        return match[1];
    }
    return null;
};

export const fetchPokemonDetails = async (pokemonName) => {
    try {
        const response = await api.get(`pokemon/${pokemonName}`);
        return response.data;
    } catch (error) {
        throw error;
    }
};


export default api;
