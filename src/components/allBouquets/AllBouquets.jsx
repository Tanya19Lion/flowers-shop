import { useState, useMemo } from 'react';
import { Link } from 'react-router-dom';
import { useSelector } from 'react-redux';

import { useGetAllBouquetsQuery } from '../../api/apiSlice';
import { selectStateData } from '../../redux/selectors/selectors';

import Spinner from '../spinner/Spinner';
import ErrorMessage from '../errorMessage/ErrorMessage';

import './AllBouquets.scss';

const AllBouquets = () => {
    const { activeTopCategories, activeColorCategories, activeFormatCategories, activeFlowersCategories, activeSortCategory, lowPriceLimit, highPriceLimit } = useSelector(selectStateData);
    const { data: bouquets = [], isLoading, isError } = useGetAllBouquetsQuery();

    const includesAny = (arr, values) => values.some(v => arr.includes(v));

    const filteredBouquets = useMemo(() => {
        if (!bouquets || !Array.isArray(bouquets)) return [];

        let result = [...bouquets];

        if (!activeTopCategories.includes('all')) {
            result = Array.from(new Set(
                activeTopCategories.flatMap(category =>
                    result.filter(item => item.categories.includes(category))
                )
            ));
        }

        const filterByCategories = (items, key, active) => {
            if (!active.length) return items.filter(item => item[key].includes('all'));
            return items.filter(item => includesAny(item[key], active));
        };

        result = filterByCategories(result, 'colour', activeColorCategories);
        result = filterByCategories(result, 'flowers', activeFlowersCategories);
        result = filterByCategories(result, 'format', activeFormatCategories);

        result = result.filter(bouquet => bouquet.price > lowPriceLimit && bouquet.price < highPriceLimit);

        switch (activeSortCategory) {
            case 'popularity':
                return result.slice().sort((a, b) => b.popularity - a.popularity);
            case 'cheap-first':
                return result.slice().sort((a, b) => a.price - b.price);
            case 'expensive-first':
                return result.slice().sort((a, b) => b.price - a.price);
            default:
                return result;
        }
    }, [bouquets, activeTopCategories, activeColorCategories, activeFormatCategories, activeFlowersCategories, activeSortCategory, lowPriceLimit, highPriceLimit]);

    const itemsForStart = 9;
    const itemsToLoad = 6;

    const [next, setNext] = useState(itemsForStart);

    const handleMoreItems = () => {
        setNext(next + itemsToLoad);
    }
        
    if (isLoading) return <Spinner />;
    if (isError) return <ErrorMessage />;

    if (filteredBouquets.length === 0) {
        return <div className='catalog-details__no-data'>No bouquets are available</div>;
    } 

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
};

export default AllBouquets;