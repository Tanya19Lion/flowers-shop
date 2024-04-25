import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import './CategoriesSort.scss';

import { activeSortCategoryChange } from '../../redux/actions/actions';
import { selectActiveSortCategory } from '../../redux/selectors/selectors';

const classNames = require('classnames');

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
                        <div className="catalog-sort__button">
                            <input
                                type="radio" 
                                id="popularity" 
                                name="catalog-sort" 
                                value="popularity" 
                                checked={selectedSortCategory === "popularity"}
                                className="catalog-sort__button-input" 
                                onChange={(e) =>  dispatch(activeSortCategoryChange(e.target.value))}
                            />
                            <label htmlFor="popularity" className="catalog-sort__button-label">Popularity</label>
                        </div>
                        <div className="catalog-sort__button">
                            <input 
                                type="radio" 
                                id="cheap-first" 
                                name="catalog-sort" 
                                value="cheap-first" 
                                checked={selectedSortCategory === "cheap-first"}
                                className="catalog-sort__button-input" 
                                onChange={(e) =>  dispatch(activeSortCategoryChange(e.target.value))}
                            />
                            <label htmlFor="cheap-first" className="catalog-sort__button-label">Cheap bouquets first</label>
                        </div>
                        <div className="catalog-sort__button">
                            <input 
                                type="radio" 
                                id="expensive-first" 
                                name="catalog-sort" 
                                value="expensive-first" 
                                checked={selectedSortCategory === "expensive-first"}
                                className="catalog-sort__button-input" 
                                onChange={(e) =>  dispatch(activeSortCategoryChange(e.target.value))}
                            />
                            <label htmlFor="expensive-first" className="catalog-sort__button-label">Expensive bouquets first</label>
                        </div>
                    </div>
                </div>
            </div>
        </section> 
    )
};

export default CategoriesSort;
