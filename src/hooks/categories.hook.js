import React, { useEffect } from 'react';
import { useDispatch } from 'react-redux';

import Spinner from '../components/spinner/Spinner.jsx';

export const useCategories = (categoryTitle, actionFetching, actionFetched, actionFetchinError, activeCategoriesChange, categoryService, allCurrentCategories, currentCategoryStatus, activeCurrentCategories) => {
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(actionFetching());
        categoryService()
            .then(data => dispatch(actionFetched(data)))
            .catch(() => dispatch(actionFetchinError()))
    }, []);

    if (currentCategoryStatus === 'loading') {
        return <Spinner />;
    } else if (currentCategoryStatus === 'error') {
        return <h3>Something went wrong</h3>
    }

    if (allCurrentCategories.length === 0) {
        return <div className='catalog-details__no-data'>No categories are available</div>;
    } else if (categoryTitle === 'top-categories') {
        return (
            <div className="catalog-top__categories">
                <button className="catalog-top__categories-btn">Categories</button>
                <div className="catalog-top__categories-block flex">    
                    {
                        allCurrentCategories.map(item => {
                            const { id, name, value } = item;
                            const checked = activeCurrentCategories.some((category) => {
                                if (category === 'all' && value === 'all') return true;
                                return value === category;
                            });
                            
                            return (
                                <label className="catalog-top__categories-checkbox-block" key={id}>                            
                                    <input className="catalog-top__categories-checkbox" 
                                        type="checkbox" 
                                        value={value}
                                        checked={checked}
                                        onChange={() => dispatch(activeCategoriesChange(value))}
                                    />
                                    <span className="catalog-top__categories-lable">{name}</span>
                                </label> 
                            )
                        })
                    }
                </div>
            </div>
        )
    } else {
        return (
            <div className="catalog-details__inner-price">
                <p className="catalog-details__inner-title green-text">
                    {categoryTitle}
                </p> 
                {
                    allCurrentCategories.map(item => {
                        const { id, name, value } = item;
                        const checked = activeCurrentCategories.some(category => value === category);

                        if (name === "All") return;

                        return (
                            <div className="catalog-details__inner-checkbox-block" key={id}>                           
                                <input className="catalog-details__inner-checkbox" 
                                    type="checkbox" 
                                    id={value} 
                                    value={value}
                                    checked={checked}
                                    onChange={() => dispatch(activeCategoriesChange(value))} 
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

