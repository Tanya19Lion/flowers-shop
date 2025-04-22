import { useSelector } from 'react-redux';

import { useCategories } from '../../hooks/categories.hook';

import { fetchFormatCategories, activeFormatCategoryChange } from '../../redux/slices/categoriesSlice';
import { selectFormatCategories } from '../../redux/selectors/selectors';

const CategoriesFormat = () => {
    const { formatCategories, formatCategoriesLoadingStatus, activeFormatCategories } = useSelector(selectFormatCategories);

    return useCategories('By format', fetchFormatCategories, activeFormatCategoryChange, formatCategories, formatCategoriesLoadingStatus, activeFormatCategories);
};

export default CategoriesFormat;
