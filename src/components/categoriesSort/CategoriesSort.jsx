import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import './CategoriesSort.scss';

import { activeSortCategoryChange } from '../../redux/slices/categoriesSlice';
import { selectActiveSortCategory } from '../../redux/selectors/selectors';

const classNames = require('classnames');

const categoriesSortData = [
    {
        id: 1,
        name: 'Popularity',
        value: 'popularity'
    },
    {
        id: 2,
        name: 'Cheap bouquets first',
        value: 'cheap-first'
    },
    {
        id: 3,
        name: 'Expensive bouquets first',
        value: 'expensive-first'
    }
];

const CategoriesSort = () => {
    const dispatch = useDispatch();
    const [listOpen, setListOpen] = useState(false); 
    const selectedSortCategory = useSelector(selectActiveSortCategory);

    const listClass = classNames({
		'catalog-sort__buttons': true,
		'open': listOpen
	});

    return (        
        <section className="catalog-sort"> 
            <div className="container">     
                <div className="catalog-sort__select">
                    <button className="catalog-sort__select-btn main-block select-btn" onClick={() => setListOpen(!listOpen)}>Sort by</button>
                    <div className={listClass}>
                        {
                            categoriesSortData.map(({id, name, value}) => {
                                return (
                                    <div className="catalog-sort__button" key={id}>
                                        <input 
                                            type="radio" 
                                            id={value} 
                                            name="catalog-sort" 
                                            value={value} 
                                            checked={selectedSortCategory === value}
                                            className="catalog-sort__button-input" 
                                            onChange={(e) => dispatch(activeSortCategoryChange(e.target.value))}
                                        />
                                        <label htmlFor={value} className="catalog-sort__button-label">{name}</label>
                                    </div>
                                )
                            })
                        }
                    </div>
                </div>
            </div>
        </section> 
    )
};

export default CategoriesSort;
