
import { ADD_EXPENSE_FAIL,ADD_EXPENSE_REQUEST,ADD_EXPENSE_SUCCESS,GET_EXPENSES_FAIL,GET_EXPENSES_REQUEST,GET_EXPENSES_SUCCESS,GET_EXPENSE_FAIL,GET_EXPENSE_REQUEST,GET_EXPENSE_SUCCESS,DELETE_EXPENSE_FAIL,DELETE_EXPENSE_REQUEST,DELETE_EXPENSE_SUCCESS,UPDATE_EXPENSE_FAIL,UPDATE_EXPENSE_REQUEST,UPDATE_EXPENSE_SUCCESS } from "../constants/expenses";
export function createExpenseReducer(state={loading:true} , action) {
  switch (action.type) {
    case ADD_EXPENSE_REQUEST:
      return { loading: true };
    case ADD_EXPENSE_SUCCESS:
      return { loading: false, data: action.payload ,success:true};
    case ADD_EXPENSE_FAIL:
      return { loading: false, error: action.payload };
    default: 
    return state;
  }
}
export function getExpensesReducer(state = {loading:true}, action) {
  switch (action.type) {
    case GET_EXPENSES_REQUEST:
      return { loading: true };
    case GET_EXPENSES_SUCCESS:
      return { loading: false, data: action.payload };
    case GET_EXPENSES_FAIL:
      return { loading: false, error: action.payload ,errorStatus:true};
    default: return state;
  }
}
export function getExpenseReducer(state = {}, action) {
  switch (action.type) {
    case GET_EXPENSE_REQUEST:
      return { loading: true };
    case GET_EXPENSE_SUCCESS:
      return { loading: false, data: action.payload };
    case GET_EXPENSE_FAIL:
      return { loading: false, error: action.payload };
    default: return state;
  }
}
export function updateExpenseReducer(state = {}, action) {
  switch (action.type) {
    case UPDATE_EXPENSE_REQUEST:
      return { loading: true };
    case UPDATE_EXPENSE_SUCCESS:
      return { loading: false, data: action.payload };
    case UPDATE_EXPENSE_FAIL:
      return { loading: false, error: action.payload };
    default: return state;
  }
}
export function deleteExpenseReducer(state = {}, action) {
  switch (action.type) {
    case DELETE_EXPENSE_REQUEST:
      return { loading: true };
    case DELETE_EXPENSE_SUCCESS:
      return { loading: false, data: action.payload };
    case DELETE_EXPENSE_FAIL:
      return { loading: false, error: action.payload };
    default: return state;
  }
}
