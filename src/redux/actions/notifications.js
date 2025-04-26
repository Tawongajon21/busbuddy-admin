import {NOTIFICATION_RECIEVED,NOTIFICATION_READ,NOTIFICATION_CLEAR,GET_NOTIFICATIONS_FAIL,GET_NOTIFICATIONS_REQUEST,GET_NOTIFICATIONS_SUCCESS,GET_NOTIFICATION_FAIL,GET_NOTIFICATION_REQUEST,GET_NOTIFICATION_SUCCESS} from "../constants/notifications";
import axios from "axios";
import { baseUrl } from "./baseUrl";


 

export const getnotifications =()=>async(dispatch,getState)=>{

      dispatch({
          type:GET_NOTIFICATIONS_REQUEST
      });
   
      const {
        userLogin: { userInfo },
      } = getState();
  
   


      try {
        const {data}  = await axios.get(`${baseUrl}notification/get-notifications`,{
            headers:{  
          
         
          
                "Authorization":`Bearer ${userInfo.signature}`
        }
        })  
           
      
      

     
            
  dispatch({type:GET_NOTIFICATIONS_SUCCESS,payload:data});
       } catch (error) {
        
      const message=  error
   
          dispatch({type:GET_NOTIFICATIONS_FAIL,payload:message})
  }
  
     
  }


export const recievenotification=(notification={})=>({

  type:NOTIFICATION_RECIEVED,
  notification
})

export const marknotificationasread=(notificationId)=>({
  type:NOTIFICATION_READ,
  notificationId
})

export const clearNotifications=()=>({
  type:NOTIFICATION_CLEAR
})



const loadInitialNotifications=async(signature)=>{
  try {
    const response = await axios.get(`${baseUrl}notification/get-notifications`,{
      headers:{  
    
   
    
          "Authorization":`Bearer ${signature}`
  }
  })  
  const notifications=response.data
  return notifications
  } catch (error) {
    console.log(error);
  }


}

export const fetchInitialNotifications=()=>{
  return (dispatch)=>{
    loadInitialNotifications().then((notifications)=>{
      dispatch({type:'SET_NOTIFICATIONS',notifications})
    })
  }
}

export const markNotificationAsRead=(notificationId)=>{
  
  return {
    type:'MARK_NOTIFICATION_AS_READ',
    notificationId
  }
}