import React from 'react';
import { Catalog } from '../pages';

import { FiltersProvider } from '../context/FiltersProvider';

export const CatalogContainer = () => {
    return (
        <FiltersProvider>
            <Catalog />
        </FiltersProvider>
    )
}