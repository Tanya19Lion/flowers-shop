import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { createSelector } from 'reselect';

import Spinner from '../spinner/Spinner';

import { bouquetsFetching , bouquetsFetched, bouquetsFetchingError } from '../../redux/actions/actions';
import { useFilters } from '../../context/FiltersProvider';
import useFlowersService from '../../services/FlowersService';

import './AllBouquets.scss';

const AllBouquets = () => {
    const bouquetsloadingStatus = useSelector(state => state.bouquets.bouquetsloadingStatus);
    const dispatch = useDispatch();

    const { getAllBouquets } = useFlowersService();
    const { filters } = useFilters();

    useEffect(() => {
        dispatch(bouquetsFetching());
        getAllBouquets()
            .then(data => dispatch(bouquetsFetched(data)))
            .catch(() => dispatch(bouquetsFetchingError()))
    }, []);

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

    let filteredBouquets = useSelector(filteredBouquetsSelector);

    const itemsForStart = 9;
    const itemsToLoad = 6;

    const [next, setNext] = useState(itemsForStart);

    const handleMoreItems = () => {
        setNext(next + itemsToLoad);
    }

    const sortedFlowers = createSelector(
        (state) => state.categories.activeSortCategory,
        (activeSortCategory) => {
            switch(activeSortCategory) {
                case 'popularity':
                    return [...filteredBouquets.sort((a, b) => b.popularity - a.popularity)];
                case 'cheap-first':
                    return [...filteredBouquets.sort((a, b) => a.price - b.price)];
                case 'expensive-first':
                    return [...filteredBouquets.sort((a, b) => b.price - a.price)];
                default:
                    return filteredBouquets;
            }
        }
    );
    useSelector(sortedFlowers);

    const { coloursFilters, flowersFilters, formatFilters, lowerPriceLimit, higherPriceLimit } = filters;
    
    const includesAny = (arr, values) => values.some(v => arr.includes(v));

     if (coloursFilters.length) {
        filteredBouquets = [...filteredBouquets].filter(bouquet => includesAny(bouquet.colour, coloursFilters));
    } else {
        filteredBouquets = [...filteredBouquets].filter(bouquet => bouquet.colour.includes('all'));
    }

    if (flowersFilters.length) {
        filteredBouquets = [...filteredBouquets].filter(bouquet => includesAny(bouquet.flowers, flowersFilters));
    } else {
        filteredBouquets = [...filteredBouquets].filter(bouquet => bouquet.flowers.includes('all'));
    }

    if (formatFilters.length) {
        filteredBouquets = [...filteredBouquets].filter(bouquet => includesAny(bouquet.format, formatFilters));
    } else {
        filteredBouquets = [...filteredBouquets].filter(bouquet => bouquet.format.includes('all'));
    }

    filteredBouquets = [...filteredBouquets].filter(bouquet => bouquet.price > lowerPriceLimit && bouquet.price < higherPriceLimit);
    
    if (bouquetsloadingStatus === 'loading') {
        return <Spinner />;
    } else if (bouquetsloadingStatus === 'error') {
        return <h3>Something went wrong</h3>
    }

    if (filteredBouquets.length === 0) {
        return 'No bouquets are available';
    } else {
        return (
            <div className="catalog-details__inner-items-block">
                <div className="catalog-details__inner-items flex">
                    {
                        filteredBouquets?.slice(0, next).map(item => {
                            const { id, name, price, imageSrc, altSign } = item;
                            return (
                                <div className="popular__inner-item" key={id}>
                                    <div className="popular__inner-item-image">
                                        <img src={imageSrc} alt={altSign} width="255" height="255" />
                                    </div>
                                    <h3 className="popular__inner-item-title common-subtitle">{name}</h3>
                                    <p className="popular__inner-item-price">£{price}</p>
                                    <Link to={`./${id}`} className="popular__inner-item-btn common-btn">Check more</Link>
                                </div>
                            )
                        })
                    }
                </div>
                {
                    next < filteredBouquets?.length && 
                    <button className="top-info__btn colored-btn" onClick={handleMoreItems}>Load more</button>
                }
            </div>
        )
    }
};

export default AllBouquets;