import { useHttp } from "../hooks/http.hook";

const useFlowersService = () => {
    const { loadingStatus, request } = useHttp();

    const _apiBase = 'http://localhost:3001';

    const getCategoriesTop = async() => {
        const res = await request(`${_apiBase}/categories-top`);
        return res;
    }

    const getCategoriesColours = async() => {
        const res = await request(`${_apiBase}/categories-colours`);
        return res;
    }

    const getCategoriesFormat = async() => {
        const res = await request(`${_apiBase}/categories-format`);
        return res;
    }

    const getCategoriesFlowers = async() => {
        const res = await request(`${_apiBase}/categories-flowers`);
        return res;
    }

    const getAllBouquets = async() => {
        const res = await request(`${_apiBase}/bouquets`);
        return res;
    }

    return {
        loadingStatus,
        getCategoriesTop,
        getCategoriesColours,
        getCategoriesFormat,
        getCategoriesFlowers,
        getAllBouquets
    }
    
};

export default useFlowersService;