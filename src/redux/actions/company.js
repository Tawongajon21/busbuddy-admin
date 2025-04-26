import {GET_COMPANIES_FAIL,GET_COMPANIES_REQUEST,GET_COMPANIES_SUCCESS,GET_COMPANY_FAIL,GET_COMPANY_REQUEST,GET_COMPANY_SUCCESS,ADD_COMPANY_FAIL,ADD_COMPANY_REQUEST,ADD_COMPANY_SUCCESS} from "../constants/company"
import axios from "axios";
import { baseUrl } from "./baseUrl";
export const getcompanies =()=>async(dispatch,getState)=>{
    const {
        companyOwnerLogin: { companyOwnerInfo },
      } = getState();
   
    dispatch({
        type:GET_COMPANIES_REQUEST
    });
 
  
   

  
    
    try { 
      const {data}  = await axios.get(`${baseUrl}company/get-companies`,{
        headers:{
            Authorization:`Bearer ${companyOwnerInfo.signature}`
        }
      })

      
         
    
     

   
          
dispatch({type:GET_COMPANIES_SUCCESS,payload:data});
     } catch (error) {
      
    const message=  error
  
        dispatch({type:GET_COMPANIES_FAIL,payload:message})
}

   
}

export const getcompany =(id)=>async(dispatch,getState)=>{
    const {
        companyOwnerLogin: { companyOwnerInfo },
      } = getState();
   
    dispatch({
        type:GET_COMPANY_REQUEST
    });
 

    try {
      const {data}  = await axios.get(`${baseUrl}company/get-company/${id}`,{
        headers:{
          Authorization:`Bearer ${companyOwnerInfo.signature}`
        }
      })  
         
    
    
 
   
          
dispatch({type:GET_COMPANY_SUCCESS,payload:data});
     } catch (error) {
      
    const message=  error
 
        dispatch({type:GET_COMPANY_FAIL,payload:message})
}

   
}

export const createcompany = (name) => async (dispatch, getState) => {
  const {
    companyOwnerLogin: { companyOwnerInfo },
  } = getState();

   
  try {
   
        dispatch({ type:ADD_COMPANY_REQUEST,payload: name });
  
    
      const {data}  = await axios.post(`${baseUrl}company/add-company`, {name} ,
 
      {
        headers:{  
          
         
          
          "Authorization":`Bearer ${companyOwnerInfo.signature}`,
         
  }
      }
      
         
    
     ) 
     console.log(data)
        dispatch({ type:ADD_COMPANY_SUCCESS, payload: data });
      
    } catch (error) {
      dispatch({ type: ADD_COMPANY_FAIL, payload: error.message });
    }
  };