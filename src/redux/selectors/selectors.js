import { createSelector } from 'reselect';

export const selectOrderModalOpen = createSelector(
    (state) => state.order.isOrderModalOpen,
    (isOrderModalOpen) => isOrderModalOpen   
);

export const selectOrderData = createSelector(
    [
		(state) => state.order.isOrderModalOpen,
		(state) => state.order.bouquets
	],
    (isOrderModalOpen, bouquets) => {
		return {
			isOrderModalOpen, 
			bouquets
		}
	} 
);

export const selectCountTotal = createSelector(
    (state) => state.order.countTotal,
    (countTotal) => countTotal    
);

export const selectTopCategories = createSelector(
    [
        (state) => state.categories.topCategories,
        (state) => state.categories.categoriesLoadingStatus,
        (state) => state.categories.activeTopCategories
    ],
    (topCategories, categoriesLoadingStatus, activeTopCategories) => { 
        return {
            topCategories,
            categoriesLoadingStatus,
            activeTopCategories
        }
    }
);

export const selectFlowersCategories = createSelector(
    [
        (state) => state.categories.flowersCategories,
        (state) => state.categories.flowersCategoriesLoadingStatus,
        (state) => state.categories.activeFlowersCategories
    ],
    (flowersCategories, flowersCategoriesLoadingStatus, activeFlowersCategories) => { 
        return {
            flowersCategories,
            flowersCategoriesLoadingStatus,
            activeFlowersCategories
        }
    }
);

export const selectFormatCategories = createSelector(
    [
        (state) => state.categories.formatCategories,
        (state) => state.categories.formatCategoriesLoadingStatus,
        (state) => state.categories.activeFormatCategories
    ],
    (formatCategories, formatCategoriesLoadingStatus, activeFormatCategories) => { 
        return {
            formatCategories,
            formatCategoriesLoadingStatus,
            activeFormatCategories
        }
    }
);

export const selectColorsCategories = createSelector(
    [
        (state) => state.categories.coloursCategories,
        (state) => state.categories.colorsCategoriesLoadingStatus,
        (state) => state.categories.activeColorCategories
    ],
    (coloursCategories, colorsCategoriesLoadingStatus, activeColorCategories) => { 
        return {
            coloursCategories,
            colorsCategoriesLoadingStatus,
            activeColorCategories
        }
    }
);

export const selectBouquetsloadingStatus = createSelector(
    (state) => state.order.bouquetsloadingStatus,
    (bouquetsloadingStatus) => bouquetsloadingStatus    
);

export const selectStateData = createSelector(
    [
        (state) => state.categories.activeColorCategories,
        (state) => state.categories.activeFormatCategories,
        (state) => state.categories.activeFlowersCategories,
        (state) => state.categories.lowPriceLimit,
        (state) => state.categories.highPriceLimit
    ],
    (activeColorCategories, activeFormatCategories, activeFlowersCategories, lowPriceLimit, highPriceLimit) => { 
        return {
            activeColorCategories,
            activeFormatCategories,
            activeFlowersCategories,
            lowPriceLimit,
            highPriceLimit
        }
    }
);

export const selectPriceData = createSelector(
    [
        (state) => state.categories.lowPriceLimit,
        (state) => state.categories.highPriceLimit,
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
    [
        (state) => state.order.orderList,
        (state) => state.order.sumTotal,
        (state) => state.order.countTotal
    ],
    (orderList, sumTotal, countTotal) => { 
        return {
            orderList,
            sumTotal,
            countTotal
        }
    }
);

export const selectActiveSortCategory = createSelector(
    [
        (state) => state.categories.activeSortCategory,
    ],
    activeSortCategory => activeSortCategory    
);