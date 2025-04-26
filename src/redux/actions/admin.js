import {GET_DRIVER_TRIPS_SUCCESS,GET_DRIVER_TRIPS_REQUEST,GET_DRIVER_TRIPS_FAIL,GET_CONDUCTOR_TRIPS_SUCCESS,GET_CONDUCTOR_TRIPS_REQUEST,GET_CONDUCTOR_TRIPS_FAIL,UPDATE_CONDUCTOR_REQUEST,UPDATE_CONDUCTOR_SUCCESS,UPDATE_CONDUCTOR_FAIL,DELETE_CONDUCTOR_SUCCESS,DELETE_CONDUCTOR_REQUEST,DELETE_CONDUCTOR_FAIL,GET_CONDUCTOR_SUCCESS,GET_CONDUCTOR_REQUEST,GET_CONDUCTOR_FAIL,GET_CONDUCTORS_SUCCESS,GET_CONDUCTORS_REQUEST,GET_CONDUCTORS_FAIL,DELETE_DRIVER_SUCCESS,DELETE_DRIVER_REQUEST,DELETE_DRIVER_FAIL,UPDATE_DRIVER_SUCCESS,UPDATE_DRIVER_REQUEST,UPDATE_DRIVER_FAIL,RESET_ERROR,GET_DRIVER_SUCCESS,GET_DRIVER_REQUEST,GET_DRIVER_FAIL,GET_DRIVERS_SUCCESS,GET_DRIVERS_REQUEST,GET_DRIVERS_FAIL,CONDUCTOR_LOGIN_FAIL,COMPANY_OWNER_REGISTRATION_SUCCESS,COMPANY_OWNER_REGISTRATION_REQUEST,COMPANY_OWNER_REGISTRATION_FAIL,CONDUCTOR_REGISTRATION_SUCCESS,CONDUCTOR_REGISTRATION_REQUEST,CONDUCTOR_REGISTRATION_FAIL,DRIVER_REGISTRATION_SUCCESS,DRIVER_REGISTRATION_REQUEST,DRIVER_REGISTRATION_FAIL,COMPANY_OWNER_LOGIN_SUCCESS,COMPANY_OWNER_LOGIN_REQUEST,COMPANY_OWNER_LOGIN_FAIL,CONDUCTOR_LOGIN_SUCCESS,CONDUCTOR_LOGIN_REQUEST,DRIVER_LOGIN_SUCCESS,DRIVER_LOGIN_REQUEST,DRIVER_LOGIN_FAIL,GET_USERS_SUCCESS,GET_USERS_REQUEST,GET_USERS_FAIL,UPDATE_ADMIN_SUCCESS,UPDATE_ADMIN_REQUEST,UPDATE_ADMIN_FAIL,DELETE_ADMIN_SUCCESS,DELETE_ADMIN_REQUEST,DELETE_ADMIN_FAIL,GET_ADMIN_SUCCESS,GET_ADMIN_REQUEST,GET_ADMIN_FAIL,GET_ADMINS_SUCCESS,GET_ADMINS_REQUEST,GET_ADMINS_FAIL,ADMIN_LOGIN_FAIL,ADMIN_LOGIN_REQUEST,ADMIN_LOGIN_SUCCESS,ADMIN_LOGOUT_SUCCESS,ADMIN_REGISTER_FAIL,ADMIN_REGISTER_REQUEST,ADMIN_REGISTER_SUCCESS} from "../constants/admin";

import Cookie from 'js-cookie';
import { Axios } from "axios";
import axios from "axios";
import { baseUrl } from "./baseUrl";
export const  adminsignin = (email, password) => async (dispatch) => {
    dispatch({ type: ADMIN_LOGIN_REQUEST, payload: { email, password } });
    try {
      
      const { data } = await axios.post(`${baseUrl}auth/admin-signin`, {  email, password  });
      dispatch({ type:ADMIN_LOGIN_SUCCESS, payload: data });
     
      localStorage.setItem("adminInfo",JSON.stringify(data))
      
    } catch (error) {
      
      dispatch({ type: ADMIN_LOGIN_FAIL, payload: error.response.data.message });
    }
  }
export const  driversignin = (email, password) => async (dispatch) => {
    dispatch({ type: DRIVER_LOGIN_REQUEST, payload: { email, password } });
    try {
      
      const { data } = await axios.post(`${baseUrl}driver/signin`, {  email, password  });
      dispatch({ type:DRIVER_LOGIN_SUCCESS, payload: data });
     
      localStorage.setItem("driverInfo",JSON.stringify(data))
      
    } catch (error) {
      let errorMessage=error.response.data.msg
     
      dispatch({ type: DRIVER_LOGIN_FAIL, payload: errorMessage });
    }
  }
