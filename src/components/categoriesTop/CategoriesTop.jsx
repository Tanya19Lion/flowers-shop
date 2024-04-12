import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import Spinner from '../spinner/Spinner';

import { topCategoriesFetching, topCategoriesFetched, topCategoriesFetchingError, activeTopCategoryChange } from '../../redux/actions/actions';
import useFlowersService from '../../services/FlowersService';
 
import './CategoriesTop.scss';

export default function CategoriesTop() {
    const { topCategories, activeTopCategories, categoriesLoadingStatus } = useSelector(state => state.categories);
    const dispatch = useDispatch();
    const { getCategoriesTop } = useFlowersService();

    useEffect(() => {
        dispatch(topCategoriesFetching());
        getCategoriesTop()
            .then(data => dispatch(topCategoriesFetched(data)))
            .catch(() => dispatch(topCategoriesFetchingError()))
    }, []);

    if (categoriesLoadingStatus === 'loading') {
        return <Spinner />;
    } else if (categoriesLoadingStatus === 'error') {
        return <h3>Something went wrong</h3>
    }

    if (topCategories.length === 0) {
        return  <div className='catalog-details__no-data'>No categories are available</div>;
    } else {
        return (
            <div className="catalog-top__categories">
                <button className="catalog-top__categories-btn">Categories</button>
                <div className="catalog-top__categories-block flex">    
                    {
                        topCategories.map(item => {
                            const { id, name, value } = item;
                            const checked = activeTopCategories.some((category) => {
                                if (category === 'all' && value === 'all') return true;
                                return value === category;
                            });
                            
                            return (
                                <label className="catalog-top__categories-checkbox-block" key={id}>                            
                                    <input className="catalog-top__categories-checkbox" 
                                        type="checkbox" 
                                        value={value}
                                        checked={checked}
                                        onChange={() => dispatch(activeTopCategoryChange(value))}
                                    />
                                    <span className="catalog-top__categories-lable">{name}</span>
                                </label> 
                            )
                        })
                    }
                </div>
            </div>
        )
    }
};


// onClick={() => dispatch(activeTopCategoryChange(value))