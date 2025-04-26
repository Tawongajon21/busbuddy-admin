import { GET_BRANCH_FAIL,GET_BRANCH_SUCCESS,GET_BRANCH_REQUEST,GET_BRANCHES_FAIL,GET_BRANCHES_REQUEST,GET_BRANCHES_SUCCESS,ADD_BRANCH_FAIL,ADD_BRANCH_SUCCESS,ADD_BRANCH_REQUEST,UPDATE_BRANCH_FAIL,UPDATE_BRANCH_REQUEST,UPDATE_BRANCH_SUCCESS,DELETE_BRANCH_FAIL,DELETE_BRANCH_REQUEST,DELETE_BRANCH_SUCCESS } from "../constants/branches";
import axios from "axios";
export const createbranch = ( branchName,storeKeeper,token) => async (dispatch, getState) => {
  let branch= branchName 
  try {
 
        dispatch({ type: ADD_BRANCH_REQUEST ,payload: branch });
   
    
      const {data}  = await axios.post("http://localhost:5000/api/v1/create-branch", {branchName,storeKeeper} ,
      {
        headers:{  
          
         
          
          "Authorization":`Bearer ${token}`
  }
      }
      
         
    
     ) 
    
        dispatch({ type:ADD_BRANCH_SUCCESS, payload: data });
      
    } catch (error) {
      dispatch({ type: ADD_BRANCH_FAIL, payload: error.message });
    }
  };

 

export const getbranches =(token)=>async(dispatch)=>{
  
   
      dispatch({
          type:GET_BRANCHES_REQUEST
      });
   
  
      try {
        const {data}  = await axios.get("http://localhost:5000/api/v1/get-branches",{headers:{        
           
            
            Authorization:`Bearer ${token}`
    }
        }
        
           
      
       )  
   
     
            
  dispatch({type:GET_BRANCHES_SUCCESS,payload:data});
       } catch (error) {
      const message=  error.response&& error.response.data.message
          ? error.response.data.message
          : error.message
          dispatch({type:GET_BRANCHES_FAIL,payload:message})
  }
  
     
  }
export const getbranch =(id,token)=>async(dispatch,getState)=>{

   
      dispatch({
          type:GET_BRANCH_REQUEST
      });
   
  
      try {
        const {data}  = await axios.get(`http://localhost:5000/api/v1/get-branch/${id}`,{headers:{        
           
            
            "Authorization":`Bearer ${token}`
    }
        }
        
           
      
       )  
   
     
            
  dispatch({type:GET_BRANCH_SUCCESS,payload:data});
       } catch (error) {
      const message=  error.response&& error.response.data.message
          ? error.response.data.message
          : error.message
          dispatch({type:GET_BRANCH_FAIL,payload:message})
  }
  
     
  }
export const updatebranch =(branchName,id,token)=>async(dispatch,getState)=>{
 
   
      dispatch({
          type:UPDATE_BRANCH_REQUEST
      });
   
  
      try {
        const {data}  = await axios.patch(`http://localhost:5000/api/v1/update-branch/${id}`,{branchName},{headers:{        
           
            
            "Authorization":`Bearer ${token}`
    }
        }
        
           
      
       )  
      
   
     
            
  dispatch({type:UPDATE_BRANCH_SUCCESS,payload:data});
       } catch (error) {
      const message=  error.response&& error.response.data.message
          ? error.response.data.message
          : error.message
          dispatch({type:UPDATE_BRANCH_FAIL,payload:message})
  }
  
     
  }


  export const deletebranch =(id,token)=>async(dispatch,getState)=>{
 
      dispatch({
          type:DELETE_BRANCH_REQUEST
      });
   
  
      try {
        const {data}  = await axios.delete(`http://localhost:5000/api/v1/delete-branch/${id}`,{headers:{        
           
            
            "Authorization":`Bearer ${token}`
    }
        }
        
           
      
       )  
   
     
            
  dispatch({type:DELETE_BRANCH_SUCCESS,payload:data});
       } catch (error) {
      const message=  error.response&& error.response.data.message
          ? error.response.data.message
          : error.message
          dispatch({type:DELETE_BRANCH_FAIL,payload:message})
  }
  
     
  }
 