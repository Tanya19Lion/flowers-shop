import { useSelector } from 'react-redux';

import { useCategories } from '../../hooks/categories.hook';

import { fetchColoursCategories, activeColorCategoryChange } from '../../redux/slices/categoriesSlice';
import { selectColorsCategories } from '../../redux/selectors/selectors';

const CategoriesColours = () => {
    const { coloursCategories, colorsCategoriesLoadingStatus, activeColorCategories } = useSelector(selectColorsCategories);

    return useCategories('By colour', fetchColoursCategories, activeColorCategoryChange, coloursCategories, colorsCategoriesLoadingStatus, activeColorCategories);
};

export default CategoriesColours;