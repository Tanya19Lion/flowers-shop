import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { createSelector } from 'reselect';

import useFlowersService from '../../services/FlowersService';

import { bouquetsFetching , bouquetsFetched, bouquetsFetchingError } from '../../redux/actions/actions';
import { selectBouquetsloadingStatus, selectStateData } from '../../redux/selectors/selectors';

import Spinner from '../spinner/Spinner';

import './AllBouquets.scss';


const AllBouquets = () => {
    const { getAllBouquets } = useFlowersService();

    const bouquetsloadingStatus = useSelector(selectBouquetsloadingStatus);
    const { activeColorCategories, activeFormatCategories, activeFlowersCategories, lowPriceLimit, highPriceLimit } = useSelector(selectStateData);

    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(bouquetsFetching());
        getAllBouquets()
            .then(data => { 
                dispatch(bouquetsFetched(data));
            })
            .catch(() => dispatch(bouquetsFetchingError()))
    }, []);

    if (bouquetsloadingStatus === 'loading') {
        return <Spinner />;
    } else if (bouquetsloadingStatus === 'error') {
        return <h3>Something went wrong</h3>
    }

    const filteredBouquetsSelector = createSelector(
        (state) => state.categories.activeTopCategories,
        (state) => state.order.bouquets,
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

    const includesAny = (arr, values) => values.some(v => arr.includes(v));
    if (activeColorCategories.length) {
        filteredBouquets = [...filteredBouquets].filter(bouquet => includesAny(bouquet.colour, activeColorCategories));   
    } else {
        filteredBouquets = [...filteredBouquets].filter(bouquet => bouquet.colour.includes('all'));    
    }

    if (activeFlowersCategories.length) {
        filteredBouquets = [...filteredBouquets].filter(bouquet => includesAny(bouquet.flowers, activeFlowersCategories));
    } else {
        filteredBouquets = [...filteredBouquets].filter(bouquet => bouquet.flowers.includes('all'));
    }

    if (activeFormatCategories.length) {
        filteredBouquets = [...filteredBouquets].filter(bouquet => includesAny(bouquet.format, activeFormatCategories));
    } else {
        filteredBouquets = [...filteredBouquets].filter(bouquet => bouquet.format.includes('all'));
    }

    filteredBouquets = [...filteredBouquets].filter(bouquet => bouquet.price > lowPriceLimit && bouquet.price < highPriceLimit);
    
    const itemsForStart = 9;
    const itemsToLoad = 6;

    const [next, setNext] = useState(itemsForStart);

    const handleMoreItems = () => {
        setNext(next + itemsToLoad);
    }

    if (filteredBouquets.length === 0) {
        return <div className='catalog-details__no-data'>No bouquets are available</div>;
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