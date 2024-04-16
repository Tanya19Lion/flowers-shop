import { useSelector } from 'react-redux';

import { useCategories } from '../../hooks/categories.hook';
import useFlowersService from '../../services/FlowersService';

import { flowersCategoriesFetching, flowersCategoriesFetched, flowersCategoriesFetchingError, activeFlowersCategoryChange } from '../../redux/actions/actions';
import { selectFlowersCategories } from '../../redux/selectors/selectors';

const CategoriesFlowers = () => {
    const { flowersCategories, flowersCategoriesLoadingStatus, activeFlowersCategories } = useSelector(selectFlowersCategories);

    const { getCategoriesFlowers } = useFlowersService();

    return useCategories('By flowers', flowersCategoriesFetching, flowersCategoriesFetched, flowersCategoriesFetchingError, activeFlowersCategoryChange, getCategoriesFlowers, flowersCategories, flowersCategoriesLoadingStatus, activeFlowersCategories);
   
};

export default CategoriesFlowers;