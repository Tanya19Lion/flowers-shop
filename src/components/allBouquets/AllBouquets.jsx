import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { createSelector } from 'reselect';

import Spinner from '../spinner/Spinner';

import { bouquetsFetching , bouquetsFetched, bouquetsFetchingError } from '../../redux/actions/actions';
import useFlowersService from '../../services/FlowersService';

const AllBouquets = () => {
    const filteredBouquetsSelector = createSelector(
        (state) => state.categories.activeTopCategories,
        (state) => state.bouquets.bouquets,
        (activeTopCategories, bouquets) => {
            if (activeTopCategories.includes('all')) {
                return bouquets;
           }
           else {
                return Array.from(new Set( activeTopCategories.map(category => {
                    return bouquets.filter(item => item.categories.includes(category));                
                }).flat() ));
            }
        }
    );
    const filteredBouquets = useSelector(filteredBouquetsSelector);

    const bouquetsloadingStatus = useSelector(state => state.bouquets.bouquetsloadingStatus);
    const dispatch = useDispatch();
    const { getAllBouquets } = useFlowersService();

    useEffect(() => {
        dispatch(bouquetsFetching());
        getAllBouquets()
            .then(data => dispatch(bouquetsFetched(data)))
            .catch(() => dispatch(bouquetsFetchingError()))
    }, []);

    if (bouquetsloadingStatus === 'loading') {
        return <Spinner />;
    } else if (bouquetsloadingStatus === 'error') {
        return <h3>Something went wrong</h3>
    }

    if (filteredBouquets.length === 0) {
        return 'No bouquets are available';
    } else {
        return (
            <div className="catalog-details__inner-items flex">
                {
                    filteredBouquets.map(item => {
                        const { id, name, price, imageSrc, altSign } = item;
                        return (
                            <div className="popular__inner-item" key={id}>
                                <div className="popular__inner-item-image">
                                    <img src={imageSrc} alt={altSign} width="255" height="255" />
                                </div>
                                <h3 className="popular__inner-item-title common-subtitle">{name}</h3>
                                <p className="popular__inner-item-price">{price}</p>
                                <Link to={`./${id}`} className="popular__inner-item-btn common-btn">Check more</Link>
                            </div>
                        )
                    })
                }
            </div>
        )
    }
};

export default AllBouquets;