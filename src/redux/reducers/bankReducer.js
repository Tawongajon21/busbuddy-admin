import { GET_BANKS_FAIL,GET_BANKS_REQUEST,GET_BANKS_SUCCESS,GET_BANK_FAIL,GET_BANK_REQUEST,GET_BANK_SUCCESS,DELETE_BANK_FAIL,DELETE_BANK_REQUEST,DELETE_BANK_SUCCESS,ADD_BANK_FAIL,ADD_BANK_REQUEST,ADD_BANK_SUCCESS,UPDATE_BANK_FAIL,UPDATE_BANK_REQUEST,UPDATE_BANK_SUCCESS} from "../constants/bank";

export function createBankReducer(state={loading:false} , action) {
  switch (action.type) {
    case ADD_BANK_REQUEST:
      return { loading: true };
    case ADD_BANK_SUCCESS:
      return { loading: false, data: action.payload ,success:true};
    case ADD_BANK_FAIL:
      return { loading: false, error: action.payload };
    default: 
    return state;
  }
}
export function getBanksReducer(state = {loading:true}, action) {
  switch (action.type) {
    case GET_BANKS_REQUEST:
      return { loading: true };
    case GET_BANKS_SUCCESS:
      return { loading: false, data: action.payload };
    case GET_BANKS_FAIL:
      return { loading: false, error: action.payload };
    default: return state;
  }
}
export function getBankReducer(state = {}, action) {
  switch (action.type) {
    case GET_BANK_REQUEST:
      return { loading: true };
    case GET_BANK_SUCCESS:
      return { loading: false, data: action.payload };
    case GET_BANK_FAIL:
      return { loading: false, error: action.payload };
    default: return state;
  }
}
export function updateBankReducer(state = {}, action) {
  switch (action.type) {
    case UPDATE_BANK_REQUEST:
      return { loading: true };
    case UPDATE_BANK_SUCCESS:
      return { loading: false, data: action.payload,success:true };
    case UPDATE_BANK_FAIL:
      return { loading: false, error: action.payload };
    default: return state;
  }
}
export function deleteBankReducer(state = {}, action) {
  switch (action.type) {
    case DELETE_BANK_REQUEST:
      return { loading: true };
    case DELETE_BANK_SUCCESS:
      return { loading: false, data: action.payload };
    case DELETE_BANK_FAIL:
      return { loading: false, error: action.payload };
    default: return state;
  }
}
