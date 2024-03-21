import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import Spinner from '../spinner/Spinner';

import { topCategoriesFetching, topCategoriesFetched, topCategoriesFetchingError, activeTopCategoryChange } from '../../redux/actions/actions';
import useFlowersService from '../../services/FlowersService';
import { useFilters } from '../../context/FiltersProvider';

import './CategoriesTop.scss';

// const classNames = require('classnames');

export default function CategoriesTop() {
    const { topCategories, categoriesLoadingStatus } = useSelector(state => state.categories);
    const dispatch = useDispatch();
    const { getCategoriesTop } = useFlowersService();
    const { filters, setFilters } = useFilters();

    useEffect(() => {
        dispatch(topCategoriesFetching());
        getCategoriesTop()
            .then(data => dispatch(topCategoriesFetched(data)))
            .catch(() => dispatch(topCategoriesFetchingError()))
    }, []);

    const handleChange = (e, category) => {
        if (e.target.checked) {
            setFilters([...filters, category]);
        } else {
            const newValue = filters.filter((condition) => condition !== category);
            setFilters(newValue);
        }
    };


    console.log('ALL FILTERS ', filters);

    if (categoriesLoadingStatus === 'loading') {
        return <Spinner />;
    } else if (categoriesLoadingStatus === 'error') {
        return <h3>Something went wrong</h3>
    }

    if (topCategories.length === 0) {
        return 'No categories are available';
    } else {
        return (
            <div className="catalog-top__categories">
                <button className="catalog-top__categories-btn">Categories</button>
                <div className="catalog-top__categories-block flex">    
                    {
                        topCategories.map(item => {
                            const { id, name, value } = item;
                            const checked = filters.some((category) => {
                                return value === category;
                            });

                            return (
                                <label className="catalog-top__categories-checkbox-block" key={id}>                            
                                    <input className="catalog-top__categories-checkbox" 
                                        type="checkbox" 
                                        value={value}
                                        checked={checked}
                                        onChange={(e) => handleChange(e, value)} 
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
}


// onClick={() => dispatch(activeTopCategoryChange(value))