export const  conductorsignin = (email, password) => async (dispatch) => {
    dispatch({ type: CONDUCTOR_LOGIN_REQUEST, payload: { email, password } });
    try {
      
      const { data } = await axios.post(`${baseUrl}conductor/conductor-signin`, {  email, password  });
      dispatch({ type:CONDUCTOR_LOGIN_SUCCESS, payload: data });
     
      localStorage.setItem("conductorInfo",JSON.stringify(data))
      
    } catch (error) {
 
      dispatch({ type: CONDUCTOR_LOGIN_FAIL, payload:error.response.data.msg });
    }
  }
export const  companyownersignin = (email, password) => async (dispatch) => {
    dispatch({ type: COMPANY_OWNER_LOGIN_REQUEST, payload: { email, password } });
    try {
      
      const { data } = await axios.post(`${baseUrl}company-owner/signin`, {  email, password  });
      dispatch({ type:COMPANY_OWNER_LOGIN_SUCCESS, payload: data });
     
      localStorage.setItem("companyOwnerInfo",JSON.stringify(data))
      
    } catch (error) {
      
      dispatch({ type: COMPANY_OWNER_LOGIN_FAIL, payload: error.response.data.message });
    }
  }
export const  companyownerregistration = (email,phone,password,name,surname) => async (dispatch) => {
    dispatch({ type: COMPANY_OWNER_REGISTRATION_REQUEST, payload: { email,phone,password,name,surname} });
    try {
      
      const { data } = await axios.post(`${baseUrl}company-owner/signup`, { email,phone,password,name,surname});
      dispatch({ type:COMPANY_OWNER_REGISTRATION_SUCCESS, payload: data });
     
    
      
    } catch (error) {
      
      dispatch({ type: COMPANY_OWNER_REGISTRATION_FAIL, payload: error.response.data.msg });
    }
  }
  

  
 export const adminregister = (email,phone,password,name,surname,company,signature) => async (dispatch) => {
 
    dispatch({ type: ADMIN_REGISTER_REQUEST, payload: { email,phone,password,name,surname,company } });
    try {
      const { data } = await axios.post(`${baseUrl}auth/admin-signup`, { email,phone,password,name,surname,company},   {
        headers:{
          Authorization:`Bearer ${signature}`
        }
      });
      console.log(data);
     
    
      dispatch({ type: ADMIN_REGISTER_SUCCESS, payload: data });

   
    
     
      
      
    } catch (error) {
  
  let payload=error;
  console.log(payload);
      dispatch({ type:  ADMIN_REGISTER_FAIL, payload});
    }
  }
export const  driverregister = (email,phone,password,name,surname,company,signature) => async (dispatch,getState) => {
   
    dispatch({ type: DRIVER_REGISTRATION_REQUEST, payload: { email, password } });
    try {
      
      const { data } = await axios.post(`${baseUrl}driver/signup`, { email,phone,password,name,surname,company },
      {
        headers:{
          Authorization:`Bearer ${signature}`
        }
      }
      );
      dispatch({ type:DRIVER_REGISTRATION_SUCCESS, payload: data });
     
    
      
    } catch (error) {

let payload=error.response.data.msg
    
      dispatch({ type: DRIVER_REGISTRATION_FAIL, payload});
    }
  }
