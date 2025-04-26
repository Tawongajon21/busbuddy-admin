import {ADD_INVOICE_SUCCESS,ADD_INVOICE_REQUEST,ADD_INVOICE_FAIL,GET_INVOICES_FAIL,GET_INVOICES_REQUEST,GET_INVOICES_SUCCESS,GET_INVOICE_FAIL,GET_INVOICE_REQUEST,GET_INVOICE_SUCCESS,UPDATE_INVOICE_FAIL,DELETE_INVOICE_FAIL,DELETE_INVOICE_REQUEST,DELETE_INVOICE_SUCCESS,UPDATE_INVOICE_REQUEST,UPDATE_INVOICE_SUCCESS} from "../constants/invoices";

import axios from "axios";
import { baseUrl } from "./baseUrl";


 

export const getinvoices =(signature)=>async(dispatch,getState)=>{

      dispatch({
          type:GET_INVOICES_REQUEST
      });
   
  
      try {
        const {data}  = await axios.get(`${baseUrl}invoice/get-invoices`,{
            headers:{
                Authorization:`Bearer ${signature}`
            }
        })  
           
      
      
   
     
            
  dispatch({type:GET_INVOICES_SUCCESS,payload:data});
       } catch (error) {
        
      const message=  error
   
          dispatch({type:GET_INVOICES_FAIL,payload:message})
  }
  
     
  }
export const  getinvoice =(id,signature)=>async(dispatch,getState)=>{
 
      dispatch({
          type:GET_INVOICE_REQUEST
      });
   
  
      try {
        const {data}  = await axios.get(`${baseUrl}invoice/get-invoice/${id}`,{
            headers:{
                Authorization:`Bearer ${signature}`
            }
        })      
           
      
      
   
     
            
  dispatch({type:GET_INVOICE_SUCCESS,payload:data});
       } catch (error) {
      const message=  error.response&& error.response.data.message
          ? error.response.data.message
          : error.message
          dispatch({type:GET_INVOICE_FAIL,payload:message})
  }
  
     
  }
  export const createinvoice = (clientName,clientNumber,products,invoiceNumber,bankDetails,vatRate,vatDue,totalPriceWithoutVat,currency,contactPerson,totalPriceWithVat ,signature) => async (dispatch, getState) => {
   // products,currency,paymentMethod,contactPerson,prospectNumber,prospectName,totalPrice,contactPerson,bankDetails

    try {
      let product={clientName,clientNumber,products,invoiceNumber,bankDetails,vatRate,vatDue,totalPriceWithoutVat,currency,contactPerson,totalPriceWithVat };
          dispatch({ type: ADD_INVOICE_REQUEST ,payload: product });
        const {
          shopOwnerSignin: { shopOwnerInfo },
        } = getState();
     
      
        const {data}  = await axios.post(`${baseUrl}invoice/create-invoice`, {clientName,clientNumber,products,invoiceNumber,bankDetails,vatRate,vatDue,totalPriceWithoutVat,currency,contactPerson,totalPriceWithVat  } ,
   
        {
          headers:{  
            
           
            
            "Authorization":`Bearer ${signature}`
    }
        }
        
           
      
       ) 
       
          dispatch({ type:ADD_INVOICE_SUCCESS, payload: data });
        
      } catch (error) {
        dispatch({ type: ADD_INVOICE_FAIL, payload: error.message });
      }
    };
    /*
export const updateinvoice =(products,currency,paymentMethod,totalPrice,prospectName,prospectNumber,bankDetails,vat,id,signature)=>async(dispatch,getState)=>{
  console.log(products,currency,paymentMethod,totalPrice,prospectName,prospectNumber,bankDetails,vat);
//let {name,brand,model,sellingPrice,buyingPrice,quantityBought,quantitySold,quantityRemaining,year,showOnEcommerce,id,signature}=inputData
      dispatch({
          type:UPDATE_QUOTATION_REQUEST
      });
   
//.log(token);
      try {

        const {data}  = await axios.patch(`${baseUrl}quotation/update-quotation/${id}`,{products,currency,paymentMethod,totalPrice,prospectName,prospectNumber,bankDetails,vat},{headers:{        
           
            
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

 */
  export const deleteinvoice =(id,signature)=>async(dispatch,getState)=>{

   
      dispatch({
          type:DELETE_INVOICE_REQUEST
      });
   
  
      try {
        const {data}  = await axios.delete(`${baseUrl}invoice/delete-invoice/${id}`,{headers:{        
           
            
            "Authorization":`Bearer ${signature}`
    }
        }
        
           
      
       )  

     
            
  dispatch({type:DELETE_INVOICE_SUCCESS,payload:data});
       } catch (error) {
        console.log(error);
      const message=  error.response&& error.response.data.message
          ? error.response.data.message
          : error.message
          dispatch({type:DELETE_INVOICE_FAIL,payload:message})
  }
  
     
  }
