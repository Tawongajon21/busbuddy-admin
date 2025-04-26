import React from 'react'
import bg from "../images/car-bg.png"
import { Link } from 'react-router-dom'
import { useState,useEffect } from 'react'
import { useDispatch,useSelector } from 'react-redux'
import {usersignin} from "../redux/actions/user"
import {adminsignin,companyownersignin,conductorsignin,driversignin} from "../redux/actions/admin"
import { baseUrlFrontend } from '../frontend-url'
import FormLoading from './FormLoading'
import MainLayout from './MainLayout'
import {getusers} from "../redux/actions/admin"
import store from "../redux/store"
import useData from './useData'
function Signin() {
    const [email, setEmail] = useState("")
    const {getUserData,getUserError,getUserloading}=useData()
console.log(getUserData);
    const [password, setPassword] = useState("")
    const [errorMessage,setErrorMessage]=useState('');
    const dispatch=useDispatch()
    let users=useSelector((state)=>state.getUsers);
    let userLogin=useSelector((state)=>state.userLogin);
    let adminLogin=useSelector((state)=>state.adminLogin);
    let conductorLogin=useSelector((state)=>state.conductorLogin);
    let driverLogin=useSelector((state)=>state.driverLogin);
    let companyOwnerLogin=useSelector((state)=>state.companyOwnerLogin);


    console.log(users);
    console.log("hello");
    const {loading,error,userInfo}=userLogin;
    let adminInfo=adminLogin?.adminInfo;
    let adminLoading=adminLogin?.loading
    let adminError=adminLogin.error;
    let conductorInfo=conductorLogin?.conductorInfo;
    let conductorLoading=conductorLogin?.loading;
    let conductorError=conductorLogin?.error;
    
    let driverInfo=driverLogin?.driverInfo;
    let driverLoading=driverLogin?.loading;
    let driverError=driverLogin?.error;
    let companyOwnerInfo=companyOwnerLogin?.companyOwnerInfo;
    let companyOwnerLoading=companyOwnerLogin?.loading;
    let companyOwnerError=companyOwnerLogin?.error;




    const handlePasswordChange=(e)=>{
        setPassword(e.target.value)

    }
    const binarySearch=(arr,targetEmail)=>{

        arr?.sort((a,b)=>a.email.localeCompare(b.email));
     let left=0;
     let right=arr?.length-1   
     while(left<=right){
let mid= Math.floor((left+right)/2);
let comparison=arr[mid].email.localeCompare(targetEmail);
if (comparison===0) {
    return arr[mid]
}else if(comparison<0){
left=mid+1;
}else{
    right=mid-1
}
  
}}

    let user=binarySearch(getUserData,email)
     
    const signin=(e)=>{
        e.preventDefault();
 let role=user.role;
 if (role==='Admin') {
    dispatch(adminsignin(email,password))
 }else if(role==='companyOwner'){
    dispatch(companyownersignin(email,password))
 }else if(role==='driver'){
    dispatch(driversignin(email,password))
 }
else{
    dispatch(conductorsignin(email,password))
}


if (error || adminError|| conductorError|| driverError||companyOwnerError) {
    let errorInformation=error ? error : adminError ? adminError : conductorError ? conductorError : driverError ? driverError : companyOwnerError;
    setErrorMessage(errorInformation)
    setTimeout(()=>{
        setErrorMessage('')
    },3000)
}else{
    return 
}          
 

       
        
           }

    useEffect(()=>{
        if (userInfo||companyOwnerInfo||driverInfo||conductorInfo||adminInfo) {

         window.location.replace(`${baseUrlFrontend}/`)
        }
       },[userInfo,dispatch,companyOwnerInfo,driverInfo,conductorInfo,adminInfo])

       useEffect(()=>{


dispatch(getusers())

       },[dispatch])

    
console.log(driverError);

    
  return (
    <MainLayout>
  <div class="signin">
    <img src={bg} alt="" className='image-signin'/>
    <div class="">
        <div class="brand-auth">
            <header className='brand-header'>
                <h3 class="brand">busbuddy </h3>
                <p>
                    <b>Sign-in</b>
                </p>
            </header>
            {
                errorMessage&& <p className='form-error'>
{errorMessage}
                </p>
            }
            {
             loading ?  <FormLoading/>  : companyOwnerLoading ? <FormLoading/> : adminLoading ? <FormLoading/> : driverLoading ? <FormLoading/> : conductorLoading ? <FormLoading/> : null 
            }
        </div>
        <form onSubmit={signin} class="auth-form">
      
            <div className='input-item'>
                <label for="">Email</label>
                <input  onChange={(e)=>setEmail(e.target.value)} type="text"/>
            </div>
       
            <div className='input-item'>
                <label for="">Password</label>
                <input  onChange={handlePasswordChange} type="password"/>
            </div>
         
            <div className='input-item'>
                <button id='signin-btn' className='signin-btn'>
                    Sign in
                </button>
            </div>
            <div >
                <p>
                    New user ? <Link to="/signup">Register</Link>
                </p>
            </div>
        </form>
    </div>
  </div>
    </MainLayout>
  
  )
       }
export default Signin