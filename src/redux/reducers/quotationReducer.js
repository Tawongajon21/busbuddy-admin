
import { GET_QUOTATION_FAIL,ADD_QUOTATION_SUCCESS,ADD_QUOTATION_REQUEST,ADD_QUOTATION_FAIL,GET_QUOTATIONS_SUCCESS,GET_QUOTATIONS_REQUEST,GET_QUOTATIONS_FAIL,GET_QUOTATION_SUCCESS,GET_QUOTATION_REQUEST,UPDATE_QUOTATION_FAIL,UPDATE_QUOTATION_REQUEST,UPDATE_QUOTATION_SUCCESS,DELETE_QUOTATION_FAIL,DELETE_QUOTATION_REQUEST,DELETE_QUOTATION_SUCCESS } from "../constants/quotations";

export function createQuotationReducer(state={loading:true} , action) {
  switch (action.type) {
    case ADD_QUOTATION_REQUEST:
      return { loading: true };
    case ADD_QUOTATION_SUCCESS:
      return { loading: false, data: action.payload ,success:true};
    case ADD_QUOTATION_FAIL:
      return { loading: false, error: action.payload };
    default: 
    return state;
  }
}
export function getQuotationsReducer(state = {loading:true}, action) {
  switch (action.type) {
    case GET_QUOTATIONS_REQUEST:
      return { loading: true };
    case GET_QUOTATIONS_SUCCESS:
      return { loading: false, data: action.payload };
    case GET_QUOTATIONS_FAIL:
      return { loading: false, error: action.payload ,errorStatus:true};
    default: return state;
  }
}
export function getQuotationReducer(state = {}, action) {
  switch (action.type) {
    case GET_QUOTATION_REQUEST:
      return { loading: true };
    case GET_QUOTATION_SUCCESS:
      return { loading: false, data: action.payload };
    case GET_QUOTATION_FAIL:
      return { loading: false, error: action.payload };
    default: return state;
  }
}
export function updateQuotationReducer(state = {}, action) {
  switch (action.type) {
    case UPDATE_QUOTATION_REQUEST:
      return { loading: true };
    case UPDATE_QUOTATION_SUCCESS:
      return { loading: false, data: action.payload };
    case UPDATE_QUOTATION_FAIL:
      return { loading: false, error: action.payload };
    default: return state;
  }
}
export function deleteQuotationReducer(state = {}, action) {
  switch (action.type) {
    case DELETE_QUOTATION_REQUEST:
      return { loading: true };
    case DELETE_QUOTATION_SUCCESS:
      return { loading: false, data: action.payload };
    case DELETE_QUOTATION_FAIL:
      return { loading: false, error: action.payload };
    default: return state;
  }
}
