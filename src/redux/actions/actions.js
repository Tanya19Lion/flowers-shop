const bouquetsFetching = () => {
    return {
        type: 'BOUQUETS_FETCHING'
    }
};
const bouquetsFetched = (items) => {
    return {
        type: 'BOUQUETS_FETCHED',
        payload: items
    }
};
const bouquetsFetchingError = (error) => {
    return {
        type: 'BOUQUETS_FETCHING_ERROR',
        payload: error
    }
};

const topCategoriesFetching = () => {
    return {
        type: 'TOP_CATEGORIES_FETCHING'
    }
}
const topCategoriesFetched = (items) => {
    return {
        type: 'TOP_CATEGORIES_FETCHED',
        payload: items
    }
};
const topCategoriesFetchingError = (error) => {
    return {
        type: 'TOP_CATEGORIES_FETCHING_ERROR',
        payload: error
    }
};

const coloursCategoriesFetching = () => {
    return {
        type: 'COLOURS_CATEGORIES_FETCHING'
    }
}
const coloursCategoriesFetched = (items) => {
    return {
        type: 'COLOURS_CATEGORIES_FETCHED',
        payload: items
    }
};
const coloursCategoriesFetchingError = (error) => {
    return {
        type: 'COLOURS_CATEGORIES_FETCHING_ERROR',
        payload: error
    }
};

const formatCategoriesFetching = () => {
    return {
        type: 'FORMAT_CATEGORIES_FETCHING'
    }
}
const formatCategoriesFetched = (items) => {
    return {
        type: 'FORMAT_CATEGORIES_FETCHED',
        payload: items
    }
};
const formatCategoriesFetchingError = (error) => {
    return {
        type: 'FORMAT_CATEGORIES_FETCHING_ERROR',
        payload: error
    }
};

const flowersCategoriesFetching = () => {
    return {
        type: 'FLOWERS_CATEGORIES_FETCHING'
    }
}
const flowersCategoriesFetched = (items) => {
    return {
        type: 'FLOWERS_CATEGORIES_FETCHED',
        payload: items
    }
};
const flowersCategoriesFetchingError = (error) => {
    return {
        type: 'FLOWERS_CATEGORIES_FETCHING_ERROR',
        payload: error
    }
};

const activeTopCategoryChange = (value) => {
    return {
        type: 'ACTIVE_TOP_CATEGORY_CHANGE',
        payload: value
    }
}

const activeSortCategoryChange = (value) => {
    return {
        type: 'ACTIVE_SORT_CATEGORY_CHANGE',
        payload: value
    }
}

const bouquetAddedToOrder = (bouquetId) => {
    return {
        type: 'BOUQUET_ADDED_TO_ORDER',
        payload: bouquetId
    }
};

const bouquetRemovedFromOrder = (bouquetId) => {
    return {
        type: 'BOUQUET_REMOVED_FROM_ORDER',
        payload: bouquetId
    }
};

const bouquetDeletedFromOrder = (bouquetId) => {
    return {
        type: 'BOUQUET_DELETED',
        payload: bouquetId
    };
};

const openPhoneModal = () => {
    return {
        type: 'OPEN_PHONE_MODAL'
    }
};

const closePhoneModal = () => {
    return {
        type: 'CLOSE_PHONE_MODAL'
    }
};

const openOrderModal = () => {
    return {
        type: 'OPEN_ORDER_MODAL'
    }
};

const closeOrderModal = () => {
    return {
        type: 'CLOSE_ORDER_MODAL'
    }
};

export {
    bouquetsFetching,
    bouquetsFetched,
    bouquetsFetchingError,
    topCategoriesFetched,
    topCategoriesFetching,
    topCategoriesFetchingError,
    formatCategoriesFetching,
    formatCategoriesFetched,
    formatCategoriesFetchingError,
    flowersCategoriesFetching,
    flowersCategoriesFetched,
    flowersCategoriesFetchingError,
    coloursCategoriesFetched,
    coloursCategoriesFetching,
    coloursCategoriesFetchingError,
    activeTopCategoryChange,
    activeSortCategoryChange,
    bouquetAddedToOrder,
    bouquetRemovedFromOrder,
    bouquetDeletedFromOrder,
    openPhoneModal,
    closePhoneModal,
    openOrderModal,
    closeOrderModal
}
