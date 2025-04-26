import { YEARLY_SALES_REQUEST,YEARLY_SALES_SUCCESS,YEARLY_SALES_FAIL,DAILY_SALE_FAIL,DAILY_SALE_REQUEST,DAILY_SALE_SUCCESS,WEEKLY_SALE_FAIL,WEEKLY_SALE_REQUEST,WEEKLY_SALE_SUCCESS,MONTHLY_SALES_FAIL,MONTHLY_SALES_REQUEST,MONTHLY_SALES_SUCCESS,CUMULATIVE_SALE_FAIL,CUMULATIVE_SALE_REQUEST,CUMULATIVE_SALE_SUCCESS } from "../constants/aggregations";
import axios from "axios";
export const getdailysales =()=>async(dispatch,getState)=>{
    let shopowner= getState().shopOwnerSignin;
    let storekeeperLogin= getState().storeKeeperLogin;
    let storeKeeperInfo=storekeeperLogin.storeKeeperInfo
  
   
    let userInfo= shopowner.shopOwnerInfo ? shopowner.shopOwnerInfo : storeKeeperInfo
  
    dispatch({
        type:DAILY_SALE_REQUEST
    });
 

    try {
      const {data}  = await axios.get("http://localhost:5000/api/v1/get-daily-sales",{headers:{        
         
          
          "Authorization":`Bearer ${userInfo.token}`
  }
      }
      
         
    
     )  

   
          
dispatch({type:DAILY_SALE_SUCCESS,payload:data});
     } catch (error) {
      
    const message=  error
   
        dispatch({type:DAILY_SALE_FAIL,payload:message})
}

   
}
export const getweeklysales =()=>async(dispatch,getState)=>{
    let shopowner= getState().shopOwnerSignin;
    let storekeeperLogin= getState().storeKeeperLogin;
    let storeKeeperInfo=storekeeperLogin.storeKeeperInfo
  
   
    let userInfo= shopowner.shopOwnerInfo ? shopowner.shopOwnerInfo : storeKeeperInfo

   
    dispatch({
        type:WEEKLY_SALE_REQUEST
    });
 

    try {
      const {data}  = await axios.get("http://localhost:5000/api/v1/get-weekly-sales",{headers:{        
         
          
          "Authorization":`Bearer ${userInfo.token}`
  }
      }
      
         
    
     )  

   
          
dispatch({type:WEEKLY_SALE_SUCCESS,payload:data});
     } catch (error) {
      
    const message=  error
 
        dispatch({type:WEEKLY_SALE_SUCCESS,payload:message})
}

   
}
export const getmonthlysales =()=>async(dispatch,getState)=>{
    let shopowner= getState().shopOwnerSignin;
    let storekeeperLogin= getState().storeKeeperLogin;
    let storeKeeperInfo=storekeeperLogin.storeKeeperInfo
  
   
    let userInfo= shopowner.shopOwnerInfo ? shopowner.shopOwnerInfo : storeKeeperInfo

   
   
    dispatch({
        type:MONTHLY_SALES_REQUEST
    });
 

    try {
      const {data}  = await axios.get("http://localhost:5000/api/v1/get-monthly-sales",{headers:{        
         
          
          "Authorization":`Bearer ${userInfo.token}`
  }
      }
      
         
    
     )  

   
          
dispatch({type:MONTHLY_SALES_SUCCESS,payload:data});
     } catch (error) {
      
    const message=  error
   
        dispatch({type:MONTHLY_SALES_FAIL,payload:message})
}

   
}
export const getcumulativesales =()=>async(dispatch,getState)=>{
    let shopowner= getState().shopOwnerSignin;
    let storekeeperLogin= getState().storeKeeperLogin;
    let storeKeeperInfo=storekeeperLogin.storeKeeperInfo
  
   
    let userInfo= shopowner.shopOwnerInfo ? shopowner.shopOwnerInfo : storeKeeperInfo
  
   
   
    dispatch({
        type:CUMULATIVE_SALE_REQUEST
    });
 

    try {
      const {data}  = await axios.get("http://localhost:5000/api/v1/cumulative-sales",{headers:{        
         
          
          "Authorization":`Bearer ${userInfo.token}`
  }
      }
      
         
    
     )  

          
dispatch({type:CUMULATIVE_SALE_SUCCESS,payload:data});
     } catch (error) {
      
    const message=  error
   
        dispatch({type:CUMULATIVE_SALE_FAIL,payload:message})
}

   
}
export const getyearlysales =()=>async(dispatch,getState)=>{
  
    let shopowner= getState().shopOwnerSignin;
    let storekeeperLogin= getState().storeKeeperLogin;
    let storeKeeperInfo=storekeeperLogin.storeKeeperInfo
  
   
    let userInfo= shopowner.shopOwnerInfo ? shopowner.shopOwnerInfo : storeKeeperInfo
   
    dispatch({
        type:YEARLY_SALES_REQUEST
    });
 

    try {
      const {data}  = await axios.get(`http://localhost:5000/api/v1/yearly-sales`,{headers:{        
         
          
          "Authorization":`Bearer ${userInfo.token}`
  }
      }
      
         
    
     )  

   
          
dispatch({type:YEARLY_SALES_SUCCESS,payload:data});
     } catch (error) {
      
    const message=  error

        dispatch({type:YEARLY_SALES_FAIL,payload:message})
}

   
}
