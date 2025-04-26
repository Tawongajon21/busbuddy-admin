import { GET_BANKS_FAIL,GET_BANKS_REQUEST,GET_BANKS_SUCCESS,GET_BANK_FAIL,GET_BANK_REQUEST,GET_BANK_SUCCESS,DELETE_BANK_FAIL,DELETE_BANK_REQUEST,DELETE_BANK_SUCCESS,ADD_BANK_FAIL,ADD_BANK_REQUEST,ADD_BANK_SUCCESS,UPDATE_BANK_FAIL,UPDATE_BANK_REQUEST,UPDATE_BANK_SUCCESS} from "../constants/bank";


import axios from "axios";
import { baseUrl } from "./baseUrl";


 

export const getbanks =(signature)=>async(dispatch,getState)=>{

      dispatch({
          type:GET_BANKS_REQUEST
      });
   
  
      try {
        const {data}  = await axios.get(`${baseUrl}bank/get-banks`,
        {
            headers:{
                "Authorization":`Bearer ${signature}`
            }
        }
        )  
           
      
      
   
     
            
  dispatch({type:GET_BANKS_SUCCESS,payload:data});
       } catch (error) {
        
      const message=  error
   
          dispatch({type:GET_BANKS_FAIL,payload:message})
  }
  
     
  }
export const getbank =(bankId,signature)=>async(dispatch,getState)=>{
 console.log(`${baseUrl}bank/get-bank/${bankId}`);
      dispatch({
          type:GET_BANK_REQUEST
      });
   
 
      try {
        const {data}  = await axios.get(`${baseUrl}bank/get-bank/${bankId}`,{
          headers:{
            Authorization:`Bearer ${signature}`
          }
        })      
           
      
      
   
     
            
  dispatch({type:GET_BANK_SUCCESS,payload:data});
       } catch (error) {
      const message=  error.response&& error.response.data.message
          ? error.response.data.message
          : error.message
          dispatch({type:GET_BANK_FAIL,payload:message})
  }
  
     
  }
  export const createbank = ( bankName,accountName,accountNumber,accountCurrency,country,SWIFTCode,branchCode,signature) => async (dispatch, getState) => {

   
    try {
      let bank={bankName,accountName,accountNumber,accountCurrency,country,SWIFTCode,branchCode};
          dispatch({ type:ADD_BANK_REQUEST,payload: bank });
    
      
        const {data}  = await axios.post(`${baseUrl}bank/create-bank`, {bankName,accountName,accountNumber,accountCurrency,country,SWIFTCode,branchCode} ,
   
        {
          headers:{  
            
           
            
            "Authorization":`Bearer ${signature}`,
           
    }
        }
        
           
      
       ) 
       console.log(data)
          dispatch({ type:ADD_BANK_SUCCESS, payload: data });
        
      } catch (error) {
        dispatch({ type: ADD_BANK_FAIL, payload: error.message });
      }
    };
export const updatebank =( bankName,accountName,accountNumber,accountCurrency,country,SWIFTCode,branchCode,id,signature)=>async(dispatch,getState)=>{
 // console.log(name,brand,model,sellingPrice,buyingPrice,quantityBought,quantitySold,quantityRemaining,year,showOnEcommerce,images);
//let {name,brand,model,sellingPrice,buyingPrice,quantityBought,quantitySold,quantityRemaining,year,showOnEcommerce,id,signature}=inputData
      dispatch({
          type:UPDATE_BANK_REQUEST
      });
   
//.log(token);
      try {

        const {data}  = await axios.patch(`${baseUrl}bank/update-bank/${id}`,{bankName,accountName,accountNumber,accountCurrency,country,SWIFTCode,branchCode},{headers:{        
           
            
            "Authorization":`Bearer ${signature}`
    }
        }
        
           
      
       )  
       console.log(data);
     
   
     
            
  dispatch({type:UPDATE_BANK_SUCCESS,payload:data});
       } catch (error) {
      const message=  error.response&& error.response.data.message
          ? error.response.data.message
          : error.message
          dispatch({type:UPDATE_BANK_FAIL,payload:message})
  }
  
     
  }


  export const deletebank =(id,signature)=>async(dispatch,getState)=>{

   
      dispatch({
          type:DELETE_BANK_REQUEST
      });
   
  
      try {
        const {data}  = await axios.delete(`${baseUrl}bank/delete-bank/${id}`,{headers:{        
           
            
            "Authorization":`Bearer ${signature}`
    }
        }
        
           
      
       )  

     
            
  dispatch({type:DELETE_BANK_SUCCESS,payload:data});
       } catch (error) {
        console.log(error);
      const message=  error.response&& error.response.data.message
          ? error.response.data.message
          : error.message
          dispatch({type:DELETE_BANK_FAIL,payload:message})
  }
  
     
  }
 