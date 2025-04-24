import { useSelector } from 'react-redux';

import { useCategories } from '../../hooks/categories.hook';

import { activeFlowersCategoryChange } from '../../redux/slices/categoriesSlice';
import { selectFlowersCategories } from '../../redux/selectors/selectors';

const CategoriesFlowers = () => {
    const activeFlowersCategories = useSelector(selectFlowersCategories);

    return useCategories('By flowers', activeFlowersCategoryChange, activeFlowersCategories);   
};

export default CategoriesFlowers;