// src/services/AnimeService.ts
import axios from 'axios';

const BASE_URL = 'https://api.jikan.moe/v4';

export default {
    async getAnimes(page: number = 1, limit: number = 10) {
        try {
            const response = await axios.get(`${BASE_URL}/anime?page=${page}&limit=${limit}`);
            return response.data.data;
        } catch (error) {
            console.error('Error fetching animes:', error);
            throw error;
        }
    }
};

