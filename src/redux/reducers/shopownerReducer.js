import { SHOP_OWNER_LOGIN_REQUEST,SHOP_OWNER_LOGIN_SUCCESS,SHOP_OWNER_LOGIN_FAIL,SHOP_OWNER_REGISTER_FAIL,SHOP_OWNER_REGISTER_SUCCESS,SHOP_OWNER_REGISTER_REQUEST ,SHOP_OWNER_LOGOUT_SUCCESS} from "../constants/shopowners";



function shopOwnerRegisterReducer(state = {}, action) {
  switch (action.type) {
    case SHOP_OWNER_REGISTER_REQUEST:
      return { loading: true };
    case SHOP_OWNER_REGISTER_SUCCESS:
      return { loading: false, shopOwnerInfo: action.payload,success:true };
    case SHOP_OWNER_REGISTER_FAIL:
    
      return { loading: false, error: action.payload};
    default: return state;
  }
}
function shopOwnerLoginReducer(state = {}, action) {
  switch (action.type) {
    case SHOP_OWNER_LOGIN_REQUEST:
      return { loading: true };
    case SHOP_OWNER_LOGIN_SUCCESS:
      return { loading: false, shopOwnerInfo: action.payload,success:true };
    case SHOP_OWNER_LOGIN_FAIL:
      return { loading: false, error: action.payload };
    default: return state;
  }
}
export {
 shopOwnerRegisterReducer,shopOwnerLoginReducer
}