import {ADD_QUOTATION_FAIL,ADD_QUOTATION_REQUEST,ADD_QUOTATION_SUCCESS,GET_QUOTATIONS_FAIL,GET_QUOTATIONS_REQUEST,GET_QUOTATIONS_SUCCESS,GET_QUOTATION_FAIL,GET_QUOTATION_REQUEST,GET_QUOTATION_SUCCESS,UPDATE_QUOTATION_FAIL,UPDATE_QUOTATION_REQUEST,UPDATE_QUOTATION_SUCCESS,DELETE_QUOTATION_FAIL,DELETE_QUOTATION_REQUEST,DELETE_QUOTATION_SUCCESS } from "../constants/quotations";

import axios from "axios";
import { baseUrl } from "./baseUrl";


 

export const getquotations =(signature)=>async(dispatch,getState)=>{

      dispatch({
          type:GET_QUOTATIONS_REQUEST
      });
   
  
      try {
        const {data}  = await axios.get(`${baseUrl}quotation/get-quotations`,{
            headers:{
                Authorization:`Bearer ${signature}`
            }
        })  
           
      
      
   
     
            
  dispatch({type:GET_QUOTATIONS_SUCCESS,payload:data});
       } catch (error) {
        
      const message=  error
   
          dispatch({type:GET_QUOTATIONS_FAIL,payload:message})
  }
  
     
  }
export const getquotation =(id,signature)=>async(dispatch,getState)=>{
 
      dispatch({
          type:GET_QUOTATION_REQUEST
      });
   
  
      try {
        const {data}  = await axios.get(`${baseUrl}quotation/get-quotation/${id}`,{
            headers:{
                Authorization:`Bearer ${signature}`
            }
        })      
           
      
      
   
     
            
  dispatch({type:GET_QUOTATION_SUCCESS,payload:data});
       } catch (error) {
      const message=  error.response&& error.response.data.message
          ? error.response.data.message
          : error.message
          dispatch({type:GET_QUOTATION_FAIL,payload:message})
  }
  
     
  }
  export const createquotation = (prospectName,prospectNumber,products,quotationNumber,bankDetails,vatRate,vatDue,totalPriceWithoutVat,currency,contactPerson,totalPriceWithVat,signature) => async (dispatch, getState) => {
   // products,currency,paymentMethod,contactPerson,prospectNumber,prospectName,totalPrice,contactPerson,bankDetails

    try {
      let product={prospectName,prospectNumber,products,quotationNumber,bankDetails,vatRate,vatDue,totalPriceWithoutVat,currency,contactPerson,totalPriceWithVat};
          dispatch({ type: ADD_QUOTATION_REQUEST ,payload: product });
        const {
          shopOwnerSignin: { shopOwnerInfo },
        } = getState();
     
      
        const {data}  = await axios.post(`${baseUrl}quotation/create-quotation`, {prospectName,prospectNumber,products,quotationNumber,bankDetails,vatRate,vatDue,totalPriceWithoutVat,currency,contactPerson,totalPriceWithVat } ,
   
        {
          headers:{  
            
           
            
            "Authorization":`Bearer ${signature}`
    }
        }
        
           
      
       ) 
       
          dispatch({ type:ADD_QUOTATION_SUCCESS, payload: data });
        
      } catch (error) {
        dispatch({ type: ADD_QUOTATION_FAIL, payload: error.message });
      }
    };
export const updatequotation =(products,currency,paymentMethod,totalPrice,prospectName,prospectNumber,bankDetails,vat,invoiced,id,signature)=>async(dispatch,getState)=>{
  console.log(products,currency,paymentMethod,totalPrice,prospectName,prospectNumber,bankDetails,vat,invoiced);
//let {name,brand,model,sellingPrice,buyingPrice,quantityBought,quantitySold,quantityRemaining,year,showOnEcommerce,id,signature}=inputData
      dispatch({
          type:UPDATE_QUOTATION_REQUEST
      });
   
//.log(token);
      try {

        const {data}  = await axios.patch(`${baseUrl}quotation/update-quotation/${id}`,{products,currency,paymentMethod,totalPrice,prospectName,prospectNumber,bankDetails,vat,invoiced},{headers:{        
           
            
            "Authorization":`Bearer ${signature}`
    }
        }
        
           
      
       )  
       console.log(data);
     
   
     
            
  //dispatch({type:UPDATE_PRODUCT_SUCCESS,payload:data});
       } catch (error) {
      const message=  error.response&& error.response.data.message
          ? error.response.data.message
          : error.message
          dispatch({type:UPDATE_QUOTATION_FAIL,payload:message})
  }
  
     
  }


  export const deletequotation =(id,signature)=>async(dispatch,getState)=>{

   
      dispatch({
          type:DELETE_QUOTATION_REQUEST
      });
   
  
      try {
        const {data}  = await axios.delete(`${baseUrl}quotation/delete-quotation/${id}`,{headers:{        
           
            
            "Authorization":`Bearer ${signature}`
    }
        }
        
           
      
       )  

     
            
  dispatch({type:DELETE_QUOTATION_SUCCESS,payload:data});
       } catch (error) {
        console.log(error);
      const message=  error.response&& error.response.data.message
          ? error.response.data.message
          : error.message
          dispatch({type:DELETE_QUOTATION_FAIL,payload:message})
  }
  
     
  }
 