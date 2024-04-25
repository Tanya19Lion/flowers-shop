import { useSelector } from 'react-redux';

import { useCategories } from '../../hooks/categories.hook';
import useFlowersService from '../../services/FlowersService';

import { topCategoriesFetching, topCategoriesFetched, topCategoriesFetchingError, activeTopCategoryChange } from '../../redux/actions/actions';
import { selectTopCategories } from '../../redux/selectors/selectors';
 
import './CategoriesTop.scss';

export default function CategoriesTop({ topCategoriesBlockClasses }) {
    const { topCategories, categoriesLoadingStatus, activeTopCategories } = useSelector(selectTopCategories);

    const { getCategoriesTop } = useFlowersService();

    return useCategories('top-categories', topCategoriesFetching, topCategoriesFetched, topCategoriesFetchingError, activeTopCategoryChange, getCategoriesTop, topCategories, categoriesLoadingStatus, activeTopCategories, topCategoriesBlockClasses);
};


