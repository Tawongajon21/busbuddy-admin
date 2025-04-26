import { SHOP_OWNER_LOGIN_REQUEST,SHOP_OWNER_LOGIN_SUCCESS,SHOP_OWNER_LOGIN_FAIL,SHOP_OWNER_REGISTER_FAIL,SHOP_OWNER_REGISTER_SUCCESS,SHOP_OWNER_REGISTER_REQUEST ,SHOP_OWNER_LOGOUT_SUCCESS} from "../constants/shopowners";

import { ADD_PRODUCT_SUCCESS,ADD_PRODUCT_REQUEST,ADD_PRODUCT_FAIL,GET_PRODUCTS_SUCCESS,GET_PRODUCTS_FAIL,GET_PRODUCTS_REQUEST,GET_PRODUCT_FAIL,GET_PRODUCT_SUCCESS,GET_PRODUCT_REQUEST,UPDATE_PRODUCT_FAIL,UPDATE_PRODUCT_REQUEST,UPDATE_PRODUCT_SUCCESS,DELETE_PRODUCT_FAIL,DELETE_PRODUCT_REQUEST,DELETE_PRODUCT_SUCCESS } from "../constants/products";

export function createProductsReducer(state={loading:true} , action) {
  switch (action.type) {
    case ADD_PRODUCT_REQUEST:
      return { loading: true };
    case ADD_PRODUCT_SUCCESS:
      return { loading: false, data: action.payload ,success:true};
    case ADD_PRODUCT_FAIL:
      return { loading: false, error: action.payload };
    default: 
    return state;
  }
}
export function getProductsReducer(state = {loading:true}, action) {
  switch (action.type) {
    case GET_PRODUCTS_REQUEST:
      return { loading: true };
    case GET_PRODUCTS_SUCCESS:
      return { loading: false, data: action.payload };
    case GET_PRODUCTS_FAIL:
      return { loading: false, error: action.payload ,errorStatus:true};
    default: return state;
  }
}
export function getProductReducer(state = {}, action) {
  switch (action.type) {
    case GET_PRODUCT_REQUEST:
      return { loading: true };
    case GET_PRODUCT_SUCCESS:
      return { loading: false, data: action.payload };
    case GET_PRODUCTS_FAIL:
      return { loading: false, error: action.payload };
    default: return state;
  }
}
export function updateProductReducer(state = {}, action) {
  switch (action.type) {
    case UPDATE_PRODUCT_REQUEST:
      return { loading: true };
    case UPDATE_PRODUCT_SUCCESS:
      return { loading: false, data: action.payload,success:true };
    case UPDATE_PRODUCT_FAIL:
      return { loading: false, error: action.payload };
    default: return state;
  }
}
export function deleteProductReducer(state = {}, action) {
  switch (action.type) {
    case DELETE_PRODUCT_REQUEST:
      return { loading: true };
    case DELETE_PRODUCT_SUCCESS:
      return { loading: false, data: action.payload };
    case DELETE_PRODUCT_FAIL:
      return { loading: false, error: action.payload };
    default: return state;
  }
}
