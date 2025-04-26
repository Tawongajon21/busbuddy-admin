import React from 'react'
import MainLayout from './MainLayout'

import { useEffect,useState } from 'react'
import { getnotifications,recievenotification } from '../redux/actions/notifications'
import { useSelector } from 'react-redux'
import { useDispatch } from 'react-redux'
import { Link } from 'react-router-dom'
import ErrorPage from './ErrorPage'
import FormLoading from './FormLoading'
import {markNotificationAsRead} from "../redux/actions/notifications"
import  io  from 'socket.io-client'
import store from '../redux/store'
function Notifications() {
  let notifications=useSelector((state)=>state.notifications)
  let serverUrl='https://busbuddy-server.onrender.com'
  console.log(notifications);

  let data=notifications.notifications.sort((a,b)=>{
    return new Date(b.createdAt)- new Date(a.createdAt)
  })


  const [socket, setsocket] = useState(null)
  let getNotifications=useSelector((state)=>state.getNotifications)
  //let {loading,error,data}=getNotifications
  console.log(getNotifications);
  let notificationsLength=notifications.notifications.data

  console.log(notificationsLength);
  let dispatch=useDispatch()



  useEffect(() => {

    const socketIo=io(serverUrl); 
    setsocket(socketIo)
  
    
     socketIo.on('notification',(notification)=>{
  console.log(notification);
   store.dispatch({type:'ADD_NOTIFICATION',notification})
       
       
     })
     socketIo.on('notificationUpdated',(notification)=>{
  console.log(notification);
      store.dispatch({type:'MARK_NOTIFICATION_AS_READ',notification})
          
   
        })


dispatch(getnotifications())


  },[dispatch])


const handleMarkAsRead=(id)=>{
socket.emit('markAsRead',id)
}



  return (
    <MainLayout>
    <header className="book-ticket-search-header">

 
    
    <p id='single-trip-nav' className="inside-pathway">
    <Link to="/">Home </Link>{'>'}  <span className='path-color'>Notifications</span>
    </p>
    <h3 className='h3-heading'>
              Notifications
            </h3>

    
    
    </header>
    {

       <ul className="notifications-div">
     


{
data.map((item)=>(
    <li onClick={()=>handleMarkAsRead(item._id)} key={item.id} className={item.read ? 'notification' :"notification unread"}>
    {item.message}
  </li>
  ))
}
     
  
  
    </ul> 
    }
   
    </MainLayout>
  )
}

export default Notifications


{
  /**loading ? <FormLoading/> : error ? <ErrorPage/> : 
data.length===0 ?    < >
<h2>
You have no new notifications at the moment
</h2>
<p>
  <Link to="/">
     Go home
  </Link>
</p>

  </> :
 */
}