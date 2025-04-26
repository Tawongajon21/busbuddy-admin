import React from 'react'
import { useSelector } from 'react-redux'
import { useDispatch } from 'react-redux'
import { useState ,useEffect} from 'react'
import {userregister,usersignin} from "../redux/actions/user"
import FormLoading from './FormLoading'
function InPageLogin({isUserAuthenticated, setisUserAuthenticated}) {
  const [email, setEmail] = useState("")

  const [password, setPassword] = useState("")
  const [errorMessage,setErrorMessage]=useState('');
  const dispatch=useDispatch()
  let userLogin=useSelector((state)=>state.userLogin);
  console.log(userLogin);
  const {loading,error,userInfo}=userLogin;
  const handlePasswordChange=(e)=>{
      setPassword(e.target.value)

  }
  const signin=(e)=>{
      e.preventDefault();

    if(error){
      
          setErrorMessage(error)
          setTimeout(()=>{
              setErrorMessage('')
          },3000)
      }
      else{
          dispatch(usersignin(email,password))
      }
      
         }

         useEffect(()=>{
          if (userInfo) {
          setisUserAuthenticated(!isUserAuthenticated)
          }
         },[userLogin.userInfo,dispatch])


  return (
    <>
   
    <p>
     {
                 errorMessage&& <p className='form-error'>
 {errorMessage}
                 </p>
             }
             {
              userLogin.loading && <FormLoading/>
             }
 
     </p>
 
 <form class="booking-form" onSubmit={signin}>
 <div class="booking-left">
 <p class="booking-p">
         <label for="">Email address</label>
         <input onChange={(e)=>setEmail(e.target.value)} class="booking-input" type="text"/>
     </p>
  
 
 </div>
 <div class="booking-right">
 <p class="booking-p">
         <label for="">Password<span className='asterisk'>*</span></label>
         <input onChange={(e)=>setPassword(e.target.value)} class="booking-input" type="password"/>
     </p>
     
 
  
 
 </div>
 <div class="div-button-pay">
 <button class="btn-search">Register</button>
 </div>
 
 </form> 
    </>
  )
}

export default InPageLogin