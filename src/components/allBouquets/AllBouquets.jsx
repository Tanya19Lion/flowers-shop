import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';

import { fetchAllBouquets } from '../../redux/slices/orderSlice';
import { selectBouquetsloadingStatus, selectStateData, sortedFlowersSelector } from '../../redux/selectors/selectors';

import Spinner from '../spinner/Spinner';
import ErrorMessage from '../errorMessage/ErrorMessage';

import './AllBouquets.scss';

const AllBouquets = () => {
    const bouquetsloadingStatus = useSelector(selectBouquetsloadingStatus);
    const { activeColorCategories, activeFormatCategories, activeFlowersCategories, lowPriceLimit, highPriceLimit } = useSelector(selectStateData);

    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(fetchAllBouquets())
        // .then((result) => {
        //     console.log('Thunk result:', result); 
        // });       
    }, []);

    if (bouquetsloadingStatus === 'loading') {
        return <Spinner />;
    } else if (bouquetsloadingStatus === 'error') {
        return <ErrorMessage />;
    }

    let filteredBouquets = useSelector(sortedFlowersSelector);

    const includesAny = (arr, values) => values.some(v => arr.includes(v));
    
    const filterByCategories = (category, activeProp) => {
        if (category.length) {
            return filteredBouquets = [...filteredBouquets].filter(bouquet => includesAny(bouquet[activeProp], category));
        } else {
            filteredBouquets = [...filteredBouquets].filter(bouquet => bouquet[activeProp].includes('all'));
        }
    }

    filterByCategories(activeColorCategories, 'colour', activeColorCategories);
    filterByCategories(activeFlowersCategories, 'flowers', activeFlowersCategories);
    filterByCategories(activeFormatCategories, 'format', activeFormatCategories);

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