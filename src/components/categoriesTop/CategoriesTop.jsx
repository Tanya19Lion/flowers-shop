import { useSelector } from 'react-redux';

import { useCategories } from '../../hooks/categories.hook';

import { activeTopCategoryChange } from '../../redux/slices/categoriesSlice';
import { selectTopCategories } from '../../redux/selectors/selectors';
 
import './CategoriesTop.scss';

export default function CategoriesTop({ topCategoriesBlockClasses }) {
    const activeTopCategories = useSelector(selectTopCategories);

    return useCategories('top-categories', activeTopCategoryChange, activeTopCategories, topCategoriesBlockClasses);
};


