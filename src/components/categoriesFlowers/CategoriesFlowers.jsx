import { useSelector } from 'react-redux';

import { categories } from '../../hooks/categories.hook';

import { flowersCategoriesFetching, flowersCategoriesFetched, flowersCategoriesFetchingError, activeFlowersCategoryChange } from '../../redux/actions/actions';
import useFlowersService from '../../services/FlowersService';

const CategoriesFlowers = () => {
    const { flowersCategories, flowersCategoriesLoadingStatus, activeFlowersCategories } = useSelector(state => state.categories);

    const { getCategoriesFlowers } = useFlowersService();

    return categories('By flowers', flowersCategoriesFetching, flowersCategoriesFetched, flowersCategoriesFetchingError, activeFlowersCategoryChange, getCategoriesFlowers, flowersCategories, flowersCategoriesLoadingStatus, activeFlowersCategories);
   
};

export default CategoriesFlowers;