import { DAILY_SALE_FAIL,DAILY_SALE_REQUEST,DAILY_SALE_SUCCESS,WEEKLY_SALE_FAIL,WEEKLY_SALE_REQUEST,WEEKLY_SALE_SUCCESS,MONTHLY_SALES_FAIL,MONTHLY_SALES_REQUEST,MONTHLY_SALES_SUCCESS,YEARLY_SALES_FAIL,YEARLY_SALES_REQUEST,YEARLY_SALES_SUCCESS,CUMULATIVE_SALE_FAIL,CUMULATIVE_SALE_REQUEST,CUMULATIVE_SALE_SUCCESS } from "../constants/aggregations";
export function dailySalesReducer(state={loading:true} , action) {
    switch (action.type) {
      case DAILY_SALE_REQUEST:
        return { loading: true };
      case DAILY_SALE_SUCCESS:
        return { loading: false, data: action.payload ,success:true};
      case DAILY_SALE_FAIL:
        return { loading: false, error: action.payload };
      default: 
      return state;
    }
  }
  export function weeklySalesReducer(state = {loading:true}, action) {
    switch (action.type) {
      case WEEKLY_SALE_REQUEST:
        return { loading: true };
      case WEEKLY_SALE_SUCCESS:
        return { loading: false, data: action.payload };
      case WEEKLY_SALE_FAIL:
        return { loading: false, error: action.payload ,errorStatus:true};
      default: return state;
    }
  }
  export function monthlySalesReducer(state = {}, action) {
    switch (action.type) {
      case MONTHLY_SALES_REQUEST:
        return { loading: true };
      case MONTHLY_SALES_SUCCESS:
        return { loading: false, data: action.payload };
      case MONTHLY_SALES_FAIL:
        return { loading: false, error: action.payload };
      default: return state;
    }
  }
  export function yearlySalesReducer(state = {}, action) {
    switch (action.type) {
      case YEARLY_SALES_REQUEST:
        return { loading: true };
      case YEARLY_SALES_SUCCESS:
        return { loading: false, data: action.payload };
      case YEARLY_SALES_FAIL:
        return { loading: false, error: action.payload };
      default: return state;
    }
  }
  export function cumulativeSalesReducer(state = {}, action) {
    switch (action.type) {
      case CUMULATIVE_SALE_REQUEST:
        return { loading: true };
      case CUMULATIVE_SALE_SUCCESS:
        return { loading: false, data: action.payload };
      case CUMULATIVE_SALE_FAIL:
        return { loading: false, error: action.payload };
      default: return state;
    }
  }
  