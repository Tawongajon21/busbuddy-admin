import {MANAGER_DELETE_SUCCESS,MANAGER_DELETE_REQUEST,MANAGER_DELETE_FAIL,MANAGER_UPDATE_PASSWORD_SUCCESS,MANAGER_UPDATE_PASSWORD_REQUEST,MANAGER_UPDATE_PASSWORD_FAIL,MANAGER_UPDATE_SUCCESS,MANAGER_UPDATE_REQUEST,MANAGER_UPDATE_FAIL,GET_MANAGER_SUCCESS,GET_MANAGER_REQUEST,GET_MANAGER_FAIL,GET_MANAGERS_SUCCESS,GET_MANAGERS_REQUEST,GET_MANAGERS_FAIL,MANAGER_LOGIN_FAIL,MANAGER_LOGIN_REQUEST,MANAGER_LOGIN_SUCCESS,MANAGER_LOGOUT_SUCCESS,MANAGER_REGISTER_FAIL,MANAGER_REGISTER_REQUEST,MANAGER_REGISTER_SUCCESS} from "../constants/manager";
import { DRIVER_LOGOUT_SUCCESS,ADMIN_LOGOUT_SUCCESS,COMPANY_OWNER_LOGOUT_SUCCESS,CONDUCTOR_LOGOUT_SUCCESS,USER_REGISTER_REQUEST,USER_LOGIN_FAIL,USER_LOGIN_REQUEST,USER_LOGIN_SUCCESS,USER_LOGOUT_SUCCESS,USER_REGISTER_FAIL,USER_REGISTER_SUCCESS } from "../constants/users";
import Cookie from 'js-cookie';
import { Axios } from "axios";
import axios from "axios";
import { baseUrl } from "./baseUrl";
export const  usersignin = (email, password) => async (dispatch) => {
    dispatch({ type: USER_LOGIN_REQUEST, payload: { email, password } });
    try {
      
      const { data } = await axios.post(`${baseUrl}auth/admin-signin`, {  email, password  });
      dispatch({ type:USER_LOGIN_SUCCESS, payload: data });
     
      localStorage.setItem("userInfo",JSON.stringify(data))
      
    } catch (error) {
      
      dispatch({ type: USER_LOGIN_FAIL, payload: error.response.data.message });
    }
  }
  
 export const userregister = (name,email,password,phone,surname) => async (dispatch) => {
  console.log(name,email,password,phone,surname);
    dispatch({ type: USER_REGISTER_REQUEST, payload: { name,email,password,phone,surname } });
    try {
      const { data } = await axios.post(`${baseUrl}auth/admin-signup`, {name,email,password,phone,surname});
    
      dispatch({ type: USER_REGISTER_SUCCESS, payload: data });

      localStorage.setItem("userInfo",JSON.stringify(data))
    
     
      
      
    } catch (error) {
  console.log(error);
  let payload=error.response.data.msg
      dispatch({ type:  USER_REGISTER_FAIL,payload});
    }
  }
  
 export const userLogout = (role) => (dispatch) => {
if (role==="user") {
  localStorage.removeItem("userInfo")
  dispatch({ type:USER_LOGOUT_SUCCESS })
  window.location.reload()

}else if(role==="companyOwner"){
  localStorage.removeItem("companyOwnerInfo")
  dispatch({ type:COMPANY_OWNER_LOGOUT_SUCCESS})
  window.location.assign('http://localhost:3005/')
}
else if(role==="driver"){
  localStorage.removeItem("driverInfo")
  dispatch({ type:DRIVER_LOGOUT_SUCCESS})
  window.location.assign('http://localhost:3005/')
}
else if(role==="Admin"){
  localStorage.removeItem("adminInfo")
  dispatch({ type:ADMIN_LOGOUT_SUCCESS})
  window.location.assign('http://localhost:3005/')
  
}else{
  localStorage.removeItem("conductorInfo")
  dispatch({ type:CONDUCTOR_LOGOUT_SUCCESS})
  window.location.assign('http://localhost:3005/')
}

    
  }


  export const getmanagers =(signature)=>async(dispatch,getState)=>{

    dispatch({
        type:GET_MANAGERS_REQUEST
    });
 

    try {
      const {data}  = await axios.get(`${baseUrl}manager/get-managers`,{headers:{        
           
            
        "Authorization":`Bearer ${signature}`
}
    })  
         
    
    
 
   
          
dispatch({type:GET_MANAGERS_SUCCESS,payload:data});
     } catch (error) {
      
    const message=  error
 
        dispatch({type:GET_MANAGERS_FAIL,payload:message})
}

   
}
  export const getmanager =(id,signature)=>async(dispatch,getState)=>{

    dispatch({
        type:GET_MANAGER_REQUEST
    });
 

    try {
      const {data}  = await axios.get(`${baseUrl}manager/get-manager/${id}`,{
        headers:{
          Authorization:`Bearer ${signature}`
        }
      })  
         
    
    
 
   
          
dispatch({type:GET_MANAGER_SUCCESS,payload:data});
     } catch (error) {
      
    const message=  error
 
        dispatch({type:GET_MANAGER_FAIL,payload:message})
}

   
}

export const updatemanager=(name,surname,email,phone,id,signature)=>async(dispatch)=>{
  console.log(id,signature,name,email,phone,surname);
  dispatch({
    type:MANAGER_UPDATE_REQUEST
});


try {
  const {data}  = await axios.patch(`${baseUrl}manager/update-profile/${id}`,{name,surname,email,phone},
  {
    headers:{
      Authorization:`Bearer ${signature}`
    }
  })  
     




      
dispatch({type:MANAGER_UPDATE_SUCCESS,payload:data});
 } catch (error) {
  
const message=  error

    dispatch({type:MANAGER_UPDATE_FAIL,payload:message})
}
}
export const deletemanager=(id,signature)=>async(dispatch)=>{
  dispatch({
    type:MANAGER_DELETE_REQUEST
});


try {
  const {data}  = await axios.delete(`${baseUrl}manager/delete-manager/${id}`,
  {
    headers:{
      Authorization:`Bearer ${signature}`
    }
  })  
     




      
dispatch({type:MANAGER_DELETE_SUCCESS,payload:data});
 } catch (error) {
  
const message=  error

    dispatch({type:MANAGER_DELETE_FAIL,payload:message})
}
}
export const updatemanagerpassword=(email,newPassword,signature)=>async(dispatch)=>{
  dispatch({
    type:MANAGER_UPDATE_PASSWORD_REQUEST
});


try {
  const {data}  = await axios.patch(`${baseUrl}manager/update-password`,{email,newPassword},
  {
    headers:{
      Authorization:`Bearer ${signature}`
    }
  })  
     




      
dispatch({type:MANAGER_UPDATE_PASSWORD_SUCCESS,payload:data});
 } catch (error) {
  
const message=  error

    dispatch({type:MANAGER_UPDATE_PASSWORD_FAIL,payload:message})
}
}
