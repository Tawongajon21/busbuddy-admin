import {GET_DRIVER_TRIPS_SUCCESS,GET_DRIVER_TRIPS_REQUEST,GET_DRIVER_TRIPS_FAIL,GET_CONDUCTOR_TRIPS_SUCCESS,GET_CONDUCTOR_TRIPS_REQUEST,GET_CONDUCTOR_TRIPS_FAIL,UPDATE_CONDUCTOR_SUCCESS,UPDATE_CONDUCTOR_REQUEST,UPDATE_CONDUCTOR_FAIL,GET_CONDUCTOR_SUCCESS,GET_CONDUCTOR_REQUEST,GET_CONDUCTOR_FAIL,GET_CONDUCTORS_SUCCESS,GET_CONDUCTORS_REQUEST,GET_CONDUCTORS_FAIL,DELETE_CONDUCTOR_SUCCESS,DELETE_CONDUCTOR_REQUEST,DELETE_CONDUCTOR_FAIL,DELETE_DRIVER_SUCCESS,DELETE_DRIVER_REQUEST,DELETE_DRIVER_FAIL,UPDATE_DRIVER_SUCCESS,UPDATE_DRIVER_REQUEST,UPDATE_DRIVER_FAIL,RESET_ERROR,GET_DRIVER_SUCCESS,GET_DRIVER_REQUEST,GET_DRIVER_FAIL,GET_DRIVERS_SUCCESS,GET_DRIVERS_REQUEST,GET_DRIVERS_FAIL,DRIVER_REGISTRATION_SUCCESS,DRIVER_REGISTRATION_REQUEST,DRIVER_REGISTRATION_FAIL,DRIVER_LOGIN_SUCCESS,DRIVER_LOGIN_REQUEST,DRIVER_LOGIN_FAIL,CONDUCTOR_REGISTRATION_SUCCESS,CONDUCTOR_REGISTRATION_REQUEST,CONDUCTOR_REGISTRATION_FAIL,CONDUCTOR_LOGIN_SUCCESS,CONDUCTOR_LOGIN_REQUEST,CONDUCTOR_LOGIN_FAIL,COMPANY_OWNER_REGISTRATION_SUCCESS,COMPANY_OWNER_REGISTRATION_REQUEST,COMPANY_OWNER_REGISTRATION_FAIL,COMPANY_OWNER_LOGIN_SUCCESS,COMPANY_OWNER_LOGIN_REQUEST,COMPANY_OWNER_LOGIN_FAIL,GET_USERS_SUCCESS,GET_USERS_REQUEST,GET_USERS_FAIL,UPDATE_ADMIN_SUCCESS,UPDATE_ADMIN_REQUEST,UPDATE_ADMIN_FAIL,DELETE_ADMIN_SUCCESS,DELETE_ADMIN_FAIL,DELETE_ADMIN_REQUEST,GET_ADMIN_SUCCESS,GET_ADMIN_REQUEST,GET_ADMIN_FAIL,GET_ADMINS_SUCCESS,GET_ADMINS_REQUEST,GET_ADMINS_FAIL,ADMIN_LOGIN_FAIL,ADMIN_LOGIN_REQUEST,ADMIN_LOGIN_SUCCESS,ADMIN_LOGOUT_SUCCESS,ADMIN_REGISTER_FAIL,ADMIN_REGISTER_REQUEST,ADMIN_REGISTER_SUCCESS} from "../constants/admin"
const initialState={
  adminInfo:JSON.parse(localStorage.getItem('adminInfo')) ? JSON.parse(localStorage.getItem('adminInfo')) : null ,
  loading:false,
  error:null
}
export function conductorRegisterReducer(state ={conductorInfo:null,loading:false,error:null}, action) {
  switch (action.type) {
    case CONDUCTOR_REGISTRATION_REQUEST:
      return { ...state,loading: true };
    case CONDUCTOR_REGISTRATION_SUCCESS:
      return { ...state,loading: false, data: action.payload};
    case CONDUCTOR_REGISTRATION_FAIL:
    
      return { ...state,loading: false, error: action.payload};
    default: return state;
  }
}
export function conductorLoginReducer(state = {conductorInfo:JSON.parse(localStorage.getItem('conductorInfo')) ? JSON.parse(localStorage.getItem('conductorInfo')) : null ,loading:false,error:null}, action) {
  switch (action.type) {
    case CONDUCTOR_LOGIN_REQUEST:
      return { ...state,loading: true };
    case CONDUCTOR_LOGIN_SUCCESS:
      return { ...state,loading: false, conductorInfo: action.payload,success:true };
    case CONDUCTOR_LOGIN_FAIL:
      return { loading: false, error: action.payload };
    default: return state;
  }
}
export function driverRegisterReducer(state ={driverInfo:null,loading:false,error:null}, action) {
  console.log(action);
  switch (action.type) {
   
    case DRIVER_REGISTRATION_REQUEST:
      return { ...state,loading: true };
    case DRIVER_REGISTRATION_SUCCESS:
      return { ...state,loading: false, data: action.payload };
    case DRIVER_REGISTRATION_FAIL:
    
      return { ...state,loading: false, error: action.payload};
      case RESET_ERROR:
        return {...state,error: null}
    default: return state;
  }
}
export function driverLoginReducer(state = {driverInfo:JSON.parse(localStorage.getItem('driverInfo'))? JSON.parse(localStorage.getItem('driverInfo')): null,loading:false,error:null}, action) {
  switch (action.type) {
    case DRIVER_LOGIN_REQUEST:
      return { ...state,loading: true };
    case DRIVER_LOGIN_SUCCESS:
      return { ...state,loading: false, driverInfo: action.payload };
    case DRIVER_LOGIN_FAIL:
      return { ...state,loading: false, error: action.payload };
    default: return state;
  }
}
export function companyOwnerRegisterReducer(state = {companyOwnerInfo:null,loading:false,error:null}, action) {
  switch (action.type) {
    case COMPANY_OWNER_REGISTRATION_REQUEST:
      return { ...state,loading: true };
    case COMPANY_OWNER_REGISTRATION_SUCCESS:
      return { ...state,loading: false, data: action.payload,success:true };
    case COMPANY_OWNER_REGISTRATION_FAIL:
    
      return { ...state,oading: false, error: action.payload};
    default: return state;
  }
}
export function companyOwnerLoginReducer(state = {companyOwnerInfo:JSON.parse(localStorage.getItem('companyOwnerInfo')) ? JSON.parse(localStorage.getItem('companyOwnerInfo')) : null ,loading:false,error:null}, action) {
  switch (action.type) {
    case COMPANY_OWNER_LOGIN_REQUEST:
      return { ...state,loading: true };
    case COMPANY_OWNER_LOGIN_SUCCESS:
      return { ...state,loading: false, companyOwnerInfo: action.payload,success:true };
    case COMPANY_OWNER_LOGIN_FAIL:
      return { ...state,loading: false, error: action.payload };
    default: return state;
  }
}
export function adminRegisterReducer(state = initialState, action) {
  switch (action.type) {
    case ADMIN_REGISTER_REQUEST:
      return { ...state,loading: true };
    case ADMIN_REGISTER_SUCCESS:
      return { ...state,loading: false, data: action.payload };
    case ADMIN_REGISTER_FAIL:
    
      return { ...state,loading: false, error: action.payload};
    default: return state;
  }
}
export function adminLoginReducer(state = initialState, action) {
  switch (action.type) {
    case ADMIN_LOGIN_REQUEST:
      return { ...state,loading: true };
    case ADMIN_LOGIN_SUCCESS:
      return { ...state,loading: false, adminInfo: action.payload };
    case ADMIN_LOGIN_FAIL:
      return { ...state,loading: false, error: action.payload };
    default: return state;
  }
}
export function getAdminsReducer(state = {}, action) {
  switch (action.type) {
    case GET_ADMINS_REQUEST:
      return { loading: true };
    case GET_ADMINS_SUCCESS:
      return { loading: false, data: action.payload,success:true };
    case GET_ADMINS_FAIL:
      return { loading: false, error: action.payload };
    default: return state;
  }
}

