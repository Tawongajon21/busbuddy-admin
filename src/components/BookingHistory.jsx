import React from 'react'
import Layout from './Layout'
import MainLayout from './MainLayout'
import { Link } from 'react-router-dom'
import FormLoading from './FormLoading'
import EmptyJourney from './EmptyJourney'
import ErrorPage from './ErrorPage'

import { useDispatch,useSelector } from 'react-redux'
import { getusertrips,cancelusertrips } from '../redux/actions/trips';
import { useEffect } from 'react'
function MyBookings() {
    const dispatch=useDispatch()
    const trips=useSelector((state)=>state.getPassengerTrips);
let   {loading,error,data}=trips;

    useEffect(() => {
        dispatch(getusertrips())
      
        }, [getusertrips])
        console.log(trips);
     
  return (
    <MainLayout>

    <div className='booking-div'>
    <div class="back-to-result">
            <Link to="/">Back home</Link>
            <p>
                Home {'>'} Booked Journeys
            </p>
        </div>

        {
            loading ? <FormLoading/> : error ? <ErrorPage/> : data?.length===0 ? <EmptyJourney/>:
         data ? <table>
         <thead>
             <tr>
                 <th>No.</th>
                 <th>Trip</th>
                 <th>Date of departure</th>
                 <th>Name of travelor</th>
                 <th>Email</th>
              
                 <th>Seat No.</th>
                 <th>Total Price($)</th>
                 <th>Action</th>
             </tr>
         </thead>
       <tbody>
       { 
       
       
           loading ? <FormLoading/> : 
       data? data.map((item,index)=>{
       return    <tr>
       <td>{index+1}</td>
       <td>{item.from} to {item.dropOffArea}</td>
       <td>{item.departure}</td>
       <td>{item.name} {item.surname}</td>
       <td>{item.email}</td>
       
       
       <td>{item.seatNumber}</td>
       <td>
       {item.busfare}
       </td>
       
       <td className='table-ctas'>
           <a href="">View</a>
           <a href="">Edit</a>
           <span className='cancel-trip' onClick={()=>{  
               if(item.paymentMethod!=="Cash upon boarding"){
       if (window.confirm(`Are you sure you want to cancel the trip?Kindly note that your refund of ${item.busfare} will be processed to you`)) {
           dispatch(cancelusertrips(item._id))
           window.location.reload()
       }
               }
               else{
                   if (window.confirm("Are you sure you want to cancel the trip?")) {
                      dispatch(cancelusertrips(item._id))
                     window.location.reload()
                   }
               }
              
           
           }
               }>Cancel</span>
       </td>
       </tr>
       }) : null
       }
       
       
       </tbody>
       
       
       </table> : error    ? <ErrorPage/> : null
        }





    
  
          
       
             
    </div>
         
        </MainLayout>
  )
}

export default MyBookings

{
    /**        {

loading ?   <FormLoading/>  : error ? <ErrorPage/> :  data&& data?.length===0 ? <EmptyJourney/>  : 
    data  ?    <table>
    <thead>
        <tr>
            <th>No.</th>
            <th>Trip</th>
            <th>Date of departure</th>
            <th>Name of travelor</th>
            <th>Email</th>
         
            <th>Seat No.</th>
            <th>Total Price($)</th>
            <th>Action</th>
        </tr>
    </thead>
  <tbody>
  { 
  
  
      loading ? <FormLoading/> : 
  data? data.map((item,index)=>{
  return    <tr>
  <td>{index+1}</td>
  <td>{item.from} to {item.dropOffArea}</td>
  <td>{item.departure}</td>
  <td>{item.name} {item.surname}</td>
  <td>{item.email}</td>
  
  
  <td>{item.seatNumber}</td>
  <td>
  {item.busfare}
  </td>
  
  <td className='table-ctas'>
      <a href="">View</a>
      <a href="">Edit</a>
      <span className='cancel-trip' onClick={()=>{  
          if(item.paymentMethod!=="Cash upon boarding"){
  if (window.confirm(`Are you sure you want to cancel the trip?Kindly note that your refund of ${item.busfare} will be processed to you`)) {
      dispatch(cancelusertrips(item._id))
      window.location.reload()
  }
          }
          else{
              if (window.confirm("Are you sure you want to cancel the trip?")) {
                 dispatch(cancelusertrips(item._id))
                window.location.reload()
              }
          }
         
      
      }
          }>Cancel</span>
  </td>
  </tr>
  }) : null
  }
  
  
  </tbody>
  
  
  </table>
  :  error ? <ErrorPage/> : null


} */
}