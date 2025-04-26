import {GET_EXPENSES_FAIL,GET_EXPENSES_REQUEST,GET_EXPENSES_SUCCESS,GET_EXPENSE_FAIL,GET_EXPENSE_REQUEST,GET_EXPENSE_SUCCESS,ADD_EXPENSE_FAIL,ADD_EXPENSE_REQUEST,ADD_EXPENSE_SUCCESS,DELETE_EXPENSE_FAIL,DELETE_EXPENSE_REQUEST,DELETE_EXPENSE_SUCCESS,UPDATE_EXPENSE_FAIL,UPDATE_EXPENSE_REQUEST,UPDATE_EXPENSE_SUCCESS} from "../constants/expenses"

import axios from "axios";
import { baseUrl } from "./baseUrl";


 

export const getexpenses =(signature)=>async(dispatch,getState)=>{

      dispatch({
          type:GET_EXPENSES_REQUEST
      });
   
  
      try {
        const {data}  = await axios.get(`${baseUrl}expense/get-expenses`,
        {
            headers:{
                Authorization:`Bearer ${signature}`
            }
        })  
           
      
      
   
     
            
  dispatch({type:GET_EXPENSES_SUCCESS,payload:data});
       } catch (error) {
        
      const message=  error
   
          dispatch({type:GET_EXPENSES_FAIL,payload:message})
  }
  
     
  }
export const getexpense =(signature,id)=>async(dispatch,getState)=>{
 
      dispatch({
          type:GET_EXPENSE_REQUEST
      });
   
  
      try {
        const {data}  = await axios.get(`${baseUrl}expense/get-expense/${id}`,{
            headers:{
                Authorization:`Bearer ${signature}`
            }
        })      
           
      
      
   
     
            
  dispatch({type:GET_EXPENSE_SUCCESS,payload:data});
       } catch (error) {
      const message=  error.response&& error.response.data.message
          ? error.response.data.message
          : error.message
          dispatch({type:GET_EXPENSE_FAIL,payload:message})
  }
  
     
  }
  export const createexpense = ( products,currency,paymentMethod,totalPrice,companyBought,buyer,companyContact,signature) => async (dispatch, getState) => {

  
    try {
      let product={products,currency,paymentMethod,totalPrice,companyBought,buyer,companyContact};
          dispatch({ type: ADD_EXPENSE_REQUEST,payload: product });
     
      
        const {data}  = await axios.post(`${baseUrl}expense/create-expense`, {products,currency,paymentMethod,totalPrice,companyBought,buyer,companyContact} ,
   
        {
          headers:{  
            
           
            
            "Authorization":`Bearer ${signature}`
            
    }
        }
        
           
      
       ) 
       console.log(data)
          dispatch({ type:ADD_EXPENSE_SUCCESS, payload: data });
        
      } catch (error) {
        dispatch({ type: ADD_EXPENSE_FAIL, payload: error.message });
      }
    };
export const updateexpense =(products,currency,paymentMethod,totalPrice,companyBought,buyer,companyContact,id,signature)=>async(dispatch,getState)=>{
  console.log(products,currency,paymentMethod,totalPrice,companyBought,buyer,companyContact);
//let {name,brand,model,sellingPrice,buyingPrice,quantityBought,quantitySold,quantityRemaining,year,showOnEcommerce,id,signature}=inputData
      dispatch({
          type:UPDATE_EXPENSE_REQUEST
      });
   

      try {

        const {data}  = await axios.patch(`${baseUrl}expense/update-expense/${id}`,{products,currency,paymentMethod,totalPrice,companyBought,buyer,companyContact},{headers:{        
           
            
            "Authorization":`Bearer ${signature}`
    }
        }
        
           
      
       )  
   
     
   
     
            
  dispatch({type:UPDATE_EXPENSE_SUCCESS,payload:data});
       } catch (error) {
      const message=  error.response&& error.response.data.message
          ? error.response.data.message
          : error.message
          dispatch({type:UPDATE_EXPENSE_FAIL,payload:message})
  }
  
     
  }


  export const deleteexpense =(id,signature)=>async(dispatch,getState)=>{
    const {
        shopOwnerSignin: { shopOwnerInfo },
      }  = getState();

   
      dispatch({
          type:DELETE_EXPENSE_REQUEST
      });
   
  
      try {
        const {data}  = await axios.delete(`${baseUrl}expense/delete-expense/${id}`,{headers:{        
           
            
            "Authorization":`Bearer ${signature}`
    }
        }
        
           
      
       )  

     
            
  dispatch({type:DELETE_EXPENSE_SUCCESS,payload:data});
       } catch (error) {
        console.log(error);
      const message=  error.response&& error.response.data.message
          ? error.response.data.message
          : error.message
          dispatch({type:DELETE_EXPENSE_FAIL,payload:message})
  }
  
     
  }
 