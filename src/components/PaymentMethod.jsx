import React from 'react'

function PaymentMethod({paymentMethod,setPaymentMethod}) {
  
  return (
      <>
          <h3>
   Which payment method are you using?
 </h3>
<div class="booking-number">
    <p class="booking-p">
        <label for="">Payment Method</label>
        <select required value={paymentMethod} onChange={(e)=>setPaymentMethod(e.target.value)} class="booking-input" name="paymentMethod" id="">
            <option value="Ecocash">Ecocash</option>
            <option value="Cash upon boarding">Cash upon boarding</option>
            <option value="Bank Transfer">Bank Transfer</option>
        
        </select>
    </p>
  
</div>
      </>

  )
}

export default PaymentMethod