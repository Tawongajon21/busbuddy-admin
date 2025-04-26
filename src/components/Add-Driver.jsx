import React from 'react'
import MainLayout from './MainLayout'
import { Link } from 'react-router-dom'
import { useState,useEffect } from 'react'
import imageFive from "../images/bus-3.jpg"
import { useDispatch,useSelector } from 'react-redux'
import {adminregister,driverregister,reseterror} from "../redux/actions/admin"
import { getcompanies } from '../redux/actions/company'
import FormLoading from './FormLoading'
import CompaniesData from './companyData'
import { baseUrlFrontend } from '../frontend-url'
function AddDriver({data:companyOwnerInfo}) {
    let driverRegister=useSelector((state)=>state.driverRegister);
    console.log(driverRegister);
    const {getCompaniesloading,getCompaniesData,getCompaniesError} =CompaniesData();

  
    const {loading,error,data}=driverRegister;
    console.log(driverRegister);
    const dispatch=useDispatch()
const [name, setname] = useState("")
const [surname, setsurname] = useState("")
const [phone, setphone] = useState("")
const [email, setemail] = useState("")
const [password, setpassword] = useState("")
const [confirmPassword, setconfirmPassword] = useState("")
const [errorMessage,setErrorMessage]=useState('');

let signature=companyOwnerInfo?.signature;
let id=companyOwnerInfo?._id
let dataCompany=getCompaniesData?.filter((item)=>item.companyOwner===id)[0];

let company=companyOwnerInfo?.role ==="companyOwner"?  dataCompany?._id : companyOwnerInfo?.company;
console.log(error);

const signup=(e)=>{
    e.preventDefault();
    if (password!==confirmPassword) {
    
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
        dispatch(driverregister(email,phone,password,name,surname,company,signature))
    }
    
       }

       console.log(signature);

       useEffect(()=>{
        if (data) {
 
       window.location.replace(`${baseUrlFrontend}/drivers`)
   
    
        
        }
        dispatch(getcompanies())

if (error) {

setTimeout(()=>{
    dispatch(reseterror())
},5000)


   
}

       },[data,getcompanies,error])
       console.log(driverRegister);
       console.log(companyOwnerInfo);
       let companies=companyOwnerInfo === null ? null : undefined ? null : getCompaniesData?.filter((item)=>item.companyOwner===companyOwnerInfo?._id) 
  console.log(error);



       return (
    <MainLayout>
         <header className="book-ticket-search-header">
         <p id='single-trip-nav' style={{
            "display":"flex",
            justifyContent:"space-between",
            alignItems:"center"
         }} className="inside-pathway">
            <p>
            <Link to="/">Home </Link>{'>'}  <Link to="/drivers">Drivers </Link>{'>'}  <span className='path-color'> Add Driver </span> 
            </p>

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

         <form className="add-item-form">
  
    <div className="add-item-right">
        <p className="add-item-input-p">
            <label htmlFor="">Name</label>
            <input onChange={(e)=>setname(e.target.value)} type="text" className='add-item-input' />
        </p>
        <p className="add-item-input-p">
            <label htmlFor="">Surname</label>
            <input onChange={(e)=>setsurname(e.target.value)} type="text" className='add-item-input' />
        </p>
        <p className="add-item-input-p">
            <label htmlFor="">Phone Number</label>
            <input onChange={(e)=>setphone(e.target.value)}  type="text" className='add-item-input' />
        </p>
     
      
    </div>
    <div className="add-item-left">
    <p className="add-item-input-p">
            <label htmlFor="">Email</label>
            <input onChange={(e)=>setemail(e.target.value)}  type="text" className='add-item-input' />
        </p>
    <p className="add-item-input-p">
            <label htmlFor="">Password</label>
            <input  onChange={(e)=>setpassword(e.target.value)} type="text" className='add-item-input' />
        </p>
 
        <p className="add-item-input-p">
            <label htmlFor="">Confirm Password</label>
            <input onChange={(e)=>setconfirmPassword(e.target.value)}  type="text" className='add-item-input' />
        </p>
    

     
    </div>
</form>
<div className="" style={{
    display:"flex",
    justifyContent:"center",
    marginTop:"1rem"
}}>
    <button onClick={(e)=>signup(e)}>
        Submit
    </button>
</div>
       
      

    </MainLayout>
  )
}

export default AddDriver