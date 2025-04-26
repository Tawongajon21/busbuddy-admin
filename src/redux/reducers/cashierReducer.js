import {GET_CASHIER_SUCCESS,GET_CASHIER_REQUEST,GET_CASHIER_FAIL,GET_CASHIERS_SUCCESS,GET_CASHIERS_REQUEST,GET_CASHIERS_FAIL,CASHIER_UPDATE_SUCCESS,CASHIER_UPDATE_REQUEST,CASHIER_UPDATE_FAIL,CASHIER_DELETE_SUCCESS,CASHIER_DELETE_REQUEST,CASHIER_DELETE_FAIL,CASHIER_LOGIN_FAIL,CASHIER_LOGIN_REQUEST,CASHIER_LOGIN_SUCCESS,CASHIER_LOGOUT_SUCCESS,CASHIER_REGISTER_FAIL,CASHIER_REGISTER_REQUEST,CASHIER_REGISTER_SUCCESS} from "../constants/cashier"

function cashierRegisterReducer(state = {}, action) {
  switch (action.type) {
    case CASHIER_REGISTER_REQUEST:
      return { loading: true };
    case CASHIER_REGISTER_SUCCESS:
      return { loading: false, data: action.payload,success:true };
    case CASHIER_REGISTER_FAIL:
    
      return { loading: false, error: action.payload};
    default: return state;
  }
}
function cashierLoginReducer(state = {}, action) {
  switch (action.type) {
    case CASHIER_LOGIN_REQUEST:
      return { loading: true };
    case CASHIER_LOGIN_SUCCESS:
      return { loading: false, cashierInfo: action.payload,success:true };
    case CASHIER_LOGIN_FAIL:
      return { loading: false, error: action.payload };
    default: return state;
  }
}

function getCashiersReducer(state = {}, action) {
  switch (action.type) {
    case GET_CASHIERS_REQUEST:
      return { loading: true };
    case GET_CASHIERS_SUCCESS:
      return { loading: false, data: action.payload,success:true };
    case GET_CASHIERS_FAIL:
      return { loading: false, error: action.payload };
    default: return state;
  }
}
function getCashierReducer(state = {}, action) {
  switch (action.type) {
    case GET_CASHIER_REQUEST:
      return { loading: true };
    case GET_CASHIER_SUCCESS:
      return { loading: false, data: action.payload,success:true };
    case GET_CASHIER_FAIL:
      return { loading: false, error: action.payload };
    default: return state;
  }
}

function deleteCashierReducer(state = {}, action) {
  switch (action.type) {
    case CASHIER_DELETE_REQUEST:
      return { loading: true };
    case CASHIER_DELETE_SUCCESS:
      return { loading: false, data: action.payload,success:true };
    case CASHIER_DELETE_FAIL:
      return { loading: false, error: action.payload };
    default: return state;
  }
}
function updateCashierReducer(state = {}, action) {
  switch (action.type) {
    case CASHIER_UPDATE_REQUEST:
      return { loading: true };
    case CASHIER_UPDATE_SUCCESS:
      return { loading: false, data: action.payload,success:true };
    case CASHIER_UPDATE_FAIL:
      return { loading: false, error: action.payload };
    default: return state;
  }
}
export {
    cashierRegisterReducer,cashierLoginReducer,getCashierReducer,getCashiersReducer,updateCashierReducer,deleteCashierReducer
}