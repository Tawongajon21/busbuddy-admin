import { GET_STOREKEEPER_SALES_REQUEST,GET_STOREKEEPER_SALES_SUCCESS,GET_STOREKEEPER_SALES_FAIL,ADD_SALE_REQUEST,ADD_SALE_FAIL,ADD_SALE_SUCCESS ,GET_SALES_FAIL,GET_SALES_REQUEST,GET_SALES_SUCCESS} from "../constants/sale";
import axios from "axios";
import { baseUrl } from "./baseUrl";
export const createsale = ( items,paymentMethod,totalPrice,userId,currency,owner,name) => async (dispatch, getState) => {
    try {
      let shopowner= getState().shopOwnerSignin;
      let storekeeperLogin= getState().storeKeeperLogin;
      let storeKeeperInfo=storekeeperLogin.storeKeeperInfo
    
     
      let userInfo= shopowner.shopOwnerInfo ? shopowner.shopOwnerInfo : storeKeeperInfo
     
    let sale={items,paymentMethod,totalPrice};
        dispatch({ type: ADD_SALE_REQUEST ,payload: sale });
 
      const {data}  = await axios.post(`${baseUrl}add-sales`, {items,paymentMethod,totalPrice,userId,currency,owner,name} ,
    
      {
        headers:{  
          
         
          
          "Authorization":`Bearer ${userInfo.token}`
  }
      }
      
         
    
     ) 
   
        dispatch({ type:ADD_SALE_SUCCESS, payload: data });
      
    } catch (error) {
    
      dispatch({ type: ADD_SALE_FAIL, payload: error });
    }
  };

 

export const getsales =(userId)=>async(dispatch,getState)=>{
  
   
      dispatch({
          type:GET_SALES_REQUEST
      });
      let shopowner= getState().shopOwnerSignin;
      let storekeeperLogin= getState().storeKeeperLogin;
      let storeKeeperInfo=storekeeperLogin.storeKeeperInfo
    
     
      let userInfo= shopowner.shopOwnerInfo ? shopowner.shopOwnerInfo : storeKeeperInfo
      let ownerId= userInfo.role === "Owner" ? userInfo._id :userInfo._id;
      
    
      
      try {
        const {data}  =  await axios.get(`${baseUrl}get-shop-sales/${userId}`,{headers:{        
           
            
            "Authorization":`Bearer ${userInfo.token}`
    }
        }
        
           
      
       )  
  
     
            
  dispatch({type:GET_SALES_SUCCESS,payload:data});
       } catch (error) {
        
      const message=  error
    
          dispatch({type:GET_SALES_FAIL,payload:message})
  }
  
     
  }
export const getstorekeepersales =(id)=>async(dispatch,getState)=>{
  
  let shopowner= getState().shopOwnerSignin;
  let storekeeperLogin= getState().storeKeeperLogin;
  let storeKeeperInfo=storekeeperLogin.storeKeeperInfo

 
  let userInfo= shopowner.shopOwnerInfo ? shopowner.shopOwnerInfo : storeKeeperInfo
 
      dispatch({
          type:GET_STOREKEEPER_SALES_REQUEST
      });
   
  
      try { 
        const {data}  = await axios.get(`${baseUrl}get-storekeeper-sales/${id}`,{headers:{        
           
            
            "Authorization":`Bearer ${userInfo.token}`
    }
        }
        
           
      
       )  
 
     
            
  dispatch({type:GET_STOREKEEPER_SALES_SUCCESS,payload:data});
       } catch (error) {
        
      const message=  error.response.data
   
          dispatch({type:GET_STOREKEEPER_SALES_FAIL,payload:message})
  }
  
     
  }
 