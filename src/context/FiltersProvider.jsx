import React, { createContext, useContext, useState } from 'react';

export const FiltersContext = createContext(null);

export const FiltersProvider = (props) => {
    const [filters, setFilters] = useState([]);

    return (
        <FiltersContext.Provider value={{ filters, setFilters}}>
            {props.children}
        </FiltersContext.Provider>
    )
}

export const useFilters = () => {
    const context = useContext(FiltersContext);

    if (!context) {
        throw new Error('Please use filters provider');
    }

    return context;
}

