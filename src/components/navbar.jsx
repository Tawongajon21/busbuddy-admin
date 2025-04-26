import React from 'react'
import { Link } from 'react-router-dom'
import { useSelector } from 'react-redux'
import { useDispatch } from 'react-redux'
import {userLogout} from "../redux/actions/user"
import  io  from 'socket.io-client'
import store from '../redux/store'
import {useEffect,useState} from "react"
import {FaBell} from "react-icons/fa"
import UserData from "./userData.js"
function Navbar({data}) {
    let userLogin=useSelector((state)=>state.userLogin)
    let notifications=useSelector((state)=>state.notifications)
    let readNotifications= notifications.notifications.filter((item)=>item.read===false).length;
    const [socket, setsocket] = useState(null)
    let {userInfo}=userLogin;
    const dispatch=useDispatch();
  console.log(data);
    function openMenu() {
        document.querySelector(".sidebar").classList.add("open")
    }
     
useEffect(() => {

    const socketIo=io('http://localhost:4000'); 
setsocket(socketIo)
 socketIo.on('connect',(e)=>{

console.log("connected");


 })
 socketIo.on("newTripBooking",(e)=>{

console.log(e);


 })

 socketIo.on('notification',(notification)=>{
console.log(notification);
store.dispatch({type:'ADD_NOTIFICATION',notification})
   
   
 })



}, [dispatch])
 console.log(data);
let role=data? data.role: null
console.log(role);
  return (
    <header class="header">
    <div class="brand">
       <Link to="/">busbuddy</Link> 
    </div>
  
    <div class="header-links">
        {
            data ? (
                <div className='options-navbar'>
                     <Link to="/notifications" style={{color: readNotifications===0 ? "#000" : "#ff8000"  }} className='notification-link'>
                    <FaBell size={18} style={{
                        cursor:"pointer"
                    }}/>
                    <sup>
                         
              {
              readNotifications===0 ? null : readNotifications
              }
                    </sup>
                  
                </Link>
               <div className='dropdown'>
                <div className="username-notifications">
           
<p className='username-navbar' >


{`${data.name} ${data.surname}`}  <span className='dropdown-arrow'>&#9660;</span>
</p>
                </div>
           
              
               <div className="dropdown-content">
                <p><button onClick={
                    ()=>dispatch(userLogout(role))
                    
                } className='dropdown-btn'>Logout</button></p>
                <p><a href="" className='dropdown-btn'>Help Page</a> </p>
               
               </div>
               </div>
          
                </div>
            ) : 
            <>
        

   <Link to="/signin">Sign in</Link>
           </>
        }
       
    </div>
        </header>
  )
}

export default Navbar

{
    /**     <a href="">Call: <span class="contact">
            +263784313785
        </span></a>
        <Link to="/bookings">My bookings</Link>
        <Link to="/signin">Sign in</Link> */
}