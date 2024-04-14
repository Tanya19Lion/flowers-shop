import React, { useEffect } from 'react'; 
import { useDispatch, useSelector } from 'react-redux';

import Spinner from '../spinner/Spinner';

import { coloursCategoriesFetching, coloursCategoriesFetched, coloursCategoriesFetchingError, activeColorsCategoryChange } from '../../redux/actions/actions';
import useFlowersService from '../../services/FlowersService';

const CategoriesColours = () => {
    const { coloursCategories, categoriesLoadingStatus, activeColorCategories } = useSelector(state => state.categories);
    const dispatch = useDispatch();
    const { getCategoriesColours } = useFlowersService();

    useEffect(() => {
        dispatch(coloursCategoriesFetching());
        getCategoriesColours()
            .then(data => dispatch(coloursCategoriesFetched(data)))
            .catch(() => dispatch(coloursCategoriesFetchingError()))
    }, []);

    if (categoriesLoadingStatus === 'loading') {
        return <Spinner />;
    } else if (categoriesLoadingStatus === 'error') {
        return <h3>Something went wrong</h3>
    }

    if (coloursCategories.length === 0) {
        return <div className='catalog-details__no-data'>No categories are available</div>;
    } else {
        return (
            <div className="catalog-details__inner-colours">
                <p className="catalog-details__inner-title green-text">
                    By colour
                </p>
                {
                    coloursCategories.map(item => {
                        const { id, name, value } = item;
                        const checked = activeColorCategories.some((category) => {
                            return value === category;
                        });
                        
                        if (name === "All") return;

                        return (
                            <div className="catalog-details__inner-checkbox-block" key={id}>
                                <input className="catalog-details__inner-checkbox" 
                                    type="checkbox"
                                    id={value}
                                    value={value} 
                                    checked={checked}
                                    onChange={() => dispatch(activeColorsCategoryChange(value))}
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