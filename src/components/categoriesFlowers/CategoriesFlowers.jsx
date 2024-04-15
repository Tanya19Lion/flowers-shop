import { useSelector } from 'react-redux';

import { useCategories } from '../../hooks/categories.hook';
import useFlowersService from '../../services/FlowersService';

import { flowersCategoriesFetching, flowersCategoriesFetched, flowersCategoriesFetchingError, activeFlowersCategoryChange } from '../../redux/actions/actions';

const CategoriesFlowers = () => {
    const { flowersCategories, flowersCategoriesLoadingStatus, activeFlowersCategories } = useSelector(state => state.categories);

    const { getCategoriesFlowers } = useFlowersService();

    return useCategories('By flowers', flowersCategoriesFetching, flowersCategoriesFetched, flowersCategoriesFetchingError, activeFlowersCategoryChange, getCategoriesFlowers, flowersCategories, flowersCategoriesLoadingStatus, activeFlowersCategories);
   
};

export default CategoriesFlowers;