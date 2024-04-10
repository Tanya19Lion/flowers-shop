const initialState = {
    topCategories: [],
    activeTopCategories: ['all'],
    activeSortCategory: 'idle',
    coloursCategories: [],
    formatCategories: [],
    flowersCategories: [],
    categoriesLoadingStatus: 'initial',
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
                categoriesLoadingStatus: 'loading',
                error: null
            };
        case 'COLOURS_CATEGORIES_FETCHED':
            return {
                ...state,
                coloursCategories: action.payload,
                categoriesLoadingStatus: 'initial',
                error: null
            };
        case 'COLOURS_CATEGORIES_FETCHING_ERROR':
            return {
                ...state,
                coloursCategories: [],
                categoriesLoadingStatus: 'error',
                error: action.payload
            };

        case 'FORMAT_CATEGORIES_FETCHING':
            return {
                ...state,
                formatCategories: [],
                categoriesLoadingStatus: 'loading', 
                error: null
            };
        case 'FORMAT_CATEGORIES_FETCHED':
            return {
                ...state,
                formatCategories: action.payload,
                categoriesLoadingStatus: 'initial',
                error: null
            };
        case 'FORMAT_CATEGORIES_FETCHING_ERROR':
            return {
                ...state,
                formatCategories: [],
                categoriesLoadingStatus: 'error',
                error: action.payload
            };

        case 'FLOWERS_CATEGORIES_FETCHING':
            return {
                ...state,
                flowersCategories: [],
                categoriesLoadingStatus: 'loading', 
                error: null
            };
        case 'FLOWERS_CATEGORIES_FETCHED':
            return {
                ...state,
                flowersCategories: action.payload,
                categoriesLoadingStatus: 'initial',
                error: null
            };
        case 'FLOWERS_CATEGORIES_FETCHING_ERROR':
            return {
                ...state,
                flowersCategories: [],
                categoriesLoadingStatus: 'error',
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
    
        default:
            return state;
    }
}

export default categoriesReducer;