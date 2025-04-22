import React, { useEffect } from 'react';
import { useDispatch } from 'react-redux';

import Spinner from '../components/spinner/Spinner.jsx';
import ErrorMessage from '../components/errorMessage/ErrorMessage.jsx';

export const useCategories = (categoryTitle, fetchAction, activeCategoriesChange, allCurrentCategories, currentCategoryStatus, activeCurrentCategories, categoryClassNames) => {
    const dispatch = useDispatch();

    useEffect(() => {
       dispatch(fetchAction());      
    }, []);

    if (currentCategoryStatus === 'loading') {
        return <Spinner />;
    } else if (currentCategoryStatus === 'error') {
        return <ErrorMessage />
    }

    if (allCurrentCategories.length === 0) {
        return <div className='catalog-details__no-data'>No categories are available</div>;
    } else if (categoryTitle === 'top-categories') {
        return (
            <div className="catalog-top__categories">
                <div className={categoryClassNames}>    
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
            <div className="catalog-details__inner-block">
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

