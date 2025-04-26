import {LOGOUT} from "../constants/logout"
import {frontendUrl} from "../../frontend-url"
export const logout = (role) => (dispatch) => {
    if (role==="developer") {
        localStorage.clear('devInfo');

        dispatch({ type: LOGOUT })
        window.location.href=`${frontendUrl}/developer-signin`
    }else if (role==="manager") {
        localStorage.clear('managerInfo');
        dispatch({ type: LOGOUT })
        window.location.href=`${frontendUrl}/manager-signin`
    }else if(role==="admin"){
        localStorage.clear('adminInfo');
        dispatch({ type: LOGOUT })
        window.location.href=`${frontendUrl}/admin-signin` 
    }else{
        localStorage.clear('cashierInfo');
        dispatch({ type: LOGOUT })
        window.location.href=`${frontendUrl}/cashier-signin`
    }
 
  }