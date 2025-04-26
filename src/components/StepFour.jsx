import React from 'react';
import FormLoading from './FormLoading';
import { baseUrlFrontend } from '../frontend-url';
import { useEffect,useState } from 'react';
import {useNavigate} from "react-router-dom"

function StepFour({paymentMethod,people,selectedSeats,busfare,handleSubmit,addPassenger}) {
  const navigate=useNavigate()
  const [success, setsuccess] = useState(false)
  let totalBusFare=people.reduce((acc,item)=>{
    let price=parseInt(item.busfare);
    return acc+price
  },0)
console.log(addPassenger);

  useEffect(() => {
    if (addPassenger.data) {
    setsuccess(true)
        setTimeout(()=>{
      window.location.replace(`${baseUrlFrontend}/bookings`)
   // navigate("/bookings")
     
    
        },1500)
 
    
  
  
     
    }
    
  }, [addPassenger.data])

  return (

    <>
    <h3>
    Booking summary
    
</h3>
<p>
  {
addPassenger.loading ? <FormLoading/>
:
addPassenger.error ?  <p className='form-error'>
{addPassenger.error}
                </p>
:  addPassenger.error ?  <p className='form-error'>
{addPassenger.error}
                </p>:  success ?   <p id='form-success' className='form-error'>
You have successfully booked for the trip,you will be redirected to the booked trips.
                </p>: null
   
  }
</p>
<table>
    <thead>
        <tr>
            <th>No.</th>
            <th>Seat No.</th>
            <th>Item</th>
            <th>Cost ($)</th>
            <th>Action</th>
        </tr>
    </thead>
  <tbody>
    {
        people.map((item,index)=>(
            <tr key={item.id}>
            <td>{index+1}</td>
            <td>{item.seatNumber}</td>
            <td>{item.name} {item.surname} Bus Fare</td>
            <td>{busfare}</td>
            <td className='table-ctas'>
                <a href="">Edit</a>
                <a href="">Delete</a>
            </td>
        </tr>
        ))
    }
  
 
    <tr>
        <td><b>Total Price</b></td>
      <td></td>
      <td></td>
      <td></td>
        <td><b>${totalBusFare}</b></td>
     
    </tr>
 
  </tbody>
  

</table>

<div class="div-button-pay">
    {
        paymentMethod === "Cash upon boarding" ? <button type='submit' onClick={(e)=>handleSubmit(e)} class="btn-search">Book</button>
        :  paymentMethod === "Ecocash" ? <button class="btn-search">Pay</button> :
        <button class="btn-search">Pay</button>

    }
    
</div>

    </> 

  )
}

export default StepFour