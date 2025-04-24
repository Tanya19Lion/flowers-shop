import { createSlice } from '@reduxjs/toolkit';

const initialState = {
    activeTopCategories: ['all'],
    activeSortCategory: 'idle',
    activeColorCategories: ['all'],
    activeFormatCategories: ['all'],
    activeFlowersCategories: ['all'],
    lowPriceLimit: 0,
    highPriceLimit: 4000,
    resetFilters: false,
    error: null
}

const filterCategories = (incomingValue, currentCategory) => {
    return incomingValue !== 'all' 
                ? currentCategory.includes(incomingValue)
                    ? currentCategory.filter( item => item !== incomingValue)
                    : Array.from(new Set([...currentCategory, incomingValue].filter(item => item !== 'all')))
                : [incomingValue]
}

const categoriesSlice = createSlice({
    name: 'categories',
    initialState,
    reducers: {
        activeTopCategoryChange(state, action) {
            state.activeTopCategories = filterCategories(action.payload, state.activeTopCategories);
        },
        activeSortCategoryChange(state, action) {
            state.activeSortCategory = action.payload;
        },
        activeColorCategoryChange(state, action) {
            state.activeColorCategories = filterCategories(action.payload, state.activeColorCategories);
        },
        activeFormatCategoryChange(state, action) {
            state.activeFormatCategories = filterCategories(action.payload, state.activeFormatCategories);
        },
        activeFlowersCategoryChange(state, action) {
            state.activeFlowersCategories = filterCategories(action.payload, state.activeFlowersCategories);
        },
        lowLimitChange(state, action) {
            state.lowPriceLimit = action.payload;
        },
        highLimitChange(state, action) {
            state.highPriceLimit = action.payload;
        },
        resetAllFilters(state) {
            state.resetFilters = !state.resetFilters;
        }
    },   
});

export const {
    activeTopCategoryChange,
    activeColorCategoryChange,
    activeFormatCategoryChange,
    activeFlowersCategoryChange,
    activeSortCategoryChange,
    lowLimitChange,
    highLimitChange,
    resetAllFilters
} = categoriesSlice.actions;

export default categoriesSlice.reducer;