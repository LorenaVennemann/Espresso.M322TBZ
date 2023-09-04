import * as React from 'react';
import { AxiosInstance } from 'axios';
import { defaultAxiosInstance } from './Api';
import { useEffect } from 'react';

const CatImageService = (api: AxiosInstance = defaultAxiosInstance) => ({
    getRandomeCatImage: async () => {
        const catImageUrl = await api.get('');
        return catImageUrl['data'][0]['url'];
    }
});

export default CatImageService;