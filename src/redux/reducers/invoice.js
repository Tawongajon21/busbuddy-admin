
import { ADD_INVOICE_FAIL,ADD_INVOICE_REQUEST,ADD_INVOICE_SUCCESS,GET_INVOICES_FAIL,GET_INVOICES_REQUEST,GET_INVOICES_SUCCESS,GET_INVOICE_FAIL,GET_INVOICE_REQUEST,GET_INVOICE_SUCCESS,UPDATE_INVOICE_FAIL,UPDATE_INVOICE_REQUEST,UPDATE_INVOICE_SUCCESS,DELETE_INVOICE_FAIL,DELETE_INVOICE_REQUEST,DELETE_INVOICE_SUCCESS} from "../constants/invoices";

export function createInvoiceReducer(state={loading:true} , action) {
  switch (action.type) {
    case ADD_INVOICE_REQUEST:
      return { loading: true };
    case ADD_INVOICE_SUCCESS:
      return { loading: false, data: action.payload ,success:true};
    case ADD_INVOICE_FAIL:
      return { loading: false, error: action.payload };
    default: 
    return state;
  }
}
export function getInvoicesReducer(state = {loading:true}, action) {
  switch (action.type) {
    case GET_INVOICES_REQUEST:
      return { loading: true };
    case GET_INVOICES_SUCCESS:
      return { loading: false, data: action.payload };
    case GET_INVOICES_FAIL:
      return { loading: false, error: action.payload ,errorStatus:true};
    default: return state;
  }
}
export function getInvoiceReducer(state = {}, action) {
  switch (action.type) {
    case GET_INVOICE_REQUEST:
      return { loading: true };
    case GET_INVOICE_SUCCESS:
      return { loading: false, data: action.payload };
    case GET_INVOICE_FAIL:
      return { loading: false, error: action.payload };
    default: return state;
  }
}
export function updateInvoiceReducer(state = {}, action) {
  switch (action.type) {
    case UPDATE_INVOICE_REQUEST:
      return { loading: true };
    case UPDATE_INVOICE_SUCCESS:
      return { loading: false, data: action.payload };
    case UPDATE_INVOICE_FAIL:
      return { loading: false, error: action.payload };
    default: return state;
  }
}
export function deleteInvoiceReducer(state = {}, action) {
  switch (action.type) {
    case DELETE_INVOICE_REQUEST:
      return { loading: true };
    case DELETE_INVOICE_SUCCESS:
      return { loading: false, data: action.payload };
    case DELETE_INVOICE_FAIL:
      return { loading: false, error: action.payload };
    default: return state;
  }
}
