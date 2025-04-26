import React from 'react'
import styles from "./styles.css"
import EmptyJourney from './EmptyJourney';
import FormLoading from './FormLoading';
import ErrorPage from './ErrorPage';
function PassengersBooked({passengers}) {
    let {loading,error,data}=passengers
    console.log(passengers);
  return (

loading  ? <FormLoading/>   :  error ? <ErrorPage/> :
data ?   
    <div  className='booked-passengers'> 
 <table className='booked-table'>
    <thead>
        <tr>
            <th>No.</th>
            <th>Fullname </th>
            <th>Dropoff area</th>
            <th>Contact details</th>
            <th>ID Type</th>
            <th>ID Number</th>
         
 
            <th>Total Price($)</th>
            <th>Seat Number</th>
            <th>Action</th>
        </tr>
    </thead>
  <tbody>
  
  {
    data.map((item,index)=>(
        <tr key={item._id}>
        <td>{index+1}</td>
        <td>{item.name} {item.surname}</td>
        <td>{item.to}</td>
        <td>{item.phone}</td>
        <td>
     {item.idType}
        </td>
        <td>
     {item.idNumber}
        </td>
        <td>${item.busfare}</td>
        <td>{item.seatNumber} </td>
        
        
     
    
        
        <td className='table-ctas'>
            <a href="">View</a>
            <a href="">Edit</a>
            <span className='cancel-trip' >Cancel</span>
        </td>
        </tr>
       
       
    ))
  }
 
  
  
  </tbody>
  
  
  </table>
    </div> : data.length === 0 ?  <EmptyJourney/> : null
   
  )
}

export default PassengersBooked