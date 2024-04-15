import { useSelector } from 'react-redux';

import { useCategories } from '../../hooks/categories.hook';
import useFlowersService from '../../services/FlowersService';

import { coloursCategoriesFetching, coloursCategoriesFetched, coloursCategoriesFetchingError, activeColorsCategoryChange } from '../../redux/actions/actions';

const CategoriesColours = () => {
    const { coloursCategories, colorsCategoriesLoadingStatus, activeColorCategories } = useSelector(state => state.categories);

    const { getCategoriesColours } = useFlowersService();

    return useCategories('By colour', coloursCategoriesFetching, coloursCategoriesFetched, coloursCategoriesFetchingError, activeColorsCategoryChange, getCategoriesColours, coloursCategories, colorsCategoriesLoadingStatus, activeColorCategories);
};

export default CategoriesColours;