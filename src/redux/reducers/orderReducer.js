const initialState = {
    bouquets: [],
    bouquetsLoadingStatus: 'initial',
    error: null,
    orderList: [],
    sumTotal: 0,
    isOrderModalOpen: false,
    isPhoneModalOpen: false
}

const AddOrUpdateOrderItem = (bouquet, item = {}, quantity) => {
    const { id = bouquet.id, name = bouquet.name, price = 0, count = 0} = item;

    const setPrice = () => {
        if (!bouquet) return price + item.price / item.count * quantity;
        return price + bouquet.price * quantity;
    }

    return {
        id, 
        name,
        price: setPrice(),
        count: count + quantity
    }
};

const updateOrderList = (orderList, item, index) => {
    if (item.count === 0) {
        return [
            ...orderList.slice(0, index),
            ...orderList.slice(index + 1)
        ]
    }

    if (index === -1) {
        return [
            ...orderList,
            item
        ]
    }

    return [
        ...orderList.slice(0, index),
        item,
        ...orderList.slice(index + 1)
    ]
};

const updateTotal = (total, bouquet, item, array, quantity) => {
    
    const initialTotal  = () => {
        if(!bouquet) return item.price;
        return bouquet.price;
    };

    switch(quantity) {
        case 1: 
            return array.reduce( (summ, item ) => summ + item.price, initialTotal());
        case -1:
            return total - item.price / item.count;
        case -item.count:
            return total - item.price;
        default:
            return total;
    }
};

const updateOrder = (state, bouquetId, quantity) => {
    const { bouquets, orderList, sumTotal } = state;

    const bouquet = bouquets.find( item => item.id === bouquetId);
    const itemIndex = orderList.findIndex(({ id }) => id === bouquetId);
    const item = orderList[itemIndex];

    let newItem = AddOrUpdateOrderItem(bouquet, item, quantity);

    return {
        ...state,
        isOrderModalOpen: true,
        orderList: updateOrderList(state.orderList, newItem, itemIndex),
        sumTotal: updateTotal(sumTotal, bouquet, item, orderList, quantity)
    }
};

const filterItems = (array, value) => {
    return array.filter(item => item.name.toLowerCase().indexOf(value.toLowerCase()) > -1 )
};

const orderReducer = (state = initialState, action) => {

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
                filteredBouquets: action.payload,
                bouquetsLoadingStatus: 'initial',
                error: null
            };

        case 'BOUQUETS_FETCHING_ERROR':
            return {
                ...state,
                bouquets: [],
                bouquetsLoadingStatus: 'error',
                orderList: state.orderList,
                error: action.value
            };

        case 'BOUQUET_ADDED_TO_ORDER':       
            return updateOrder(state, action.value, 1);

        case 'BOUQUET_REMOVED_FROM_ORDER':
            return updateOrder(state, action.value, -1);

        case 'BOUQUET_DELETED':
            const deletedItem = state.orderList.find( ({ id }) => id === action.value );
            return updateOrder(state, action.value, -deletedItem.count);
        
        case 'OPEN_ORDER_MODAL': 
            return {
                ...state,
                orderList: state.orderList,
                sumTotal: state.sumTotal,
                isOrderModalOpen: true
            }

        case 'CLOSE_ORDER_MODAL':
            return {
                ...state,
                orderList: [],           
                summTotal: 0,
                isModalOpen: false
            };
        
        case 'GO_BACK_TO_ORDER':
            return {
                ...state,
                isOrderModalOpen: false
            }
        
        default:
            return state;
    }
}

export default orderReducer;