import React from 'react';

import './CategoriesSort.scss';

const CategoriesSort = () => {
    return (
        <>           
            <section className="catalog-sort"> 
                <div className="container">     
                    <div className="catalog-sort__select-block">
                        <select className="catalog-sort__select main-block">
                            <option className="catalog-sort__select-item catalog-sort__select-item--first" name="sort-by" value="sort-by" selected disabled>Sort by</option>
                            <option className="catalog-sort__select-item" name="popularity" value="popularity">Popularity</option>
                            <option className="catalog-sort__select-item" name="cheap-first" value="cheap-first">Cheap bouquets first</option>
                            <option className="catalog-sort__select-item" name="expensive-first" value="expensive-first">Expensive bouquets first</option>
                        </select>
                    </div>
                </div>
            </section>

            {/* <!-- <section className="catalog-sort"> 
                <div className="container">     
                    <div className="catalog-sort__block">
                        <button className="catalog-sort__block-btn">Sort by</button>

                        <ul className="catalog-sort__list">
                            <li className="catalog-sort__list-item" data-value="popularity">Popularity</li>
                            <li className="catalog-sort__list-item" data-value="cheap-first">Cheap bouquets first</li>
                            <li className="catalog-sort__list-item" data-value="expensive-first">Expensive bouquets first</li>
                        </ul>
                    </div>
                </div>
            </section> --> */}
        </>
    )
};

export default CategoriesSort;