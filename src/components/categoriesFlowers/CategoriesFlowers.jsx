import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import Spinner from '../spinner/Spinner';

import { flowersCategoriesFetching, flowersCategoriesFetched, flowersCategoriesFetchingError, activeFlowersCategoryChange } from '../../redux/actions/actions';
import useFlowersService from '../../services/FlowersService';

const CategoriesFlowers = () => {
    const { flowersCategories, categoriesLoadingStatus, activeFlowersCategories } = useSelector(state => state.categories);
    const dispatch = useDispatch();
    const { getCategoriesFlowers } = useFlowersService();

    useEffect(() => {
        dispatch(flowersCategoriesFetching());
        getCategoriesFlowers()
            .then(data => dispatch(flowersCategoriesFetched(data)))
            .catch(() => dispatch(flowersCategoriesFetchingError()))
    }, []);

    if (categoriesLoadingStatus === 'loading') {
        return <Spinner />;
    } else if (categoriesLoadingStatus === 'error') {
        return <h3>Something went wrong</h3>
    }

    if (flowersCategories.length === 0) {
        return <div className='catalog-details__no-data'>No categories are available</div>;
    } else {
        return (
            <div className="catalog-details__inner-price">
                <p className="catalog-details__inner-title green-text">
                    By flowers
                </p> 
                {
                    flowersCategories.map(item => {
                        const { id, name, value } = item;
                        const checked = activeFlowersCategories.some(category => value === category);

                        if (name === "All") return;

                        return (
                            <div className="catalog-details__inner-checkbox-block" key={id}>                           
                                <input className="catalog-details__inner-checkbox" 
                                    type="checkbox" 
                                    id={value} 
                                    value={value}
                                    checked={checked}
                                    onChange={() => dispatch(activeFlowersCategoryChange(value))} 
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

export default CategoriesFlowers;