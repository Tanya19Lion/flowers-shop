import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import useFlowersService from '../services/FlowersService';

import { bouquetsFetching , bouquetsFetched, bouquetsFetchingError } from '../redux/actions/actions';
import { Catalog } from '../pages';
import Spinner from '../components/spinner/Spinner';

import { FiltersProvider } from '../context/FiltersProvider';

export const CatalogContainer = () => {
    const { getAllBouquets } = useFlowersService();

    const bouquetsloadingStatus = useSelector(state => state.order.bouquetsloadingStatus);

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

    return (
        <FiltersProvider>
            <Catalog/>
        </FiltersProvider>
    )
}