export const  conductorregister = (email,phone,password,name,surname,company,signature) => async (dispatch,getState) => {
    const {
      userLogin: { userInfo },
    } = getState();
    dispatch({ type: CONDUCTOR_REGISTRATION_REQUEST, payload: { email,phone,password,name,surname,company } });
    try {
      
      const { data } = await axios.post(`${baseUrl}conductor/conductor-signup`, { email,phone,password,name,surname,company },
      {
        headers:{
          Authorization:`Bearer ${signature}`
        }
      }
      );
      dispatch({ type:CONDUCTOR_REGISTRATION_SUCCESS, payload: data });
     
    
      
    } catch (error) {
      console.log(error);
      dispatch({ type: CONDUCTOR_REGISTRATION_FAIL, payload: error.response.data.msg });
    }
  }
  
 export const adminLogout = () => (dispatch) => {
  localStorage.removeItem("adminInfo")
    dispatch({ type: ADMIN_LOGOUT_SUCCESS })
  }


  export const getadmins =(signature)=>async(dispatch,getState)=>{

    dispatch({
        type:GET_ADMINS_REQUEST
    });
 

    try {
      const {data}  = await axios.get(`${baseUrl}auth/get-admins`,{headers:{        
           
            
        "Authorization":`Bearer ${signature}`
}
    })  
         
    
    
 
   
          
dispatch({type:GET_ADMINS_SUCCESS,payload:data});
     } catch (error) {
      
    const message=  error
 
        dispatch({type:GET_ADMINS_FAIL,payload:message})
}

   
}
  export const getadmin =(id,signature)=>async(dispatch,getState)=>{

    dispatch({
        type:GET_ADMIN_REQUEST
    });
 

    try {
      const {data}  = await axios.get(`${baseUrl}auth/get-admin/${id}`,{
        headers:{
          Authorization:`Bearer ${signature}`
        }
      })  
         
    
    
 
   
          
dispatch({type:GET_ADMIN_SUCCESS,payload:data});
     } catch (error) {
      
    const message=  error
 
        dispatch({type:GET_ADMIN_FAIL,payload:message})
}

   
}
  export const deleteadmin =(id,signature)=>async(dispatch,getState)=>{

    dispatch({
        type:DELETE_ADMIN_REQUEST
    });
 

    try {
      const {data}  = await axios.delete(`${baseUrl}auth/delete-admin/${id}`,{
        headers:{
          Authorization:`Bearer ${signature}`
        }
      })  
         
    
    
 
   
          
dispatch({type:DELETE_ADMIN_SUCCESS,payload:data});
     } catch (error) {
      
    const message=  error
 
        dispatch({type:DELETE_ADMIN_FAIL,payload:message})
}

   
}
export const updateadmin = (email,phone,name,surname,id,signature) => async (dispatch) => {
  dispatch({ type: UPDATE_ADMIN_REQUEST, payload: { email,phone,name,surname } });
  try {
    const { data } = await axios.patch(`${baseUrl}auth/update-admin/${id}`, { email,phone,name,surname},
    {
      headers:{
        Authorization:`Bearer ${signature}`
      }
    }
    );
  
    dispatch({ type: UPDATE_ADMIN_SUCCESS, payload: data });

 
  
   
    
    
  } catch (error) {

let payload=error.response.data.message
    dispatch({ type:  UPDATE_ADMIN_FAIL, payload});
  }
}


export const getusers =()=>async(dispatch,getState)=>{

  dispatch({
      type:GET_USERS_REQUEST
  });


  try {
    const {data}  = await axios.get(`${baseUrl}auth/get-users`)  
       
  
  

 
        
dispatch({type:GET_USERS_SUCCESS,payload:data});
   } catch (error) {
    
  const message=  error

      dispatch({type:GET_USERS_FAIL,payload:message})
}

 
}


export const getdrivers =(signature)=>async(dispatch,getState)=>{

  dispatch({
      type:GET_DRIVERS_REQUEST
  });


  try { 
    const {data}  = await axios.get(`${baseUrl}driver/drivers`,{headers:{        
         
          
      "Authorization":`Bearer ${signature}`
}
  })  
       
  
  

 
        
dispatch({type:GET_DRIVERS_SUCCESS,payload:data});
   } catch (error) {
    
  const message=  error

      dispatch({type:GET_DRIVERS_FAIL,payload:message})
}

 
}
export const getdriver =(id,signature)=>async(dispatch,getState)=>{

  dispatch({
      type:GET_DRIVER_REQUEST
  });


  try {
    const {data}  = await axios.get(`${baseUrl}driver/driver/${id}`,{headers:{        
         
          
      "Authorization":`Bearer ${signature}`
}
  })  
       
  
  

 
        
dispatch({type:GET_DRIVER_SUCCESS,payload:data});
   } catch (error) {
    
  const message=  error.response.data.msg
console.log(message);
      dispatch({type:GET_DRIVER_FAIL,payload:message})
}

 
}
export const updatedriver = (email,phone,name,surname,id,signature) => async (dispatch) => {
  dispatch({ type: UPDATE_DRIVER_REQUEST, payload: { email,phone,name,surname } });
  try {
    const { data } = await axios.patch(`${baseUrl}driver/driver/${id}`, { email,phone,name,surname},
    {
      headers:{
        Authorization:`Bearer ${signature}`
      }
    }
    );
  
    dispatch({ type: UPDATE_DRIVER_SUCCESS, payload: data });

 
  
   
    
    
  } catch (error) {

let payload=error.response.data.message
    dispatch({ type:  UPDATE_DRIVER_FAIL, payload});
  }
}

