import {GET_COMPANIES_FAIL,GET_COMPANIES_REQUEST,GET_COMPANIES_SUCCESS,GET_COMPANY_FAIL,GET_COMPANY_REQUEST,GET_COMPANY_SUCCESS,ADD_COMPANY_FAIL,ADD_COMPANY_REQUEST,ADD_COMPANY_SUCCESS} from "../constants/company"

export function createCompanyReducer(state={loading:false} , action) {
    switch (action.type) {
      case ADD_COMPANY_REQUEST:
        return { loading: true };
      case ADD_COMPANY_SUCCESS:
        return { loading: false, data: action.payload ,success:true};
      case ADD_COMPANY_FAIL:
        return { loading: false, error: action.payload };
      default: 
      return state;
    }
  }
  export function getCompaniesReducer(state = {loading:true}, action) {
    switch (action.type) {
      case GET_COMPANIES_REQUEST:
        return { loading: true };
      case GET_COMPANIES_SUCCESS:
        return { loading: false, data: action.payload };
      case GET_COMPANIES_FAIL:
        return { loading: false, error: action.payload ,errorStatus:true};
      default: return state;
    }
  }
  export function getCompanyReducer(state = {loading:true}, action) {
    switch (action.type) {
      case GET_COMPANY_REQUEST:
        return { loading: true };
      case GET_COMPANY_SUCCESS:
        return { loading: false, data: action.payload };
      case GET_COMPANY_FAIL:
        return { loading: false, error: action.payload };
      default: return state;
    }
  }