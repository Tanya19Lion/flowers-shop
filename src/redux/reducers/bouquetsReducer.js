const initialState = {
    bouquets: [],
    bouquetsLoadingStatus: 'initial',
    error: null,
}

const bouquetsReducer = (state = initialState, action) => {

    switch(action.type) {
        case 'BOUQUETS_FETCHING':
            return {
                ...state,
                bouquets: [],
                bouquetsLoadingStatus: 'loading', 
                error: null
            };

        case 'BOUQUETS_FETCHED':
            return {
                ...state,
                bouquets: action.payload,
                bouquetsLoadingStatus: 'initial',
                error: null
            };

        case 'BOUQUETS_FETCHING_ERROR':
            return {
                ...state,
                bouquets: [],
                bouquetsLoadingStatus: 'error',
                orderList: state.orderList,
                error: action.payload
            };

        default:
            return state;
    }
}

export default bouquetsReducer;