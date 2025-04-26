import React from 'react'
import { useState } from 'react';
function StepOne() {
   

  return (
      <>
          <h3>
    How many people are you booking for?
 </h3>
<div class="booking-number">
    <p class="booking-p">
        <label for="">No. of people</label>
        <select  class="booking-input" name="" id="">
            <option value="1">1</option>
            <option value="2">2</option>
            <option value="3">3</option>
            <option value="4">4</option>
            <option value="5">5</option>
        </select>
    </p>
  
</div>
      </>

  )
}

export default StepOne