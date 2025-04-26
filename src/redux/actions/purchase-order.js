import {ADD_PO_SUCCESS,ADD_PO_REQUEST,ADD_PO_FAIL,GET_POS_FAIL,GET_POS_REQUEST,GET_POS_SUCCESS,GET_PO_FAIL,GET_PO_REQUEST,GET_PO_SUCCESS,UPDATE_PO_FAIL,UPDATE_PO_REQUEST,UPDATE_PO_SUCCESS,DELETE_PO_FAIL,DELETE_PO_REQUEST,DELETE_PO_SUCCESS } from "../constants/purchase-order";

import axios from "axios";
import { baseUrl } from "./baseUrl";


 

export const getpos =(signature)=>async(dispatch,getState)=>{

      dispatch({
          type:GET_POS_REQUEST
      });
   
  
      try {
        const {data}  = await axios.get(`${baseUrl}po/get-pos`,{
            headers:{
                Authorization:`Bearer ${signature}`
            }
        })  
           
      
      
   
     
            
  dispatch({type:GET_POS_SUCCESS,payload:data});
       } catch (error) {
        
      const message=  error
   
          dispatch({type:GET_POS_FAIL,payload:message})
  }
  
     
  }
export const getpo =(id,signature)=>async(dispatch,getState)=>{
 
      dispatch({
          type:GET_PO_REQUEST
      });
   
  
      try {
        const {data}  = await axios.get(`${baseUrl}po/get-po/${id}`,{
            headers:{
                Authorization:`Bearer ${signature}`
            }
        })      
           
      
      
   
     
            
  dispatch({type:GET_PO_SUCCESS,payload:data});
       } catch (error) {
      const message=  error.response&& error.response.data.message
          ? error.response.data.message
          : error.message
          dispatch({type:GET_PO_FAIL,payload:message})
  }
  
     
  }
  export const createpo = (supplierName,supplierAddress,deliveryAddress,supplierNumber,purchaseOrderNumber,currency,contactPerson,totalPrice,products,signature) => async (dispatch, getState) => {
   // products,currency,paymentMethod,contactPerson,prospectNumber,prospectName,totalPrice,contactPerson,bankDetails

    try {
      let po={supplierName,supplierAddress,deliveryAddress,supplierNumber,purchaseOrderNumber,currency,contactPerson,totalPrice,products};
          dispatch({ type:ADD_PO_REQUEST ,payload: po });
        const {
          shopOwnerSignin: { shopOwnerInfo },
        } = getState();
     
      
        const {data}  = await axios.post(`${baseUrl}po/create-po`, {supplierName,supplierAddress,deliveryAddress,supplierNumber,purchaseOrderNumber,currency,contactPerson,totalPrice,products } ,
   
        {
          headers:{  
            
           
            
            "Authorization":`Bearer ${signature}`
    }
        }
        
           
      
       ) 
       
          dispatch({ type:ADD_PO_SUCCESS, payload: data });
        
      } catch (error) {
        dispatch({ type: ADD_PO_FAIL, payload: error.message });
      }
    };
export const updatequotation =(supplierName,supplierAddress,deliveryAddress,supplierNumber,purchaseOrderNumber,currency,contactPerson,totalPrice,products,id,signature)=>async(dispatch,getState)=>{


dispatch({
          type:UPDATE_PO_REQUEST
      });
   

      try {
       
        const {data}  = await axios.patch(`${baseUrl}po/update-po/${id}`,{supplierName,supplierAddress,deliveryAddress,supplierNumber,purchaseOrderNumber,currency,contactPerson,totalPrice,products},{headers:{        
           
            
            "Authorization":`Bearer ${signature}`
    }
        }
        
           
      
       )  
      
     
   
     
            
  dispatch({type:UPDATE_PO_SUCCESS,payload:data});
       } catch (error) {
      const message=  error.response&& error.response.data.message
          ? error.response.data.message
          : error.message
          dispatch({type:UPDATE_PO_FAIL,payload:message})
  }
  
     
  }


  export const deletepo =(id,signature)=>async(dispatch,getState)=>{

   
      dispatch({
          type:DELETE_PO_REQUEST
      });
   
  
      try {
        const {data}  = await axios.delete(`${baseUrl}po/delete-po/${id}`,{headers:{        
           
            
            "Authorization":`Bearer ${signature}`
    }
        }
        
           
      
       )  

     
            
  dispatch({type:DELETE_PO_SUCCESS,payload:data});
       } catch (error) {
        console.log(error);
      const message=  error.response&& error.response.data.message
          ? error.response.data.message
          : error.message
          dispatch({type:DELETE_PO_FAIL,payload:message})
  }
  
     
  }
 