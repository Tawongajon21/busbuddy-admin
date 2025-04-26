import React from 'react'
import { useSelector } from 'react-redux'
import { useDispatch } from 'react-redux'
import { useState ,useEffect} from 'react'
import {userregister,usersignin} from "../redux/actions/user"
import FormLoading from './FormLoading'
function InPageRegister({isUserAuthenticated, setisUserAuthenticated}) {
    console.log(isUserAuthenticated);
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
        /*
        else if(error){
        
            setErrorMessage(error)
            setTimeout(()=>{
                setErrorMessage('')
            },6000)




        }
        */
        else{
            dispatch(userregister(name,email,password,phone,surname))
        }
        
           }
           useEffect(()=>{
            if (userInfo) {
            setisUserAuthenticated(!isUserAuthenticated)
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
    console.log();
  return (

    <div>
              {
                errorMessage&& <p className='form-error'>
{errorMessage}
                </p>
            }
            {
             loading && <FormLoading/>
            }

 <form class="booking-form" onSubmit={signup}>
    <div class="booking-left">
        <p class="booking-p">
            <label for="">Name</label>
            <input onChange={(e)=>setName(e.target.value)} class="booking-input" type="text"/>
        </p>
        <p class="booking-p">
            <label for="">Surname</label>
            <input onChange={(e)=>setSurname(e.target.value)} class="booking-input" type="text"/>
        </p>
        <p class="booking-p">
            <label for="">Password<span className='asterisk'>*</span></label>
            <input   onChange={handlePasswordChange} class="booking-input" type="password"/>
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
        </p>
  
    </div>
    <div class="booking-right">
        <p class="booking-p">
            <label for="">Email address</label>
            <input onChange={(e)=>setEmail(e.target.value)} class="booking-input" type="text"/>
        </p>
        <p class="booking-p">
            <label for="">Contact Details</label>
            <input onChange={(e)=>setPhone(e.target.value)} class="booking-input" type="text"/>
        </p>
   
        <p class="booking-p">
            <label for="">Confirm Password<span className='asterisk'>*</span></label>
            <input onChange={(e)=>setConfirmPassword(e.target.value)} class="booking-input" type="password"/>
        </p>
      
   
    </div>
    <div class="div-button-pay">
 <button class="btn-search">Register</button>
 </div>
 
    </form>
    </div>
   
  )
}

export default InPageRegister