export const deletedriver =(id,signature)=>async(dispatch,getState)=>{

  dispatch({
      type:DELETE_DRIVER_REQUEST
  });


  try {
    const {data}  = await axios.delete(`${baseUrl}driver/driver/${id}`,{
      headers:{
        Authorization:`Bearer ${signature}`
      }
    })  
       
  
  

 
        
dispatch({type:DELETE_DRIVER_SUCCESS,payload:data});
   } catch (error) {
    
  const message=  error

      dispatch({type:DELETE_DRIVER_FAIL,payload:message})
}

 
}


export const getconductors =(signature)=>async(dispatch,getState)=>{

  dispatch({
      type:GET_CONDUCTORS_REQUEST
  });


  try { 
    const {data}  = await axios.get(`${baseUrl}conductor/conductors`,{headers:{        
         
          
      "Authorization":`Bearer ${signature}`
}
  })  
       
  
  

 
        
dispatch({type:GET_CONDUCTORS_SUCCESS,payload:data});
   } catch (error) {
    
  const message=  error

      dispatch({type:GET_CONDUCTORS_FAIL,payload:message})
}

 
}
export const getconductor =(id,signature)=>async(dispatch,getState)=>{

  dispatch({
      type:GET_CONDUCTOR_REQUEST
  });


  try { 
    const {data}  = await axios.get(`${baseUrl}conductor/conductor/${id}`,{headers:{        
         
          
      "Authorization":`Bearer ${signature}`
}
  })  
       
  
  

 
        
dispatch({type:GET_CONDUCTOR_SUCCESS,payload:data});
   } catch (error) {
    
  const message=  error

      dispatch({type:GET_CONDUCTOR_FAIL,payload:message})
}

 
}


export const updateconductor = (email,phone,name,surname,id,signature) => async (dispatch) => {
  dispatch({ type: UPDATE_CONDUCTOR_REQUEST, payload: { email,phone,name,surname } });
  try {
    const { data } = await axios.patch(`${baseUrl}conductor/conductor/${id}`, { email,phone,name,surname},
    {
      headers:{
        Authorization:`Bearer ${signature}`
      }
    }
    );
  
    dispatch({ type: UPDATE_CONDUCTOR_SUCCESS, payload: data });

 
  
   
    
    
  } catch (error) {

let payload=error.response.data.message
    dispatch({ type:  UPDATE_CONDUCTOR_FAIL, payload});
  }
}

export const deleteconductor =(id,signature)=>async(dispatch,getState)=>{

  dispatch({
      type:DELETE_CONDUCTOR_REQUEST
  });


  try {
    const {data}  = await axios.delete(`${baseUrl}conductor/conductor/${id}`,{
      headers:{
        Authorization:`Bearer ${signature}`
      }
    })  
       
  
  

 
        
dispatch({type:DELETE_CONDUCTOR_SUCCESS,payload:data});
   } catch (error) {
    
  const message=  error

      dispatch({type:DELETE_CONDUCTOR_FAIL,payload:message})
}

 
}


export const reseterror=()=>async(dispatch)=>{
  dispatch({
    type:RESET_ERROR,payload:null
});

}


export const getconductortrips=(signature)=>async(dispatch,getState)=>{
  
   
  dispatch({
      type:GET_CONDUCTOR_TRIPS_REQUEST
  });

 


  
  try {
    const {data}  =  await axios.get(`${baseUrl}conductor/conductor-trips`,{
      headers:{  
        
       
        
          "Authorization":`Bearer ${signature}`
  }
    })
    
    
       console.log(data);
  
   

 
        
dispatch({type:GET_CONDUCTOR_TRIPS_SUCCESS,payload:data});
   } catch (error) {
    
  const message=  error

      dispatch({type:GET_CONDUCTOR_TRIPS_FAIL,payload:message})
}

 

}
export const getdrivertrips=(signature)=>async(dispatch,getState)=>{
  
   
  dispatch({
      type:GET_DRIVER_TRIPS_REQUEST
  });

 


  
  try {
    const {data}  =  await axios.get(`${baseUrl}driver/driver-trips`,{
      headers:{  
        
       
        
          "Authorization":`Bearer ${signature}`
  }
    })
    
    
       console.log(data);
  
   

 
        
dispatch({type:GET_DRIVER_TRIPS_SUCCESS,payload:data});
   } catch (error) {
    
  const message=  error

      dispatch({type:GET_DRIVER_TRIPS_FAIL,payload:message})
}

 

}