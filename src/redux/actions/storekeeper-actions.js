import { UPDATE_STORE_KEEPER_SUCCESS,UPDATE_STORE_KEEPER_REQUEST,UPDATE_STORE_KEEPER_FAIL,STORE_KEEPER_LOGOUT_SUCCESS,STORE_KEEPER_LOGIN_SUCCESS,STORE_KEEPER_LOGIN_REQUEST,STORE_KEEPER_LOGIN_FAIL,ADD_STORE_KEEPER_REQUEST,ADD_STORE_KEEPER_FAIL,ADD_STORE_KEEPER_SUCCESS,GET_STORE_KEEPERS_FAIL,GET_STORE_KEEPERS_REQUEST,GET_STORE_KEEPERS_SUCCESS,GET_STORE_KEEPER_FAIL,GET_STORE_KEEPER_REQUEST,GET_STORE_KEEPER_SUCCESS,DELETE_STORE_KEEPER_FAIL,DELETE_STORE_KEEPER_REQUEST,DELETE_STORE_KEEPER_SUCCESS } from '../constants/store-keepers';

import Cookie from 'js-cookie';
import { Axios } from "axios";
import axios from "axios";
import { baseUrl } from './baseUrl';
export const  storekeepersignin = (phoneNumber, password) => async (dispatch) => {
    dispatch({ type:STORE_KEEPER_LOGIN_REQUEST , payload: { phoneNumber, password } });
    try {
      const { data } = await axios.post(`${baseUrl}shop-keeper/login`, { phoneNumber, password });
      dispatch({ type:STORE_KEEPER_LOGIN_SUCCESS, payload: data });
    //  Cookie.set('storeKeeperInfo', JSON.stringify(data));
      localStorage.setItem('storeKeeperInfo',JSON.stringify(data))
    } catch (error) {
    
      let message=error

      dispatch({ type: STORE_KEEPER_LOGIN_FAIL, payload: message });
    }
  }
  
 export const storekeeperregister = (name,phoneNumber,password,employer,country) => async (dispatch,getState) => {
  const {
    shopOwnerSignin: { shopOwnerInfo },
  } = getState();

    dispatch({ type: ADD_STORE_KEEPER_REQUEST, payload: { name, phoneNumber, password,country} });
    try {
      const { data } = await axios.post(`${baseUrl}shop-keeper/register`, {name,phoneNumber,password,employer,country},{
        headers:{
            "Authorization":`Bearer ${shopOwnerInfo.token}`
            
        }
      });

   
      dispatch({ type: ADD_STORE_KEEPER_SUCCESS, payload: data });

      
      
    } catch (error) {
     console.log(error);
      dispatch({ type: ADD_STORE_KEEPER_FAIL, payload: error.response.data.message });
    }
  }

  
 export const storekeeperlogout = () => (dispatch) => {
    localStorage.clear('storeKeeperInfo');
    dispatch({ type: STORE_KEEPER_LOGOUT_SUCCESS })
  }

  export const getstorekeepers=()=>async(dispatch,getState)=>{
    dispatch({
        type:GET_STORE_KEEPERS_REQUEST
    });
    const {
      shopOwnerSignin: { shopOwnerInfo },
    } = getState();
 let id= shopOwnerInfo._id
console.log(id);
    try {
      
      const {data}  = await axios.get(`${baseUrl}shop-keeper/get-store-keepers/${id}`,
      {
        headers:{        
         
          
          Authorization:`Bearer ${shopOwnerInfo.token}`
  }
      }
      
         
    
     )  

   
          
dispatch({type:GET_STORE_KEEPERS_SUCCESS,payload:data});
     } catch (error) {
    const message=  error.response&& error.response.data.message
        ? error.response.data.message
        : error.message
        dispatch({type:GET_STORE_KEEPERS_FAIL,payload:message})
}

  }
  export const getstorekeeper=(id)=>async(dispatch,getState)=>{
    dispatch({
        type:GET_STORE_KEEPER_REQUEST
    });
 
    const {
      shopOwnerSignin: { shopOwnerInfo },
    } = getState();
 
    try {
      const {data}  = await axios.get(`${baseUrl}shop-keeper/get-store-keeper/${id}`,{headers:{        
         
          
          "Authorization":`Bearer ${shopOwnerInfo.token}`
  }
      }
      
         
    
     )  
 
   
          
dispatch({type:GET_STORE_KEEPER_SUCCESS,payload:data});
     } catch (error) {
    const message=  error.response&& error.response.data.message
        ? error.response.data.message
        : error.message
        dispatch({type:GET_STORE_KEEPER_FAIL,payload:message})
}

  }
  export const deletestorekeeper=(id)=>async(dispatch,getState)=>{
    dispatch({
        type:DELETE_STORE_KEEPER_REQUEST
    });
    const {
      shopOwnerSignin: { shopOwnerInfo },
    } = getState();

    try { 
      const {data}  = await axios.delete(`${baseUrl}shop-keeper/delete-store-keeper/${id}`,{headers:{        
         
          
          "Authorization":`Bearer ${ shopOwnerInfo.token}`
  }
      }
      
         
    
     )  
 
   
          
dispatch({type:DELETE_STORE_KEEPER_SUCCESS,payload:data});
     } catch (error) {
    const message=  error.response&& error.response.data.message
        ? error.response.data.message
        : error.message
        dispatch({type:DELETE_STORE_KEEPER_FAIL,payload:message})
}

  }
  export const updatestorekeeper=(id,name, phoneNumber, password,token)=>async(dispatch,getState)=>{
    dispatch({
        type:UPDATE_STORE_KEEPER_REQUEST
    });
    const {
      shopOwnerSignin: { shopOwnerInfo },
    } = getState();
  

    try {
      const {data}  = await axios.patch(`${baseUrl}shop-keeper/update-store-keeper/${id}`,{name, phoneNumber, password},{headers:{        
         
          
          "Authorization":`Bearer ${shopOwnerInfo.token}`
  }
      }
      
         
    
     )  
 
   
          
dispatch({type:UPDATE_STORE_KEEPER_SUCCESS,payload:data});
     } catch (error) {
    const message=  error.response&& error.response.data.message
        ? error.response.data.message
        : error.message
        dispatch({type:UPDATE_STORE_KEEPER_FAIL,payload:message})
}

  }
