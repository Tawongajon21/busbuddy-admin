import { GET_STOREKEEPER_SALES_REQUEST,GET_STOREKEEPER_SALES_SUCCESS,GET_STOREKEEPER_SALES_FAIL,ADD_SALE_FAIL,ADD_SALE_REQUEST,ADD_SALE_SUCCESS ,GET_SALES_FAIL,GET_SALES_REQUEST,GET_SALES_SUCCESS } from "../constants/sale";
export function createSaleReducer(state={loading:true} , action) {
    switch (action.type) {
      case ADD_SALE_REQUEST:
        return { loading: true };
      case ADD_SALE_SUCCESS:
        return { loading: false, data: action.payload ,success:true};
      case ADD_SALE_FAIL:
        return { loading: false, error: action.payload };
      default: 
      return state;
    }
  }
export function getSalesReducer(state={loading:true} , action) {
    switch (action.type) {
      case GET_SALES_REQUEST:
        return { loading: true };
      case GET_SALES_SUCCESS:
        return { loading: false, data: action.payload ,success:true};
      case GET_SALES_FAIL:
        return { loading: false, error: action.payload };
      default: 
      return state;
    }
  }
export function getStorekeeperSalesReducer(state={loading:true} , action) {
    switch (action.type) {
      case GET_STOREKEEPER_SALES_REQUEST:
        return { loading: true };
      case GET_STOREKEEPER_SALES_SUCCESS:
        return { loading: false, data: action.payload ,success:true};
      case GET_STOREKEEPER_SALES_FAIL:
        return { loading: false, error: action.payload };
      default: 
      return state;
    }
  }