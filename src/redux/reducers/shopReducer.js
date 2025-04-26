import { DELETE_SHOP_SUCCESS,DELETE_SHOP_REQUEST,DELETE_SHOP_FAIL,UPDATE_SHOP_SUCCESS,UPDATE_SHOP_REQUEST,UPDATE_SHOP_FAIL,GET_SHOP_SUCCESS,GET_SHOP_REQUEST,ADD_SHOP_REQUEST,ADD_SHOP_SUCCESS,ADD_SHOP_FAIL,GET_SHOPS_FAIL,GET_SHOPS_REQUEST,GET_SHOP_FAIL ,GET_SHOPS_SUCCESS} from "../constants/shops";
export function createShopReducer(state={loading:true} , action) {
  switch (action.type) {
    case ADD_SHOP_REQUEST:
      return { loading: true };
    case ADD_SHOP_SUCCESS:
      return { loading: false, data: action.payload ,success:true};
    case ADD_SHOP_FAIL:
      return { loading: false, error: action.payload };
    default: 
    return state;
  }
}
export function getShopsReducer(state = {loading:true}, action) {
  switch (action.type) {
    case GET_SHOPS_REQUEST:
      return { loading: true };
    case GET_SHOPS_SUCCESS:
      return { loading: false, data: action.payload };
    case GET_SHOPS_FAIL:
      return { loading: false, error: action.payload };
    default: return state;
  }
}
export function getShopReducer(state = {}, action) {
  switch (action.type) {
    case GET_SHOP_REQUEST:
      return { loading: true };
    case GET_SHOP_SUCCESS:
      return { loading: false, data: action.payload };
    case GET_SHOP_FAIL:
      return { loading: false, error: action.payload };
    default: return state;
  }
}
export function updateShopReducer(state = {}, action) {
  switch (action.type) {
    case UPDATE_SHOP_REQUEST:
      return { loading: true };
    case UPDATE_SHOP_SUCCESS:
      return { loading: false, data: action.payload,success:true };
    case UPDATE_SHOP_FAIL:
      return { loading: false, error: action.payload };
    default: return state;
  }
}
export function deleteShopReducer(state = {}, action) {
  switch (action.type) {
    case DELETE_SHOP_REQUEST:
      return { loading: true };
    case DELETE_SHOP_SUCCESS:
      return { loading: false, data: action.payload };
    case DELETE_SHOP_FAIL:
      return { loading: false, error: action.payload };
    default: return state;
  }
}
