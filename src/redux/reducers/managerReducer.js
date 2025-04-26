import {MANAGER_DELETE_SUCCESS,MANAGER_DELETE_REQUEST,MANAGER_DELETE_FAIL,MANAGER_UPDATE_PASSWORD_FAIL,MANAGER_UPDATE_PASSWORD_SUCCESS,MANAGER_UPDATE_PASSWORD_REQUEST,MANAGER_UPDATE_SUCCESS,MANAGER_UPDATE_REQUEST,MANAGER_UPDATE_FAIL,GET_MANAGER_SUCCESS,GET_MANAGER_REQUEST,GET_MANAGER_FAIL,GET_MANAGERS_SUCCESS,GET_MANAGERS_REQUEST,GET_MANAGERS_FAIL,MANAGER_LOGIN_SUCCESS,MANAGER_LOGIN_FAIL,MANAGER_LOGIN_REQUEST,MANAGER_LOGOUT_SUCCESS,MANAGER_REGISTER_FAIL,MANAGER_REGISTER_REQUEST,MANAGER_REGISTER_SUCCESS} from "../constants/manager"

function managerRegisterReducer(state = {}, action) {
  switch (action.type) {
    case MANAGER_REGISTER_REQUEST:
      return { loading: true };
    case MANAGER_REGISTER_SUCCESS:
      return { loading: false, data: action.payload,success:true };
    case MANAGER_REGISTER_FAIL:
    
      return { loading: false, error: action.payload};
    default: return state;
  }
}
function managerLoginReducer(state = {}, action) {
  switch (action.type) {
    case MANAGER_LOGIN_REQUEST:
      return { loading: true };
    case MANAGER_LOGIN_SUCCESS:
      return { loading: false, managerInfo: action.payload,success:true };
    case MANAGER_LOGIN_FAIL:
      return { loading: false, error: action.payload };
    default: return state;
  }
}
function getManagersReducer(state = {}, action) {
  switch (action.type) {
    case GET_MANAGERS_REQUEST:
      return { loading: true };
    case GET_MANAGERS_SUCCESS:
      return { loading: false, data: action.payload,success:true };
    case GET_MANAGERS_FAIL:
      return { loading: false, error: action.payload };
    default: return state;
  }
}
function getManagerReducer(state = {}, action) {
  switch (action.type) {
    case GET_MANAGER_REQUEST:
      return { loading: true };
    case GET_MANAGER_SUCCESS:
      return { loading: false, data: action.payload,success:true };
    case GET_MANAGER_FAIL:
      return { loading: false, error: action.payload };
    default: return state;
  }
}
function updateManagerReducer(state = {}, action) {
  switch (action.type) {
    case MANAGER_UPDATE_REQUEST:
      return { loading: true };
    case MANAGER_UPDATE_SUCCESS:
      return { loading: false, data: action.payload,success:true };
    case MANAGER_UPDATE_FAIL:
      return { loading: false, error: action.payload };
    default: return state;
  }
}
function updateManagerPasswordReducer(state = {}, action) {
  switch (action.type) {
    case MANAGER_UPDATE_PASSWORD_REQUEST:
      return { loading: true };
    case MANAGER_UPDATE_PASSWORD_SUCCESS:
      return { loading: false, data: action.payload,success:true };
    case MANAGER_UPDATE_PASSWORD_FAIL:
      return { loading: false, error: action.payload };
    default: return state;
  }
}
function deleteManagerPasswordReducer(state = {}, action) {
  switch (action.type) {
    case MANAGER_DELETE_REQUEST:
      return { loading: true };
    case MANAGER_DELETE_SUCCESS:
      return { loading: false, data: action.payload,success:true };
    case MANAGER_DELETE_FAIL:
      return { loading: false, error: action.payload };
    default: return state;
  }
}

export {
  deleteManagerPasswordReducer,updateManagerPasswordReducer,managerRegisterReducer,managerLoginReducer,getManagersReducer,getManagerReducer,updateManagerReducer
}