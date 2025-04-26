import React from 'react'
import { Link } from 'react-router-dom'
import bg from "../images/car-bg.png"
import { useState,useEffect } from 'react'
import { useDispatch,useSelector } from 'react-redux'
import {userregister} from "../redux/actions/user"
import { baseUrlFrontend } from '../frontend-url'
import FormLoading from './FormLoading'
import MainLayout from './MainLayout'
import { useNavigate,useLocation,useParams } from 'react-router-dom'

function Signup() {
    const [name, setName] = useState("")
    const [surname, setSurname] = useState("")
    const [email, setEmail] = useState("")
    const [phone, setPhone] = useState("")
    const [password, setPassword] = useState("")
    const [confirmPassword, setConfirmPassword] = useState("")
    const [passwordsNotMatching, setPasswordsNotMatching] = useState(false)
    const [showMeter, setShowMeter] = useState(false)
    const [errorMessage,setErrorMessage]=useState('');
    const [strength, setstrength] = useState(0)
    const dispatch=useDispatch()
    const navigate=useNavigate()
    const location=useLocation()
    const params=useParams()
    let previousLocation=location.state?.from
    console.log(previousLocation);
    console.log(document.referrer);

    let userRegister=useSelector((state)=>state.userRegister);
    const {loading,error,userInfo}=userRegister;
    console.log(userRegister);
   const signup=(e)=>{
e.preventDefault();
if (password!==confirmPassword) {
    setPasswordsNotMatching(!passwordsNotMatching)
    setErrorMessage("Passwords do not match")
    setTimeout(()=>{
        setErrorMessage('')
    },3000)
}
else if(error){

    setErrorMessage(error)
    setTimeout(()=>{
        setErrorMessage('')
    },3000)
}
else{
    dispatch(userregister(name,email,password,phone,surname))
}

   }

   useEffect(()=>{
    if (userInfo) {
if (previousLocation) {
    navigate(location.state?.from ?? "/single-trip/:id")
    window.location.replace(`${baseUrlFrontend}${previousLocation}`)
}else{
    window.location.replace(`${baseUrlFrontend}/`)
}

    
    }
   },[userInfo])
const handlePasswordChange=(e)=>{
    setPassword(e.target.value)
   calculatePasswordStrength(password);
   if (e.target.value.length>0) {
    setShowMeter(true)
   }else{
    setShowMeter(false)
   }
}
const calculatePasswordStrength=(password)=>{
   let strength=0
    if (password.length>=8) {
        strength+=1
        
    }
    if(/[A-Z]/.test(password)){
       
        strength+=1
    }
    if (/\d/.test(password)) {
        strength+=1
        
    }
    if (/[^A-Za-z0-9]/.test(password)) {
        strength+=1
        
    }

    setstrength(strength)
}
const getStrengthMessage=()=>{
    switch (strength) {
        case 0:
            return 'Weak'
        case 1:
            return 'Fair'
        case 2:
            return 'Good'
        case 3:
            return 'Strong'
        case 4:
            return 'Excellent'
        case 5:
            return 'Excellent'
        default:
            return 'Weak'
           
           
    }
}
const getStrengthColor=()=>{
    switch (strength) {
        case 0:
            return '#ff0000'
        case 1:
            return '#1E90FF'
        case 2:
            return '#0000ff'
        case 3:
            return '#00ff00'
        case 4:
            return  '#00ffff'
        case 5:
            return '#00ff00' 

    
        default:
        return '#ff0000'    
        ;
    }
}

  return (
    <MainLayout>
   <div  class="signin">
    <img src={bg} alt="" className='image-signin'/>
    <div class="signin-div">
        <div class="signin-header">
            <header>
                <h3 class="brand">busbuddy </h3>
                <p>
                    <b>Sign-up - It does not take 30 seconds</b>
                </p>
            </header>
            {
                errorMessage&& <p className='form-error'>
{errorMessage}
                </p>
            }
            {
             loading && <FormLoading/>
            }

           
        </div>
        <form onSubmit={signup} class="auth-form">
            <div className='input-item'>
                <label for="">Name</label>
                <input onChange={(e)=>setName(e.target.value)}  type="text"/>
            </div>
            <div >
                <label for="">Surname</label>
                <input  onChange={(e)=>setSurname(e.target.value)} type="text"/>
            </div>
            <div >
                <label for="">Email</label>
                <input  onChange={(e)=>setEmail(e.target.value)} type="text"/>
            </div>
            <div >
                <label for="">Contact Number</label>
                <input  onChange={(e)=>setPhone(e.target.value)} type="text"/>
            </div>
            <div class="input">
                <label for="">Password</label>
                <input   onChange={handlePasswordChange} type="password"/>
              
              {
                showMeter&& <div style={{
                    width: '98%',
                    height: '10px',
                    borderRadius: '5px',
                    textAlign: 'center',
                   fontSize:"13px",
                   alignItems:'center',
                   alignContent:'center',
                    color: '#fff',
                   backgroundColor:getStrengthColor()
               }} className="password-strength-meter">
                   {
                       getStrengthMessage()
                   }

               </div>
              }
               
            </div>
            <div >
                <label for="">Confirm Password</label>
                <input  onChange={(e)=>setConfirmPassword(e.target.value)} type="password"/>
            </div>
            <div >
                <button>
                    Sign up
                </button>
            </div>
            <div >
                <p>
                   Already registered? <Link to="/signin">Login</Link>
                </p>
            </div>
        </form>
    </div>
  </div>
    </MainLayout>
 
  )
}

export default Signup