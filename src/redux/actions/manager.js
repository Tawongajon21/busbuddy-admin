import {MANAGER_DELETE_SUCCESS,MANAGER_DELETE_REQUEST,MANAGER_DELETE_FAIL,MANAGER_UPDATE_PASSWORD_SUCCESS,MANAGER_UPDATE_PASSWORD_REQUEST,MANAGER_UPDATE_PASSWORD_FAIL,MANAGER_UPDATE_SUCCESS,MANAGER_UPDATE_REQUEST,MANAGER_UPDATE_FAIL,GET_MANAGER_SUCCESS,GET_MANAGER_REQUEST,GET_MANAGER_FAIL,GET_MANAGERS_SUCCESS,GET_MANAGERS_REQUEST,GET_MANAGERS_FAIL,MANAGER_LOGIN_FAIL,MANAGER_LOGIN_REQUEST,MANAGER_LOGIN_SUCCESS,MANAGER_LOGOUT_SUCCESS,MANAGER_REGISTER_FAIL,MANAGER_REGISTER_REQUEST,MANAGER_REGISTER_SUCCESS} from "../constants/manager";

import Cookie from 'js-cookie';
import { Axios } from "axios";
import axios from "axios";
import { baseUrl } from "./baseUrl";
export const  managersignin = (email, password) => async (dispatch) => {
    dispatch({ type: MANAGER_LOGIN_REQUEST, payload: { email, password } });
    try {
      
      const { data } = await axios.post(`${baseUrl}manager/signin`, {  email, password  });
      dispatch({ type:MANAGER_LOGIN_SUCCESS, payload: data });
     
      localStorage.setItem("managerInfo",JSON.stringify(data))
      
    } catch (error) {
      
      dispatch({ type: MANAGER_LOGIN_FAIL, payload: error.response.data.message });
    }
  }
  
 export const managerregister = (name,email,password,phone,surname) => async (dispatch) => {
    dispatch({ type: MANAGER_REGISTER_REQUEST, payload: { name,email,password,phone,surname } });
    try {
      const { data } = await axios.post(`${baseUrl}manager/signup`, {name,email,password,phone,surname});
    
      dispatch({ type: MANAGER_REGISTER_SUCCESS, payload: data });

   
    
     
      
      
    } catch (error) {
  
  let payload=error.response.data.message
      dispatch({ type:  MANAGER_REGISTER_FAIL, payload});
    }
  }
  
 export const managerLogout = () => (dispatch) => {
  localStorage.removeItem("managerInfo")
    dispatch({ type: MANAGER_LOGOUT_SUCCESS })
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
