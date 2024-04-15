import { useSelector } from 'react-redux';

import { categories } from '../../hooks/categories.hook';

import { coloursCategoriesFetching, coloursCategoriesFetched, coloursCategoriesFetchingError, activeColorsCategoryChange } from '../../redux/actions/actions';
import useFlowersService from '../../services/FlowersService';

const CategoriesColours = () => {
    const { coloursCategories, colorsCategoriesLoadingStatus, activeColorCategories } = useSelector(state => state.categories);

    const { getCategoriesColours } = useFlowersService();

    return categories('By colour', coloursCategoriesFetching, coloursCategoriesFetched, coloursCategoriesFetchingError, activeColorsCategoryChange, getCategoriesColours, coloursCategories, colorsCategoriesLoadingStatus, activeColorCategories);
};

export default CategoriesColours;