// Action Types
export const SET_PRODUCTS = 'SET_PRODUCTS';
export const ADD_RECENTLY_VIEWED = 'ADD_RECENTLY_VIEWED';

// Action Creators
export const setProducts = (products) => ({
  type: SET_PRODUCTS,
  payload: products,
});

export const addRecentlyViewed = (product) => ({
  type: ADD_RECENTLY_VIEWED,
  payload: product,
});
