import React, { useEffect } from 'react'; 
import { useDispatch, useSelector } from 'react-redux';

import Spinner from '../spinner/Spinner';

import { formatCategoriesFetching, formatCategoriesFetched, formatCategoriesFetchingError, activeFormatCategoryChange } from '../../redux/actions/actions';
import useFlowersService from '../../services/FlowersService';

const CategoriesFormat = () => {
    const { formatCategories, categoriesLoadingStatus, activeFormatCategories } = useSelector(state => state.categories);
    const dispatch = useDispatch();
    const { getCategoriesFormat } = useFlowersService();

    useEffect(() => {
        dispatch(formatCategoriesFetching());
        getCategoriesFormat()
            .then(data => dispatch(formatCategoriesFetched(data)))
            .catch(() => dispatch(formatCategoriesFetchingError())) 
    }, []);

    if (categoriesLoadingStatus === 'loading') {
        return <Spinner />;
    } else if (categoriesLoadingStatus === 'error') {
        return <h3>Something went wrong</h3>
    }

    if (formatCategories.length === 0) {
        return <div className='catalog-details__no-data'>No categories are available</div>;
    } else {
        return (
            <div className="catalog-details__inner-format">
                <p className="catalog-details__inner-title green-text">
                    By format
                </p>     
                {
                    formatCategories.map( (item, i) => {
                        const { id, name, value } = item;
                        const checked = activeFormatCategories.some(category => value === category);

                        if (name === "All") return

                        return (
                            <div className="catalog-details__inner-checkbox-block" key={id}>                       
                                <input className="catalog-details__inner-checkbox" 
                                    type="checkbox"
                                    id={value} 
                                    value={value} 
                                    checked={checked}
                                    onChange={(() => dispatch(activeFormatCategoryChange(value)))}
                                />
                                <label className="catalog-details__inner-lable" htmlFor={value}>{name}</label>
                            </div>
                        )
                    })
                }
            </div>
        )
    }
};

export default CategoriesFormat;
