import React from 'react'
import { useState } from 'react'
function StepThree({loading,data,error,selectSeat,occupied,selectedbox}) {
  const [selectedBox, setSelectedBox] = useState(null)

  const handleBoxClick=(index)=>{
    
  }
  return (
    <>
      <h3>Pick your seats</h3>
               <div class="seats-container">
{
    loading ? "loading" 
    : error ? "error"
    :
    data.bus[0].seats.map((item,index)=>{
     return   <div key={item._id}   onClick={(e)=>selectSeat(e,index,data.bus[0].seats)} id={item.occupied === true ?  "occupied-seat" : selectedbox.includes(index) ?    "occupied-seat": "seat"}>
        {item.seatNumber}
    </div>
    })
}
               </div>
       
    </>
  )
}

export default StepThree