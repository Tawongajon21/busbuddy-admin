import {GET_NOTIFICATIONS_FAIL,GET_NOTIFICATIONS_REQUEST,GET_NOTIFICATIONS_SUCCESS,NOTIFICATION_CLEAR,NOTIFICATION_READ,NOTIFICATION_RECIEVED} from "../constants/notifications"
const initialState={
  notifications:[]
}

export const notificationReducer=(state=initialState,action)=>{

  let newNotification=action.notification
  console.log(state);
  //let newArray=[...state.notifications,newNotification];
console.log(action);
  switch (action.type) {
    

 case 'GET_NOTIFICATIONS_SUCCESS':

  return     {...state,notifications:action.payload}
 case 'SET_NOTIFICATIONS':

  return      [...state,action.notification]

 case 'MARK_NOTIFICATION_AS_READ':
let notification=action.notification;
let notificationId=notification._id


  return   {
    ...state,notifications:state.notifications.map((item)=>item._id===notificationId ? notification : item)
  }
 case 'ADD_NOTIFICATION':

  return     {...state,notifications: [...state.notifications,action.notification]}

 case 'UPDATE_NOTIFICATION':

  return     {...state,notifications: [...state.notifications,action.notification]}


    case NOTIFICATION_RECIEVED:

     
    return     {...state,notifications: [...state.notifications,action.notification]}
   
    case NOTIFICATION_READ:
      return {...state,notifications:state.notifications.map((notification)=>notification.id===action.notificationId ? {...notification,read:true}:notification)}
      case NOTIFICATION_CLEAR:
        return {...state,notifications:[]}
     
  
    default:
      return state;
  }
}

export function getNotificationsReducer(state = {loading:true}, action) {
  switch (action.type) {
    case GET_NOTIFICATIONS_REQUEST:
      return { loading: true };
    case GET_NOTIFICATIONS_SUCCESS:
      return { loading: false, data: action.payload };
    case GET_NOTIFICATIONS_FAIL:
      return { loading: false, error: action.payload };
    default: return state;
  }
}