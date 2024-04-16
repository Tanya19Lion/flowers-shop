import { useSelector } from 'react-redux';

import { useCategories } from '../../hooks/categories.hook';
import useFlowersService from '../../services/FlowersService';

import { formatCategoriesFetching, formatCategoriesFetched, formatCategoriesFetchingError, activeFormatCategoryChange } from '../../redux/actions/actions';
import { selectFormatCategories } from '../../redux/selectors/selectors';

const CategoriesFormat = () => {
    const { formatCategories, formatCategoriesLoadingStatus, activeFormatCategories } = useSelector(selectFormatCategories);

    const { getCategoriesFormat } = useFlowersService();

    return useCategories('By format', formatCategoriesFetching, formatCategoriesFetched, formatCategoriesFetchingError, activeFormatCategoryChange, getCategoriesFormat, formatCategories, formatCategoriesLoadingStatus, activeFormatCategories);

};

export default CategoriesFormat;
