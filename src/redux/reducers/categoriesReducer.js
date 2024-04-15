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

const categoriesReducer = (state = initialState, action) => {

    switch(action.type) {
        case 'TOP_CATEGORIES_FETCHING':
            return {
                ...state,
                topCategories: [],
                categoriesLoadingStatus: 'loading', 
                error: null
            };
        case 'TOP_CATEGORIES_FETCHED':
            return {
                ...state,
                topCategories: action.payload,
                categoriesLoadingStatus: 'initial',
                error: null
            };
        case 'TOP_CATEGORIES_FETCHING_ERROR':
            return {
                ...state,
                topCategories: [],
                categoriesLoadingStatus: 'error',
                error: action.payload
            };

        case 'COLOURS_CATEGORIES_FETCHING':
            return {
                ...state,
                coloursCategories: [],
                colorsCategoriesLoadingStatus: 'loading',
                error: null
            };
        case 'COLOURS_CATEGORIES_FETCHED':
            return {
                ...state,
                coloursCategories: action.payload,
                colorsCategoriesLoadingStatus: 'initial',
                error: null
            };
        case 'COLOURS_CATEGORIES_FETCHING_ERROR':
            return {
                ...state,
                coloursCategories: [],
                colorsCategoriesLoadingStatus: 'error',
                error: action.payload
            };

        case 'FORMAT_CATEGORIES_FETCHING':
            return {
                ...state,
                formatCategories: [],
                formatCategoriesLoadingStatus: 'loading', 
                error: null
            };
        case 'FORMAT_CATEGORIES_FETCHED':
            return {
                ...state,
                formatCategories: action.payload,
                formatCategoriesLoadingStatus: 'initial',
                error: null
            };
        case 'FORMAT_CATEGORIES_FETCHING_ERROR':
            return {
                ...state,
                formatCategories: [],
                formatCategoriesLoadingStatus: 'error',
                error: action.payload
            };

        case 'FLOWERS_CATEGORIES_FETCHING':
            return {
                ...state,
                flowersCategories: [],
                flowersCategoriesLoadingStatus: 'loading', 
                error: null
            };
        case 'FLOWERS_CATEGORIES_FETCHED':
            return {
                ...state,
                flowersCategories: action.payload,
                flowersCategoriesLoadingStatus: 'initial',
                error: null
            };
        case 'FLOWERS_CATEGORIES_FETCHING_ERROR':
            return {
                ...state,
                flowersCategories: [],
                flowersCategoriesLoadingStatus: 'error',
                error: action.payload
            };
        
        case 'ACTIVE_TOP_CATEGORY_CHANGE': 
            return {
                ...state,
                activeTopCategories: action.payload !== 'all' 
                                        ? state.activeTopCategories.includes(action.payload)
                                            ? state.activeTopCategories.filter( item => item !== action.payload)
                                            : Array.from(new Set([...state.activeTopCategories, action.payload].filter(item => item !== 'all')))
                                        : [action.payload]
            }

        case 'ACTIVE_SORT_CATEGORY_CHANGE':
            return {
                ...state,
                activeSortCategory: action.payload
            } 

        case 'ACTIVE_COLOR_CATEGORY_CHANGE': 
            return {
                ...state,
                activeColorCategories: action.payload !== 'all' 
                    ? state.activeColorCategories.includes(action.payload)
                        ? state.activeColorCategories.filter( item => item !== action.payload)
                        : Array.from(new Set([...state.activeColorCategories, action.payload].filter(item => item !== 'all')))
                    : ['all']
            }

        case 'ACTIVE_FORMAT_CATEGORY_CHANGE': 
            return {
                ...state,
                activeFormatCategories: action.payload !== 'all' 
                    ? state.activeFormatCategories.includes(action.payload)
                        ? state.activeFormatCategories.filter( item => item !== action.payload)
                        : Array.from(new Set([...state.activeFormatCategories, action.payload].filter(item => item !== 'all')))
                    : ['all']
            }
        
        case 'ACTIVE_FLOWERS_CATEGORY_CHANGE': 
            return {
                ...state,
                activeFlowersCategories: action.payload !== 'all' 
                    ? state.activeFlowersCategories.includes(action.payload)
                        ? state.activeFlowersCategories.filter( item => item !== action.payload)
                        : Array.from(new Set([...state.activeFlowersCategories, action.payload].filter(item => item !== 'all')))
                    : ['all']
            }

        case 'LOW_LIMIT_CHANGE': 
            return {
                ...state,
                lowPriceLimit: action.payload
            }

        case 'HIGH_LIMIT_CHANGE': 
            return {
                ...state,
                highPriceLimit: action.payload
            }
            
        case 'RESET_ALL_FILTERS':
            return {
                ...state,
                resetFilters: !state.resetFilters
            }

        default:
            return state;
    }
}

export default categoriesReducer;