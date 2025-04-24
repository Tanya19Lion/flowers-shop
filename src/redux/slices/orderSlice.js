import { createSlice } from '@reduxjs/toolkit';

const initialState = {
    orderList: [],
    sumTotal: 0,
    countTotal: 0,
    isOrderModalOpen: false,
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

const updateTotal = (total, item, array, quantity) => {    
    switch(quantity) {
        case 1: 
            return array.reduce( (summ, item ) => summ + item.price, 0 );
        case -1:
            return total - item.price / item.count;
        case -item.count:
            return total - item.price;
        default:
            return total;
    }
};

const updateCountTotal = (orderList) => {
    let counter = 0;

    orderList.forEach(item => {
        counter += item.count;
    });

    return counter;
}

const updateOrder = (state, bouquet, quantity) => {
    const bouquetId = bouquet.id;
    const itemIndex = state.orderList.findIndex(({ id }) => id == bouquetId);
    const item = state.orderList[itemIndex];

    let newItem = updateOrderItem(bouquet, item, quantity);    

    state.orderList = updateOrderList(state.orderList, newItem, itemIndex);
    state.sumTotal = updateTotal(state.sumTotal, item, state.orderList, quantity);
    state.countTotal = updateCountTotal(state.orderList);
    state.isOrderModalOpen = true;
};

const updateOrderItem = (bouquet, item = {}, quantity) => {
    const { id = bouquet.id, name = bouquet.name, imageSrc = bouquet.imageSrc, altSign = bouquet.altSign, price = 0, count = 0 } = item;

    const setPrice = () => {
        if (Object.keys(item).length !== 0) return price + item.price / item.count * quantity;
        return price + bouquet.price * quantity;
    }

    return {
        id, 
        name,
        imageSrc,
        altSign,
        price: setPrice(),
        count: count + quantity,
    }
};

const orderSlice = createSlice({
    name: 'order',
    initialState,
    reducers: {
        bouquetAddedToOrder: (state, action) => {updateOrder(state, action.payload, 1)},
        bouquetRemovedFromOrder: (state, action) => {updateOrder(state, action.payload, -1)},
        bouquetDeletedFromOrder: (state, action) => {
            const deletedItem = state.orderList.find( ({ id }) => id === action.payload.id );
            updateOrder(state, action.payload, -deletedItem.count);
        },
        orderModalOpen: (state) => {
            state.orderList = state.orderList,
            state.sumTotal = state.sumTotal,            
            state.isOrderModalOpen = true;
        },
        orderModalClose: (state) => {
            state.isOrderModalOpen = false;
        },
        clearOrderList: (state) => {
            state.orderList = [];
            state.sumTotal = 0;
            state.countTotal = 0;
        }
    }    
});

export const {
    bouquetAddedToOrder,
    bouquetRemovedFromOrder,
    bouquetDeletedFromOrder,
    orderModalOpen,
    orderModalClose,
    clearOrderList
} = orderSlice.actions;

export default orderSlice.reducer;