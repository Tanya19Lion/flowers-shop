import { useSelector } from 'react-redux';

import { useCategories } from '../../hooks/categories.hook';

import { fetchFlowersCategories, activeFlowersCategoryChange } from '../../redux/slices/categoriesSlice';
import { selectFlowersCategories } from '../../redux/selectors/selectors';

const CategoriesFlowers = () => {
    const { flowersCategories, flowersCategoriesLoadingStatus, activeFlowersCategories } = useSelector(selectFlowersCategories);

    return useCategories('By flowers', fetchFlowersCategories, activeFlowersCategoryChange, flowersCategories, flowersCategoriesLoadingStatus, activeFlowersCategories);   
};

export default CategoriesFlowers;