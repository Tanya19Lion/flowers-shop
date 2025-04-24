import { useSelector } from 'react-redux';

import { useCategories } from '../../hooks/categories.hook';

import { activeFormatCategoryChange } from '../../redux/slices/categoriesSlice';
import { selectFormatCategories } from '../../redux/selectors/selectors';

const CategoriesFormat = () => {
    const activeFormatCategories = useSelector(selectFormatCategories);

    return useCategories('By format', activeFormatCategoryChange, activeFormatCategories);
};

export default CategoriesFormat;
