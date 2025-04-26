import { GET_STORE_KEEPER_SUCCESS,GET_STORE_KEEPER_REQUEST,GET_STORE_KEEPERS_SUCCESS,GET_STORE_KEEPER_FAIL,GET_STORE_KEEPERS_REQUEST,GET_STORE_KEEPERS_FAIL,DELETE_STORE_KEEPER_REQUEST,DELETE_STORE_KEEPER_FAIL,UPDATE_STORE_KEEPER_SUCCESS,UPDATE_STORE_KEEPER_REQUEST,UPDATE_STORE_KEEPER_FAIL,ADD_STORE_KEEPER_REQUEST,ADD_STORE_KEEPER_FAIL,ADD_STORE_KEEPER_SUCCESS,STORE_KEEPER_LOGIN_FAIL,STORE_KEEPER_LOGIN_REQUEST,STORE_KEEPER_LOGIN_SUCCESS,STORE_KEEPER_LOGOUT_SUCCESS } from "../constants/store-keepers";
import { USER_LOGIN_FAIL,USER_LOGIN_REQUEST,USER_LOGIN_SUCCESS,USER_LOGOUT_SUCCESS,USER_REGISTER_FAIL,USER_REGISTER_REQUEST,USER_REGISTER_SUCCESS } from "../constants/users";
const initialState={
  userInfo:null,
  loading:false,
  error:null
}



export function userRegisterReducer(state = initialState, action) {
  switch (action.type) {
    case USER_REGISTER_REQUEST:
      return { ...state,loading: true };
    case USER_REGISTER_SUCCESS:
      
      return { ...state,loading: false,userInfo: action.payload };
    case USER_REGISTER_FAIL:
      return { ...state,loading: false, error: action.payload };
    default: return state;
  }
}
export function userLoginReducer(state = {loading:false}, action) {
  switch (action.type) {
    case USER_LOGIN_REQUEST:
      return { ...state,loading: true };
    case USER_LOGIN_SUCCESS:
      
      return { ...state,loading: false,userInfo: action.payload };
    case USER_LOGIN_FAIL:
      return { ...state,loading: false, error: action.payload };
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

