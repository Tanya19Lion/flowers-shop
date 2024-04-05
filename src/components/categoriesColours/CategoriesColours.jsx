import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import Spinner from '../spinner/Spinner';

import { coloursCategoriesFetching, coloursCategoriesFetched, coloursCategoriesFetchingError } from '../../redux/actions/actions';
import useFlowersService from '../../services/FlowersService';
import { useFilters } from '../../context/FiltersProvider';

const CategoriesColours = () => {
    const { coloursCategories, categoriesLoadingStatus } = useSelector(state => state.categories);
    const dispatch = useDispatch();
    const { getCategoriesColours } = useFlowersService();
    const { filters, setFilters } = useFilters();

    useEffect(() => {
        dispatch(coloursCategoriesFetching());
        getCategoriesColours()
            .then(data => dispatch(coloursCategoriesFetched(data)))
            .catch(() => dispatch(coloursCategoriesFetchingError()))
    }, []);

    const handleChange = (e, category) => {
        if (e.target.checked) {
            setFilters({...filters, coloursFilters: [...filters.coloursFilters, category]});
        } else {
            const newValue = filters.coloursFilters.filter((condition) => condition !== category);
            setFilters({...filters, coloursFilters: newValue});
        }
    };

    if (categoriesLoadingStatus === 'loading') {
        return <Spinner />;
    } else if (categoriesLoadingStatus === 'error') {
        return <h3>Something went wrong</h3>
    }

    if (coloursCategories.length === 0) {
        return 'No categories are available';
    } else {
        return (
            <div className="catalog-details__inner-colours">
                <p className="catalog-details__inner-title green-text">
                    By colour
                </p>
                {
                    coloursCategories.map(item => {
                        const { id, name, value } = item;
                        const checked = filters.coloursFilters.some(category => {
                            return value === category;
                        });

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

export default CategoriesColours;