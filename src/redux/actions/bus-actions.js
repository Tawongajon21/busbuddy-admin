import {DELETE_BUS_SUCCESS,DELETE_BUS_REQUEST,DELETE_BUS_FAIL,GET_BUSES_SUCCESS,GET_BUSES_FAIL,ADD_BUS_SUCCESS,GET_BUS_SUCCESS,ADD_BUS_FAIL,ADD_BUS_REQUEST,GET_BUSES_REQUEST,GET_BUS_FAIL,GET_BUS_REQUEST} from "../constants/bus";


import axios from "axios";
import { baseUrl } from "./baseUrl";


 

export const getbuses =()=>async(dispatch,getState)=>{

      dispatch({
          type:GET_BUSES_REQUEST
      });
   
  
      try {
        const {data}  = await axios.get(`${baseUrl}bus/get-buses`)  
           
      
      
   
     
            
  dispatch({type:GET_BUSES_SUCCESS,payload:data});
       } catch (error) {
        
      const message=  error
   
          dispatch({type:GET_BUSES_FAIL,payload:message})
  }
  
     
  }

  export const addbus = (inputData) => async (dispatch, getState) => {
  let bus={ busName:inputData.busName,company:inputData.company,capacity:inputData.capacity,registrationNumber:inputData.registrationNumber,images:inputData.images}
    const {
        userLogin: { userInfo },
      } = getState();
    try {
      
          dispatch({ type: ADD_BUS_REQUEST ,payload:bus });
     
   
        const {data}  = await axios.post(`${baseUrl}bus/add-bus`, {busName:inputData.busName,company:inputData.company,capacity:inputData.capacity,registrationNumber:inputData.registrationNumber,images:inputData.images} ,
        {
          headers:{  
            
           
            
            "Authorization":`Bearer ${userInfo.signature}`,
            "Content-Type":"multipart/form-data"
    }
        }
        
           
      
       ) 
      
      
          dispatch({ type:ADD_BUS_SUCCESS, payload: data });
        
      } catch (error) {
        dispatch({ type: ADD_BUS_FAIL, payload: error.message });
      }
    };
  export const deletebus = (id) => async (dispatch, getState) => {

  const {
        userLogin: { userInfo },
      } = getState();
    try {
      
          dispatch({ type: DELETE_BUS_REQUEST ,payload:id });
     
   
        const {data}  = await axios.delete(`${baseUrl}bus/delete-bus/${id}`,         {
          headers:{  
            
           
            
            "Authorization":`Bearer ${userInfo.signature}`
           
    }
        }
        
           
      
       ) 
      
      
          dispatch({ type:DELETE_BUS_SUCCESS, payload: data });
        
      } catch (error) {
        dispatch({ type: DELETE_BUS_FAIL, payload: error.message });
      }
    };
  