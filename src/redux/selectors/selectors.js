import { createSelector } from '@reduxjs/toolkit';

export const selectOrderModalOpen = (state) => state.order.isOrderModalOpen;

export const selectOrderList = (state) => state.order.orderList;

export const selectCountTotal = (state) => state.order.countTotal;

export const selectSumTotal = (state) => state.order.sumTotal;

export const selectLowPriceLimit = (state) => state.categories.lowPriceLimit;

export const selectHighPriceLimit = (state) => state.categories.highPriceLimit;

export const selectTopCategories = (state) => state.categories.activeTopCategories;

export const selectFlowersCategories = (state) => state.categories.activeFlowersCategories;

export const selectFormatCategories = (state) => state.categories.activeFormatCategories;

export const selectColorsCategories = (state) => state.categories.activeColorCategories;

export const selectActiveSortCategory = (state) => state.categories.activeSortCategory;

export const selectStateData = createSelector(
    [   selectTopCategories,
        selectColorsCategories,
        selectFormatCategories,
        selectFlowersCategories,
        selectActiveSortCategory,
        selectLowPriceLimit,
        selectHighPriceLimit
    ],
    (activeTopCategories, activeColorCategories, activeFormatCategories, activeFlowersCategories, activeSortCategory, lowPriceLimit, highPriceLimit) => { 
        return {
            activeTopCategories,
            activeColorCategories,
            activeFormatCategories,
            activeFlowersCategories,
            activeSortCategory,
            lowPriceLimit,
            highPriceLimit
        }
    }
);

export const selectPriceData = createSelector(
    [
        selectLowPriceLimit,
        selectHighPriceLimit,
        (state) => state.categories.resetFilters
    ],
    (lowPriceLimit, highPriceLimit, resetFilters) => { 
        return {
            lowPriceLimit,
            highPriceLimit,
            resetFilters
        }
    }
);

export const selectOrderSummData = createSelector(
    [ selectOrderList, selectSumTotal, selectCountTotal ],
    (orderList, sumTotal, countTotal) => { 
        return {
            orderList,
            sumTotal,
            countTotal
        }
    }
);
