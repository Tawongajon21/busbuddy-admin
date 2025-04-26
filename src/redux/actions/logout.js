import {LOGOUT} from "../constants/logout"

export const logout = (role) => (dispatch) => {
    if (role==="developer") {
        localStorage.clear('devInfo');

        dispatch({ type: LOGOUT })
        window.location.href="http://localhost:3000/developer-signin" 
    }else if (role==="manager") {
        localStorage.clear('managerInfo');
        dispatch({ type: LOGOUT })
        window.location.href="http://localhost:3000/manager-signin" 
    }else if(role==="admin"){
        localStorage.clear('adminInfo');
        dispatch({ type: LOGOUT })
        window.location.href="http://localhost:3000/admin-signin" 
    }else{
        localStorage.clear('cashierInfo');
        dispatch({ type: LOGOUT })
        window.location.href="http://localhost:3000/cashier-signin" 
    }
 
  }