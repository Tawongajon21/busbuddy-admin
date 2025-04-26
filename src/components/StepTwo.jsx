import React from 'react'

function StepTwo() {
  return (
    <>
        <h3>
                     Enter personal details
                  </h3>
      <div class="booking-form">
                  <div class="booking-left">
                      <p class="booking-p">
                          <label for="">Name</label>
                          <input class="booking-input" type="text"/>
                      </p>
                      <p class="booking-p">
                          <label for="">Surname</label>
                          <input class="booking-input" type="text"/>
                      </p>
                      <p class="booking-p">
                          <label for="">Contact Details</label>
                          <input class="booking-input" type="text"/>
                      </p>
                      <p class="booking-p">
                          <label for="">ID Type</label>
                          <select class="booking-input" name="" id="">
                              <option value="passport">Passport</option>
                              <option value="Id Number">Id Number</option>
                              <option value="driver's license">Driver's License</option>
                              <option value="birthCertificate">Birth Certificate</option>
                          </select>
                      </p>
                
                  </div>
                  <div class="booking-right">
                      <p class="booking-p">
                          <label for="">Email address</label>
                          <input class="booking-input" type="text"/>
                      </p>
                      <p class="booking-p">
                          <label for="">No. of bags</label>
                          <select class="booking-input" name="" id="">
                              <option value="1">1</option>
                              <option value="2">2</option>
                              <option value="3">3</option>
                              <option value="4">4</option>
                          </select>
                      </p>
                    
                      <p class="booking-p">
                          <label for="">Next of Kin Contact details</label>
                          <input class="booking-input" type="text"/>
                      </p>
                      <p class="booking-p">
                          <label for="">ID Number</label>
                          <input class="booking-input" type="text"/>
                      </p>
                 
                  </div>
                  </div>
                 
    </>

              
               
  )
}

export default StepTwo