export function getAdminReducer(state = {}, action) {
  switch (action.type) {
    case GET_ADMIN_REQUEST:
      return { loading: true };
    case GET_ADMIN_SUCCESS:
      return { loading: false, data: action.payload,success:true };
    case GET_ADMIN_FAIL:
      return { loading: false, error: action.payload };
    default: return state;
  }
}

export function deleteAdminReducer(state = {}, action) {
  switch (action.type) {
    case DELETE_ADMIN_REQUEST:
      return { loading: true };
    case DELETE_ADMIN_SUCCESS:
      return { loading: false, data: action.payload,success:true };
    case DELETE_ADMIN_FAIL:
      return { loading: false, error: action.payload };
    default: return state;
  }
}
export function updateAdminReducer(state = {}, action) {
  switch (action.type) {
    case UPDATE_ADMIN_REQUEST:
      return { loading: true };
    case UPDATE_ADMIN_SUCCESS:
      return { loading: false, data: action.payload,success:true };
    case UPDATE_ADMIN_FAIL:
      return { loading: false, error: action.payload };
    default: return state;
  }
}
export function getUsersReducer(state = {}, action) {
  switch (action.type) {
    case GET_USERS_REQUEST:
      return { loading: true };
    case GET_USERS_SUCCESS:
      return { loading: false, data: action.payload,success:true };
    case GET_USERS_FAIL:
      return { loading: false, error: action.payload };
    default: return state;
  }
}
export function getDriversReducer(state = {}, action) {
  switch (action.type) {
    case GET_DRIVERS_REQUEST:
      return { loading: true };
    case GET_DRIVERS_SUCCESS:
      return { loading: false, data: action.payload,success:true };
    case GET_DRIVERS_FAIL:
      return { loading: false, error: action.payload };
    default: return state;
  }
}
export function getDriverReducer(state = {}, action) {
  switch (action.type) {
    case GET_DRIVER_REQUEST:
      return { loading: true };
    case GET_DRIVER_SUCCESS:
      return { loading: false, data: action.payload,success:true };
    case GET_DRIVER_FAIL:
      return { loading: false, error: action.payload };
    default: return state;
  }
}
export function updateDriverReducer(state = {}, action) {
  console.log(action);
  switch (action.type) {
    case UPDATE_DRIVER_REQUEST:
      return { loading: true };
    case UPDATE_DRIVER_SUCCESS:
      return { loading: false, data: action.payload,success:true };
    case UPDATE_DRIVER_FAIL:
      return { loading: false, error: action.payload };
    default: return state;
  }
}
export function deleteDriverReducer(state = {}, action) {
  console.log(action);
  switch (action.type) {
    case DELETE_DRIVER_REQUEST:
      return { loading: true };
    case DELETE_DRIVER_SUCCESS:
      return { loading: false, data: action.payload,success:true };
    case DELETE_DRIVER_FAIL:
      return { loading: false, error: action.payload };
    default: return state;
  }
}
export function getConductorsReducer(state = {}, action) {
  switch (action.type) {
    case GET_CONDUCTORS_REQUEST:
      return { loading: true };
    case GET_CONDUCTORS_SUCCESS:
      return { loading: false, data: action.payload,success:true };
    case GET_CONDUCTORS_FAIL:
      return { loading: false, error: action.payload };
    default: return state;
  }
}
export function getConductorReducer(state = {}, action) {
  switch (action.type) {
    case GET_CONDUCTOR_REQUEST:
      return { loading: true };
    case GET_CONDUCTOR_SUCCESS:
      return { loading: false, data: action.payload,success:true };
    case GET_CONDUCTOR_FAIL:
      return { loading: false, error: action.payload };
    default: return state;
  }
}
export function updateConductorReducer(state = {}, action) {
  console.log(action);
  switch (action.type) {
    case UPDATE_CONDUCTOR_REQUEST:
      return { loading: true };
    case UPDATE_CONDUCTOR_SUCCESS:
      return { loading: false, data: action.payload,success:true };
    case UPDATE_CONDUCTOR_FAIL:
      return { loading: false, error: action.payload };
    default: return state;
  }
}
export function deleteConductorReducer(state = {}, action) {
  console.log(action);
  switch (action.type) {
    case DELETE_CONDUCTOR_REQUEST:
      return { loading: true };
    case DELETE_CONDUCTOR_SUCCESS:
      return { loading: false, data: action.payload,success:true };
    case DELETE_CONDUCTOR_FAIL:
      return { loading: false, error: action.payload };
    default: return state;
  }
}


export function getConductorTripsReducer(state = {}, action) {
  switch (action.type) {
    case GET_CONDUCTOR_TRIPS_REQUEST:
      return { loading: true };
    case GET_CONDUCTOR_TRIPS_SUCCESS:
      return { loading: false, data: action.payload,success:true };
    case GET_CONDUCTOR_TRIPS_FAIL:
      return { loading: false, error: action.payload };
    default: return state;
  }
}
export function getDriverTripsReducer(state = {}, action) {
  switch (action.type) {
    case GET_DRIVER_TRIPS_REQUEST:
      return { loading: true };
    case GET_DRIVER_TRIPS_SUCCESS:
      return { loading: false, data: action.payload,success:true };
    case GET_DRIVER_TRIPS_FAIL:
      return { loading: false, error: action.payload };
    default: return state;
  }
}