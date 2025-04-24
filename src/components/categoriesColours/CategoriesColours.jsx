import { useSelector } from 'react-redux';

import { useCategories } from '../../hooks/categories.hook';

import { activeColorCategoryChange } from '../../redux/slices/categoriesSlice';
import { selectColorsCategories } from '../../redux/selectors/selectors';

const CategoriesColours = () => {
    const activeColorCategories = useSelector(selectColorsCategories);

    return useCategories('By colour', activeColorCategoryChange, activeColorCategories);
};

export default CategoriesColours;