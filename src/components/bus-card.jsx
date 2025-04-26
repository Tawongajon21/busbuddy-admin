import React from 'react'
import { useEffect ,useState} from 'react';
import { Link } from 'react-router-dom'
import { useDispatch,useSelector } from 'react-redux'
import { gettrips,deletetrip } from '../redux/actions/trips';
import LazyLoad from "react-lazy-load"
import ImageLoader from './ImageLoader';
import {MdMoreVert} from "react-icons/md"

function BusCard({_id,image,busName,to,from,busfare,bus,item,signature}) {
let serverUrl='https://busbuddy-server.onrender.com'
  const dispatch=useDispatch()
const [showToolTip, setshowToolTip] = useState(false)
const deleteTrip=useSelector((state)=>state.deleteTrip);
console.log(deleteTrip);
  console.log(item.bus);
  let newImageArray
  let getImages=item?.bus?.map((item)=>{
    newImageArray= item.images
  })
  console.log(newImageArray);




  return (
    <div className='card'>
      {
newImageArray?.map((item,index)=>(
<ImageLoader key={index} className={"bus-image"}  imageData={newImageArray} item={item} thumbnail={`${serverUrl}/${item.thumbnail}`} original={`${serverUrl}${item.newPath}`} />
))
      }
    

<ul className='ul-card'>
    <li ><h3>{item.bus[0].company} {item?.bus[0]?.busName}</h3></li>
    <li>To : {to}</li>
    <li>From : {from}</li>
    <li>Price : ${item.busfare}</li>
    <li className='admin-cta'>
        <Link id='more-button' className='form-search-btn' to={`/single-trip/${item._id}`}>More</Link>
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
         dispatch(deletetrip(item._id,signature))
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
  )
}

export default BusCard