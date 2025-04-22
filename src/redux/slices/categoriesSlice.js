import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import useFlowersService from '../../services/useFlowersService';

const initialState = {
    topCategories: [],
    activeTopCategories: ['all'],
    activeSortCategory: 'idle',
    coloursCategories: [],
    activeColorCategories: ['all'],
    formatCategories: [],
    activeFormatCategories: ['all'],
    flowersCategories: [],
    activeFlowersCategories: ['all'],
    lowPriceLimit: 0,
    highPriceLimit: 4000,
    topCategoriesLoadingStatus: 'initial',
    formatCategoriesLoadingStatus: 'initial',
    flowersCategoriesLoadingStatus: 'initial',
    colorsCategoriesLoadingStatus: 'initial',
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

const { getCategoriesTop, getCategoriesColours, getCategoriesFormat, getCategoriesFlowers } = useFlowersService();

export const fetchTopCategories = createAsyncThunk(
    'categories/fetchTopCategories',
    async (_, thunkAPI) => {
        try {
            const data = await getCategoriesTop();
            return data;
        } catch (e) {
            return thunkAPI.rejectWithValue(e.message);
        }
    }
);

export const fetchColoursCategories = createAsyncThunk(
    'categories/fetchColoursCategories',
    async (_, thunkAPI) => {
        try {
            const data = await getCategoriesColours();
            return data;
        } catch (e) {
            return thunkAPI.rejectWithValue(e.message);
        }
    }
);

export const fetchFormatCategories = createAsyncThunk(
    'categories/fetchFormatCategories',
    async (_, thunkAPI) => {
        try {
            const data = await getCategoriesFormat();
            return data;
        } catch (e) {
            return thunkAPI.rejectWithValue(e.message);
        }
    }
);

export const fetchFlowersCategories = createAsyncThunk(
    'categories/fetchFlowersCategories',
    async (_, thunkAPI) => {
        try {
            const data = await getCategoriesFlowers();
            return data;
        } catch (e) {
            return thunkAPI.rejectWithValue(e.message);
        }
    }
);

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
    extraReducers: (builder) => {
        builder
            .addCase(fetchTopCategories.pending, (state) => {
                state.topCategories = [];
                state.topCategoriesLoadingStatus = 'loading';
                state.error = null;
            })
            .addCase(fetchTopCategories.fulfilled, (state, action) => {
                state.topCategories = action.payload;
                state.topCategoriesLoadingStatus = 'initial';
                state.error = null;
            })
            .addCase(fetchTopCategories.rejected, (state, action) => {
                state.topCategories = [];
                state.topCategoriesLoadingStatus = 'error';
                state.error = action.payload;
            })
            .addCase(fetchColoursCategories.pending, (state) => {
                state.coloursCategories = [];
                state.colorsCategoriesLoadingStatus = 'loading';
                state.error = null;
            })
            .addCase(fetchColoursCategories.fulfilled, (state, action) => {
                state.coloursCategories = action.payload;
                state.colorsCategoriesLoadingStatus = 'initial';
                state.error = null;
            })
            .addCase(fetchColoursCategories.rejected, (state, action) => {
                state.coloursCategories = [];
                state.colorsCategoriesLoadingStatus = 'error';
                state.error = action.payload;
            })
            .addCase(fetchFormatCategories.pending, (state) => {
                state.formatCategories = [];
                state.formatCategoriesLoadingStatus = 'loading';
                state.error = null;
            })
            .addCase(fetchFormatCategories.fulfilled, (state, action) => {
                state.formatCategories = action.payload;
                state.formatCategoriesLoadingStatus = 'initial';
                state.error = null;
            })
            .addCase(fetchFormatCategories.rejected, (state, action) => {
                state.formatCategories = [];
                state.formatCategoriesLoadingStatus = 'error';
                state.error = action.payload;
            })
            .addCase(fetchFlowersCategories.pending, (state) => {
                state.flowersCategories = [];
                state.flowersCategoriesLoadingStatus = 'loading';
                state.error = null;
            })
            .addCase(fetchFlowersCategories.fulfilled, (state, action) => {
                state.flowersCategories = action.payload;
                state.flowersCategoriesLoadingStatus = 'initial';
                state.error = null;
            })
            .addCase(fetchFlowersCategories.rejected, (state, action) => {
                state.flowersCategories = [];
                state.flowersCategoriesLoadingStatus = 'error';
                state.error = action.payload;
            })
            .addDefaultCase(() => {});
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