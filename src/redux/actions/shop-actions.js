import { DELETE_SHOP_SUCCESS,DELETE_SHOP_REQUEST,DELETE_SHOP_FAIL,ADD_SHOP_FAIL,ADD_SHOP_REQUEST,ADD_SHOP_SUCCESS,GET_SHOPS_FAIL,GET_SHOP_REQUEST,GET_SHOPS_SUCCESS,GET_SHOP_FAIL,GET_SHOP_SUCCESS,GET_SHOPS_REQUEST,UPDATE_SHOP_FAIL,UPDATE_SHOP_REQUEST,UPDATE_SHOP_SUCCESS } from "../constants/shops";
import axios from "axios";
export const createshop = ( shopName,token) => async (dispatch, getState) => {
    try {
    let shop={shopName};
        dispatch({ type: ADD_SHOP_REQUEST ,payload: shop });
      const {
        shopOwnerSignin: { shopOwnerInfo },
      } = getState();
    
    
      const {data}  = await axios.post("http://localhost:5000/api/v1/create-shop", {shopName} ,
      {
        headers:{  
          
         
          
          "Authorization":`Bearer ${token}`
  }
      }
      
         
    
     ) 
    
        dispatch({ type:ADD_SHOP_SUCCESS, payload: data });
      
    } catch (error) {
      dispatch({ type: ADD_SHOP_FAIL, payload: error.message });
    }
  };

 

export const getshops =(token)=>async(dispatch)=>{
  
   
      dispatch({
          type:GET_SHOPS_REQUEST
      });
   
  
      try {
        const {data}  = await axios.get("http://localhost:5000/api/v1/get-shops",{headers:{        
           
            
            Authorization:`Bearer ${token}`
    }
        }
        
           
      
       )  
   
     
            
  dispatch({type:GET_SHOPS_SUCCESS,payload:data});
       } catch (error) {
      const message=  error.response&& error.response.data.message
          ? error.response.data.message
          : error.message
          dispatch({type:GET_SHOPS_FAIL,payload:message})
  }
  
     
  }
export const getshop =(id,token)=>async(dispatch,getState)=>{
    const {
        shopOwnerSignin: { shopOwnerInfo },
      }  = getState();

   
      dispatch({
          type:GET_SHOP_REQUEST
      });
   
  
      try {
        const {data}  = await axios.get(`http://localhost:5000/api/v1/get-shop/${id}`,{headers:{        
           
            
            "Authorization":`Bearer ${token}`
    }
        }
        
           
      
       )  
   
     
            
  dispatch({type:GET_SHOP_SUCCESS,payload:data});
       } catch (error) {
      const message=  error.response&& error.response.data.message
          ? error.response.data.message
          : error.message
          dispatch({type:GET_SHOP_FAIL,payload:message})
  }
  
     
  }
export const updateshop =(shopName,id,token)=>async(dispatch,getState)=>{
 
   
      dispatch({
          type:UPDATE_SHOP_REQUEST
      });
   
  
      try {
        const {data}  = await axios.patch(`http://localhost:5000/api/v1/update-shop/${id}`,{shopName},{headers:{        
           
            
            "Authorization":`Bearer ${token}`
    }
        }
        
           
      
       )  
    
   
     
            
  dispatch({type:UPDATE_SHOP_SUCCESS,payload:data});
       } catch (error) {
      const message=  error.response&& error.response.data.message
          ? error.response.data.message
          : error.message
          dispatch({type:UPDATE_SHOP_FAIL,payload:message})
  }
  
     
  }


  export const deleteshop =(id,token)=>async(dispatch,getState)=>{
 
      dispatch({
          type:DELETE_SHOP_REQUEST
      });
   
  
      try {
        const {data}  = await axios.delete(`http://localhost:5000/api/v1/delete-shop/${id}`,{headers:{        
           
            
            "Authorization":`Bearer ${token}`
    }
        }
        
           
      
       )  
   
     
            
  dispatch({type:DELETE_SHOP_SUCCESS,payload:data});
       } catch (error) {
      const message=  error.response&& error.response.data.message
          ? error.response.data.message
          : error.message
          dispatch({type:DELETE_SHOP_FAIL,payload:message})
  }
  
     
  }
 