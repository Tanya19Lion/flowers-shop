import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import Spinner from '../spinner/Spinner';

import { flowersCategoriesFetching, flowersCategoriesFetched, flowersCategoriesFetchingError } from '../../redux/actions/actions';
import useFlowersService from '../../services/FlowersService';
import { useFilters } from '../../context/FiltersProvider';

const CategoriesFlowers = () => {
    const { flowersCategories, categoriesLoadingStatus } = useSelector(state => state.categories);
    const dispatch = useDispatch();
    const { getCategoriesFlowers } = useFlowersService();
    const { filters, setFilters } = useFilters();

    useEffect(() => {
        dispatch(flowersCategoriesFetching());
        getCategoriesFlowers()
            .then(data => dispatch(flowersCategoriesFetched(data)))
            .catch(() => dispatch(flowersCategoriesFetchingError()))
    }, []);

    const handleChange = (e, category) => {
        if (e.target.checked) {
            setFilters([...filters, category]);
        } else {
            const newValue = filters.filter((condition) => condition !== category);
            setFilters(newValue);
        }
    };

    if (categoriesLoadingStatus === 'loading') {
        return <Spinner />;
    } else if (categoriesLoadingStatus === 'error') {
        return <h3>Something went wrong</h3>
    }

    if (flowersCategories.length === 0) {
        return 'No categories are available';
    } else {
        return (
            <div className="catalog-details__inner-price">
                <p className="catalog-details__inner-title green-text">
                    By flowers
                </p> 
                {
                    flowersCategories.map(item => {
                        const { id, name, value } = item;
                        const checked = filters.some((category) => {
                            return value === category;
                        });

                        if (name === 'all') return;

                        return (
                            <div className="catalog-details__inner-checkbox-block" key={id}>                           
                                <input className="catalog-details__inner-checkbox" 
                                    type="checkbox" 
                                    id={value} 
                                    value={value}
                                    checked={checked}
                                    onChange={(e) => handleChange(e, value)} 
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