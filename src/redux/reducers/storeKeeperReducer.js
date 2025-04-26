import { GET_STORE_KEEPER_SUCCESS,GET_STORE_KEEPER_REQUEST,GET_STORE_KEEPERS_SUCCESS,GET_STORE_KEEPER_FAIL,GET_STORE_KEEPERS_REQUEST,GET_STORE_KEEPERS_FAIL,DELETE_STORE_KEEPER_REQUEST,DELETE_STORE_KEEPER_FAIL,UPDATE_STORE_KEEPER_SUCCESS,UPDATE_STORE_KEEPER_REQUEST,UPDATE_STORE_KEEPER_FAIL,ADD_STORE_KEEPER_REQUEST,ADD_STORE_KEEPER_FAIL,ADD_STORE_KEEPER_SUCCESS,STORE_KEEPER_LOGIN_FAIL,STORE_KEEPER_LOGIN_REQUEST,STORE_KEEPER_LOGIN_SUCCESS,STORE_KEEPER_LOGOUT_SUCCESS } from "../constants/store-keepers";


export function storeKeeperRegisterReducer(state = {loading:false}, action) {
  switch (action.type) {
    case ADD_STORE_KEEPER_REQUEST:
      return { loading: true };
    case ADD_STORE_KEEPER_SUCCESS:
      
      return { loading: false,data: action.payload,success:true };
    case ADD_STORE_KEEPER_FAIL:
      return { loading: false, error: action.payload };
    default: return state;
  }
}
export function storeKeeperLoginReducer(state = {}, action) {
  switch (action.type) {
    case STORE_KEEPER_LOGIN_REQUEST:
      return { loading: true };
    case STORE_KEEPER_LOGIN_SUCCESS:
      return { loading: false, storeKeeperInfo: action.payload };
    case STORE_KEEPER_LOGIN_FAIL:
      return { loading: false, error: action.payload };
    default: return state;
  }
}

export function updateStoreKeeperReducer(state = {}, action) {
    switch (action.type) {
      case UPDATE_STORE_KEEPER_REQUEST:
        return { loading: true };
      case UPDATE_STORE_KEEPER_SUCCESS:
        return { loading: false, data: action.payload };
      case UPDATE_STORE_KEEPER_FAIL:
        return { loading: false, error: action.payload };
      default: return state;
    }
  }
export function getStoreKeepersReducer(state = {loading:false}, action) {
    switch (action.type) {
      case GET_STORE_KEEPERS_REQUEST:
        return { loading: true };
      case GET_STORE_KEEPERS_SUCCESS:
       
        return { loading: false, data: action.payload };
      case GET_STORE_KEEPERS_FAIL:
        return { loading: false, error: action.payload };
      default: return state;
    }
  }
export function getStoreKeeperReducer(state = {}, action) {
    switch (action.type) {
      case GET_STORE_KEEPER_REQUEST:
        return { loading: true };
      case GET_STORE_KEEPER_SUCCESS:
        return { loading: false, data: action.payload };
      case GET_STORE_KEEPER_FAIL:
        return { loading: false, error: action.payload };
      default: return state;
    }
  }
export function deleteStoreKeeperReducer(state = {}, action) {
    switch (action.type) {
      case  DELETE_STORE_KEEPER_REQUEST:
        return { loading: true };
      case DELETE_STORE_KEEPER_REQUEST:
        return { loading: false, data: action.payload };
      case DELETE_STORE_KEEPER_FAIL:
        return { loading: false, error: action.payload };
      default: return state;
    }
  }

