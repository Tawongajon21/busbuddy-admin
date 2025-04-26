import React from 'react'
import {getcompanies,createcompany} from "../redux/actions/company"
import CompaniesData from './companyData'
import { useEffect } from 'react'
import { useDispatch,useSelector } from 'react-redux'
import { useState } from 'react'
import { baseUrlFrontend } from '../frontend-url';
function CompanyNameModal() {
   const {getCompaniesloading,getCompaniesData,getCompaniesError} =CompaniesData();
const {loading,data,error}=useSelector((state)=>state.createCompany);
const [errorMessage, setErrorMessage] = useState('')
const [success, setsuccess] = useState(false)
   const [name, setname] = useState("")
    const dispatch=useDispatch()

       useEffect(()=>{


dispatch(getcompanies())


},[dispatch])


const addCompany=(e)=>{
e.preventDefault();
dispatch(createcompany(name))



}



useEffect(()=>{
if(data){
setsuccess(true)

setTimeout(()=>{
    window.location.replace(`${baseUrlFrontend}/`)

  
      },3000)
    
}
if (error) {
    let errorInformation=error
    setErrorMessage(errorInformation)
    setTimeout(()=>{
        setErrorMessage('')
    },3000)           
}


    
           },[dispatch,data])


        
    console.log(getCompaniesData);
  return (
    <div class="modal" id="myModal">
  
    <div class="modal-content">
      
     
   
        <form onSubmit={addCompany}>
        <h3>
{
    loading ?   `Hold on while we are preparing things for you` :  `Hey 👋 Reginald Jongwe kindly enter your company name`
}


    </h3>
    <div class="booking-number">
{
    loading ?      <p class="booking-p">
    <label for=""> Loading....</label>
   
  
  </p>  :  success === true ?  
    <p class="booking-p">
    <label for="">✅ You have successfully registered your company with us.</label>
   
  
  </p>  :


  <>
  <p class="booking-p">
    {
        error   && <p>

            {
               errorMessage
            }
        </p>

    }
      <label for=""></label>
      <input onChange={(e)=>setname(e.target.value)} value={name} class="booking-input" name="" id=""/>
    
    </p>
    <div style={{
        display:'flex',
        justifyContent:'right'
    }}>
    <button >
        Submit
    </button>
    </div>
   
    
  
  </>
} 

  
    </div>
    
    </form>


    
  
    
    

    
    </div>
    </div>
  )
}

export default CompanyNameModal