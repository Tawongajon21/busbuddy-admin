import React from 'react'
import { useSelector } from 'react-redux'
import { useDispatch } from 'react-redux'
import { useState ,useEffect} from 'react'
import {userregister,usersignin} from "../redux/actions/user"
import FormLoading from './FormLoading'
import InPageRegister from "./InPageRegister.jsx"
import InPageLogin from "./InPageLogin.jsx"
function NotRegistered({isUserAuthenticated, setisUserAuthenticated}) {


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
    let userLogin=useSelector((state)=>state.userLogin);
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
        
        else if(userRegister.error){
        
            setErrorMessage(userRegister.error)
            setTimeout(()=>{
                setErrorMessage('')
            },6000)
        }
        
        else{
            dispatch(userregister(name,email,password,phone,surname))
        }
        
           }
       
        
const [register, setregister] = useState(true)


  return (
    <>
 
      <div>
      <h3>
 Unauthenticated
    </h3>

    <p>
    We have seen you are not authenticated in our system,Kindly register so that you can finish the booking process.If you are registered you can login <span onClick={(e)=>setregister(!register)} className='blue-span'>here</span>
  
    </p>
    <p>

    </p>
{
   register ? <InPageRegister isUserAuthenticated={isUserAuthenticated} setisUserAuthenticated={setisUserAuthenticated} />   : <InPageLogin isUserAuthenticated={isUserAuthenticated} setisUserAuthenticated={setisUserAuthenticated}/>
}

       
      
    </div>
    </>
  
  )
}

export default NotRegistered