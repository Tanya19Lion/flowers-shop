import { useSelector } from 'react-redux';

import { useCategories } from '../../hooks/categories.hook';

import { fetchTopCategories, activeTopCategoryChange } from '../../redux/slices/categoriesSlice';
import { selectTopCategories } from '../../redux/selectors/selectors';
 
import './CategoriesTop.scss';

export default function CategoriesTop({ topCategoriesBlockClasses }) {
    const { topCategories, categoriesLoadingStatus, activeTopCategories } = useSelector(selectTopCategories);

    return useCategories('top-categories', fetchTopCategories, activeTopCategoryChange, topCategories, categoriesLoadingStatus, activeTopCategories, topCategoriesBlockClasses);
};


