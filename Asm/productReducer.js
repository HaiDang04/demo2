import { SET_PRODUCTS, ADD_RECENTLY_VIEWED } from './productActions';

const initialState = {
  productList: [],
  newPhoneList: [],
  recentlyViewed: [],
};

const productReducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_PRODUCTS:
      return {
        ...state,
        productList: action.payload.productList,
        newPhoneList: action.payload.newPhoneList,
      };
    case ADD_RECENTLY_VIEWED:
      return {
        ...state,
        recentlyViewed: [action.payload, ...state.recentlyViewed],
      };
    default:
      return state;
  }
};

export default productReducer;
