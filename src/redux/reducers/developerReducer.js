import { DEVELOPER_LOGIN_FAIL,DEVELOPER_LOGIN_REQUEST,DEVELOPER_LOGIN_SUCCESS,DEVELOPER_LOGOUT_SUCCESS,DEVELOPER_REGISTER_FAIL,DEVELOPER_REGISTER_REQUEST,DEVELOPER_REGISTER_SUCCESS} from "../constants/developer";



function developerRegisterReducer(state = {}, action) {
  switch (action.type) {
    case DEVELOPER_REGISTER_REQUEST:
      return { loading: true };
    case DEVELOPER_REGISTER_SUCCESS:
      return { loading: false, devInfo: action.payload,success:true };
    case DEVELOPER_REGISTER_FAIL:
    
      return { loading: false, error: action.payload};
    default: return state;
  }
}
function developerLoginReducer(state = {}, action) {
  switch (action.type) {
    case DEVELOPER_LOGIN_REQUEST:
      return { loading: true };
    case DEVELOPER_LOGIN_SUCCESS:
      return { loading: false, devInfo: action.payload,success:true };
    case DEVELOPER_LOGIN_FAIL:
      return { loading: false, error: action.payload };
    default: return state;
  }
}
export {
developerLoginReducer,developerRegisterReducer
}