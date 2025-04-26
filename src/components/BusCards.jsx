import React from 'react'
import BusCard from './bus-card'
import imageSix from "../images/photo-one.jpg"
import imageOne from "../images/bus-1.jpg";
import imageTwo from "../images/bus-3.jpg";
import imageThree from "../images/photo-four.jpg";
import imageFour from "../images/photo-three.jpg";
import imageFive from "../images/photo4.jpg";
import { useEffect } from 'react';
import { Link } from 'react-router-dom'
import { useDispatch,useSelector } from 'react-redux'
import { gettrips } from '../redux/actions/trips';
import FormLoading from './FormLoading';
function BusCards({signature}) {
  const dispatch=useDispatch();
  const trips=useSelector((state)=>state.getTrips);
  let {loading,error,data}=trips;

  console.log(trips);
  useEffect(() => {
    dispatch(gettrips())


    }, [gettrips,dispatch])
  

  return (
    
      loading ?  <div className='data-loading'><FormLoading/></div> : error ? <h2>Errror</h2>:

    
    <>
    {
 Object.keys(data).map((key)=>(
    <>

   <header id='route-header' className="book-ticket-search-header">
      
<h3 className='h3-heading'>
{key}
</h3>

</header>
<div className="bus-cards">


{
    data[key].map((item)=>(
 <BusCard signature={signature} item={item} bus={item.bus} key={item._id} id={item._id} image={item.image} busName={item.busName} to={item.to} from={item.from} busFare={item.busfare}/>
   
    ))
}
</div>
</>

  ))     
   

    }
 
{
    /** <div className="bus-cards">
{
    buses.map((item)=>{
     return 
      
   })
}
   
  

        </div>*/
}
    
        </>
  )
}

export default BusCards