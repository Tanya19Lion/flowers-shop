import { useHttp } from "../hooks/http.hook";

const useFlowersService = () => {
    // const { loadingStatus, request } = useHttp();

    const _apiBase = 'http://localhost:3001';

    // const getCategoriesTop = () => request(`${_apiBase}/categories-top`);
    // const getCategoriesColours = () => request(`${_apiBase}/categories-colours`);
    // const getCategoriesFormat = () => request(`${_apiBase}/categories-format`);
    // const getCategoriesFlowers = () => request(`${_apiBase}/categories-flowers`);
    // const getAllBouquets = () => request(`${_apiBase}/bouquets`);
    // const getOneBouquet = (id) => request(`${_apiBase}/bouquets/${id}`);

    // const getCategoriesTop = async() => {
    //     const res = await request(`${_apiBase}/categories-top`);
    //     return res;
    // }

    // const getCategoriesColours = async() => {
    //     const res = await request(`${_apiBase}/categories-colours`);
    //     return res;
    // }

    // const getCategoriesFormat = async() => {
    //     const res = await request(`${_apiBase}/categories-format`);
    //     return res;
    // }

    // const getCategoriesFlowers = async() => {
    //     const res = await request(`${_apiBase}/categories-flowers`);
    //     return res;
    // }

    // const getAllBouquets = async() => {
    //     const res = await request(`${_apiBase}/bouquets`);
    //     return res;
    // }

    // const getOneBouquet = async(id) => {
    //     const res = await request(`${_apiBase}/bouquets/${id}`);
    //     return res;
    // }

    const request = async (url, method = "GET", body = null, headers = {'Content-Type' : 'application/json' }) => {
        try {
            const response = await fetch(url, {method, body, headers});
            if (!response.ok) {
                throw new Error(`Could not fetch ${url}, status ${response.status}`);
            }
            const data = await response.json();
            return data;
        } catch (e) {
            throw new Error(e.message);
        }
    };
    
    // Non-hook functions for fetching categories
    const getCategoriesTop = async () => {
        return await request(`${_apiBase}/categories-top`);
    };
    
    const getCategoriesColours = async () => {
        return await request(`${_apiBase}/categories-colours`);
    };
    
    const getCategoriesFormat = async () => {
        return await request(`${_apiBase}/categories-format`);
    };
    
    const getCategoriesFlowers = async () => {
        return await request(`${_apiBase}/categories-flowers`);
    };
    
    const getAllBouquets = async () => {
        return await request(`${_apiBase}/bouquets`);
    };
    
    const getOneBouquet = async (id) => {
        return await request(`${_apiBase}/bouquets/${id}`);
    };

    return {
        // loadingStatus,
        getCategoriesTop,
        getCategoriesColours,
        getCategoriesFormat,
        getCategoriesFlowers,
        getAllBouquets,
        getOneBouquet
    }
    
};

export default useFlowersService;