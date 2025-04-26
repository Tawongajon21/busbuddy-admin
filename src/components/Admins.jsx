import React from 'react'
import MainLayout from './MainLayout'
import { Link } from 'react-router-dom'
import imageFive from "../images/bus-3.jpg"
import {useSelector,useDispatch} from "react-redux"
import { useState,useEffect } from 'react'
import { getadmins,deleteadmin } from '../redux/actions/admin'
import {getcompanies} from "../redux/actions/company"
import FormLoading from './FormLoading'
import CompaniesData from './companyData'
import imageOne from "../images/1.png"
import imageTwo from "../images/5.png"
import imageThree from "../images/6.png"

function Admins({data:companyOwnerInfo}) {
    const {getCompaniesloading,getCompaniesData,getCompaniesError} =CompaniesData();
    const images=[imageOne,imageTwo,imageThree]
const [errorMessage, setErrorMessage] = useState("")
    const admins=useSelector((state)=>state.getAdmins);
    const {loading,error,data}=admins;
    const dispatch=useDispatch();
    console.log(admins);
    let signature=companyOwnerInfo?.signature
    let companyOwnerId=companyOwnerInfo?._id;
  
    
    useEffect(() => {

        dispatch(getadmins(signature))
        dispatch(getcompanies())
      if(error){
    
            setErrorMessage('error')
            setTimeout(()=>{
                setErrorMessage('')
            },3000)
        }
        }, [getadmins,error])
        console.log(getCompaniesData);
  return (
    <MainLayout>
         <header className="book-ticket-search-header">
         <p id='single-trip-nav' style={{
            "display":"flex",
            justifyContent:"space-between",
            alignItems:"center"
         }} className="inside-pathway">
            <p>
            <Link to="/">Home </Link>{'>'}  <span className='path-color'> Admins </span> 
            </p>

<Link to="/add-admin" style={{
    marginRight:'1rem'
}}>Add Admin</Link>
</p>

<h3 className='h3-heading'>
              Find and add your Admins here
            </h3>
         </header>
         <div className="bus-cards">
    {
        loading ? <FormLoading/> : error ?
        <p className='form-error'>
{errorMessage}
                </p> :
                data ? data.map((item,index)=>(
                    <div className='card'>

                    <img  className="bus-image"  src={`${images[index]}`} />
                    
                        
                        
                    
                    <ul className='ul-card'>
                        <li ><h3>{item.name} {item.surname}</h3></li>
                       
                        <li style={{
                            display:"flex",
                            flexDirection:"column",
                            gap:"1rem",
                            justifyContent:'center'

                        }}>
                            <Link 
                            style={{
                              padding:"1rem 3rem",
                              border:"1px solid #ff8000",
                              borderRadius:"10px"  ,
                              backgroundColor:"#ff8000",
                              justifyContent:"center",
                              alignItems:"center",
                              color:"white"

                            }}
                            to={`/admin/${item._id}`}>More</Link>


                        <button id='more-button' onClick={()=>{
     if (window.confirm(`Are you sure you want to delete the account of ${item.name} ${item.surname}?`)) {
        dispatch(deleteadmin(item._id,signature))
      window.location.reload()
    }


                           
                        }}     style={{
                              padding:"1rem 3rem",
                              border:"1px solid #ff8000",
                              borderRadius:"10px"  ,
                              backgroundColor:"white",
                              justifyContent:"center",
                              alignItems:"center",
                              color:"#ff8000"

                            }}>
                            Delete
                        </button>
                        </li>
                    </ul>
                        </div>
                )) : 
                null
    }
        
     

         </div>
      

    </MainLayout>
  )
}

export default Admins