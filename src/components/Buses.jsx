import React from 'react'
import MainLayout from './MainLayout'
import Pathway from './pathway'
import BusCard from './bus-card'
import BusCards from './BusCards'
import { useState,useEffect } from 'react'
import { useSelector,useDispatch } from 'react-redux'
import { getbuses,deletebus } from '../redux/actions/bus-actions'
import FormLoading from './FormLoading'
import ImageLoader from './ImageLoader'
import { Link } from 'react-router-dom'
import {MdMoreVert} from "react-icons/md"
function Buses() {
  const dispatch=useDispatch()
  const [showToolTip, setshowToolTip] = useState(false)
  const buses=useSelector((state)=>state.getBuses);
const {loading,error,data}=buses
useEffect(() => {

  dispatch(getbuses())

  }, [getbuses])
  return (
    <MainLayout>
        <header className="book-ticket-search-header">
          <Pathway path="Buses"/>
            <h3 className='h3-heading'>
               The buses available
            </h3>
      
        </header>
     
       
<div className="bus-cards">
  {
    loading ? <FormLoading/> : error ? <h2>Errror</h2> : data ?  data.map((item)=>(
      <div className='card'>
      {
item.images.map((item,index)=>(
<ImageLoader key={index} className={"bus-image"}  imageData={item.images} item={item} thumbnail={`http://localhost:4000${item.thumbnail}`} original={`http://localhost:4000${item.newPath}`} />
))
      }
    

<ul className='ul-card'>
    <li ><h3>{item.company} {item.busName}</h3></li>

    <li className='admin-cta'>
        <Link id='more-button' className='form-search-btn' to={`/`}>More</Link>
        <div className="options-container">
        <button onClick={()=>setshowToolTip(!showToolTip)} className='options-admin'>
   
   <MdMoreVert size={20} fontWeight={20}/>
        </button>
        {
          showToolTip ?   <div className="options">
          <ul>
              <li>
              <Link className='option-trip' to={`/edit-trip/${item._id}`}>Update</Link>
              </li>
              <li>
              <span  onClick={(e)=>
               {  
                 if (window.confirm(`Are you sure you want to cancel the trip?Kindly note that your refund of ${item.busfare} will be processed to you`)) {
      dispatch(deletebus(item._id))
         window.location.reload()
          
       }}} className='option-trip' >Delete</span>
              </li>
              <li>
              <a className='option-trip' onClick={()=>setshowToolTip(!showToolTip)}>Cancel</a>
              </li>
            </ul>
          </div> : null
        }
       
        
        
        
        </div>
      

    </li>
</ul>
    </div>
    )) : null
      }

</div>


    </MainLayout>
  )
}

export default Buses