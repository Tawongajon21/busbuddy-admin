
import {GET_POS_FAIL,GET_POS_REQUEST,GET_POS_SUCCESS,GET_PO_FAIL,GET_PO_REQUEST,GET_PO_SUCCESS,UPDATE_PO_FAIL,UPDATE_PO_REQUEST,UPDATE_PO_SUCCESS,DELETE_PO_FAIL,DELETE_PO_REQUEST,DELETE_PO_SUCCESS,ADD_PO_FAIL,ADD_PO_REQUEST,ADD_PO_SUCCESS} from "../constants/purchase-order"
export function createPoReducer(state={loading:true} , action) {
  switch (action.type) {
    case ADD_PO_REQUEST:
      return { loading: true };
    case ADD_PO_SUCCESS:
      return { loading: false, data: action.payload ,success:true};
    case ADD_PO_FAIL:
      return { loading: false, error: action.payload };
    default: 
    return state;
  }
}
export function getPosReducer(state = {loading:true}, action) {
  switch (action.type) {
    case GET_POS_REQUEST:
      return { loading: true };
    case GET_POS_SUCCESS:
      return { loading: false, data: action.payload };
    case GET_POS_FAIL:
      return { loading: false, error: action.payload ,errorStatus:true};
    default: return state;
  }
}
export function getPoReducer(state = {}, action) {
  switch (action.type) {
    case GET_PO_REQUEST:
      return { loading: true };
    case GET_PO_SUCCESS:
      return { loading: false, data: action.payload };
    case GET_PO_FAIL:
      return { loading: false, error: action.payload };
    default: return state;
  }
}
export function updatePoReducer(state = {}, action) {
  switch (action.type) {
    case UPDATE_PO_REQUEST:
      return { loading: true };
    case UPDATE_PO_SUCCESS:
      return { loading: false, data: action.payload };
    case UPDATE_PO_FAIL:
      return { loading: false, error: action.payload };
    default: return state;
  }
}
export function deletePoReducer(state = {}, action) {
  switch (action.type) {
    case DELETE_PO_REQUEST:
      return { loading: true };
    case DELETE_PO_SUCCESS:
      return { loading: false, data: action.payload };
    case DELETE_PO_FAIL:
      return { loading: false, error: action.payload };
    default: return state;
  }
}
