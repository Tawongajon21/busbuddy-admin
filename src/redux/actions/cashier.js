import {CASHIER_UPDATE_SUCCESS,CASHIER_UPDATE_REQUEST,CASHIER_UPDATE_PASSWORD_SUCCESS,CASHIER_UPDATE_PASSWORD_REQUEST,CASHIER_UPDATE_PASSWORD_FAIL,CASHIER_DELETE_SUCCESS,CASHIER_DELETE_REQUEST,CASHIER_DELETE_FAIL,CASHIER_UPDATE_FAIL,GET_CASHIER_SUCCESS,GET_CASHIER_REQUEST,GET_CASHIER_FAIL,GET_CASHIERS_SUCCESS,GET_CASHIERS_REQUEST,GET_CASHIERS_FAIL,CASHIER_LOGIN_FAIL,CASHIER_LOGIN_REQUEST,CASHIER_LOGIN_SUCCESS,CASHIER_LOGOUT_SUCCESS,CASHIER_REGISTER_FAIL,CASHIER_REGISTER_REQUEST,CASHIER_REGISTER_SUCCESS} from "../constants/cashier";

import Cookie from 'js-cookie';
import { Axios } from "axios";
import axios from "axios";
import { baseUrl } from "./baseUrl";
export const  cashiersignin = (email, password) => async (dispatch) => {
    dispatch({ type: CASHIER_LOGIN_REQUEST, payload: { email, password } });
    try {
      
      const { data } = await axios.post(`${baseUrl}cashier/signin`, {  email, password  });
      dispatch({ type:CASHIER_LOGIN_SUCCESS, payload: data });
     
      localStorage.setItem("cashierInfo",JSON.stringify(data))
      
    } catch (error) {
      
      dispatch({ type: CASHIER_LOGIN_FAIL, payload: error.response.data.message });
    }
  }
  
 export const cashierregister = (email,phone,password,name,surname,signature) => async (dispatch) => {
    dispatch({ type: CASHIER_REGISTER_REQUEST, payload: { email,phone,password,name,surname } });
    try {
      const { data } = await axios.post(`${baseUrl}cashier/signup`, { email,phone,password,name,surname},
      {
        headers:{
          Authorization:`Bearer ${signature}`
        }
      }
      );
    
      dispatch({ type: CASHIER_REGISTER_SUCCESS, payload: data });

   
    
     
      
      
    } catch (error) {
  
  let payload=error.response.data.message
      dispatch({ type:  CASHIER_REGISTER_FAIL, payload});
    }
  }

  
 export const cashierLogout = () => (dispatch) => {
  localStorage.removeItem("cashierInfo")
    dispatch({ type: CASHIER_LOGOUT_SUCCESS })
  }

  export const getcashiers =(signature)=>async(dispatch,getState)=>{

    dispatch({
        type:GET_CASHIERS_REQUEST
    });
 

    try {
      const {data}  = await axios.get(`${baseUrl}cashier/get-cashiers`,{headers:{        
           
            
        "Authorization":`Bearer ${signature}`
}
    })  
         
    
    
 
   
          
dispatch({type:GET_CASHIERS_SUCCESS,payload:data});
     } catch (error) {
      
    const message=  error
 
        dispatch({type:GET_CASHIERS_FAIL,payload:message})
}

   
}
  export const getcashier =(id,signature)=>async(dispatch,getState)=>{

    dispatch({
        type:GET_CASHIER_REQUEST
    });
 

    try {
      const {data}  = await axios.get(`${baseUrl}cashier/get-cashier/${id}`,{
        headers:{
          Authorization:`Bearer ${signature}`
        }
      })  
         
    
    
 
   
          
dispatch({type:GET_CASHIER_SUCCESS,payload:data});
     } catch (error) {
      
    const message=  error
 
        dispatch({type:GET_CASHIER_FAIL,payload:message})
}

   
}
  export const deletecashier =(id,signature)=>async(dispatch,getState)=>{

    dispatch({
        type:CASHIER_DELETE_REQUEST
    });
 
   
    try {
      const {data}  = await axios.delete(`${baseUrl}cashier/delete-cashier/${id}`,{
        headers:{
          Authorization:`Bearer ${signature}`
        }
      })  
         
    
    
 
   
          
dispatch({type:CASHIER_DELETE_SUCCESS,payload:data});
     } catch (error) {
      
    const message=  error
 
        dispatch({type:CASHIER_DELETE_FAIL,payload:message})
}

   
}
export const updatecashier = (email,phone,name,surname,id,signature) => async (dispatch) => {
  dispatch({ type: CASHIER_UPDATE_REQUEST, payload: { email,phone,name,surname } });
  try {
    const { data } = await axios.patch(`${baseUrl}cashier/update-cashier/${id}`, { email,phone,name,surname},
    {
      headers:{ 
        Authorization:`Bearer ${signature}`
      }
    }
    );
  
    dispatch({ type: CASHIER_UPDATE_SUCCESS, payload: data });

 
  
   
    
    
  } catch (error) {

let payload=error.response.data.message
    dispatch({ type:  CASHIER_DELETE_FAIL, payload});
  }
}