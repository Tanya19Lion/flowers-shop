import { useSelector } from 'react-redux';

import { categories } from '../../hooks/categories.hook';

import { formatCategoriesFetching, formatCategoriesFetched, formatCategoriesFetchingError, activeFormatCategoryChange } from '../../redux/actions/actions';
import useFlowersService from '../../services/FlowersService';

const CategoriesFormat = () => {
    const { formatCategories, formatCategoriesLoadingStatus, activeFormatCategories } = useSelector(state => state.categories);

    const { getCategoriesFormat } = useFlowersService();

    return categories('By format', formatCategoriesFetching, formatCategoriesFetched, formatCategoriesFetchingError, activeFormatCategoryChange, getCategoriesFormat, formatCategories, formatCategoriesLoadingStatus, activeFormatCategories);

};

export default CategoriesFormat;
