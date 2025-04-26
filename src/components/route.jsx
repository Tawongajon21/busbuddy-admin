import React from 'react'
import imageOne from "../images/car-bg.png"
function BusRoute() {
    let modal=document.getElementById("myModal");
    let openModalBtn=document.getElementById("open-modal-button"); 
    let closeModalBtn=document.getElementById("closeModalBtn")
    openModalBtn.onclick=function (){
        modal.style.display='block'
    }
    closeModalBtn.onclick=function (){
        modal.style.display='none'
    }
    window.onclick=function(event){
        if(event.target===modal){
modal.style.display='none'
        }
    }
   
  return (
    <div class="content">
    <div class="back-to-result">
        <a href="">Back home</a>
        <p>
            Home{'>'}Routes{'>'}<span>Harare to Mutare</span>{'>'}<span>City Bus  Irizar 3600X</span>
        </p>
    </div>
    <div class="details">
    
            <img   class="details-image" src={imageOne} alt="product-image"/>

        <div class="details-info">
            <ul>
                <li>
                    <h4>
                       Bus name : City Bus Irizar 2030
                    </h4>
                </li>
                <li>
                    <h4>
                       Route: Harare to Mutare
                    </h4>
                </li>
                <li>
                    <h4>
                       Date of departure: 12 June 2025 @ 1500
                    </h4>
                </li>
                <li>
                    <h4>
                        Bus capacity : 64
                    </h4>
                </li>
                <li>
                    <h4>
                        Seats booked : 40
                    </h4>
                </li>
                <li>
                    <h4>
                      Bus fare: $15
                    </h4>
                </li>
                <li>
                    <button id="open-modal-button" class="btn-search">
                        Book
                    </button>
                </li>

            </ul>
         
        </div>
       <div class="modal" id="myModal">
        <div class="modal-content">
           
            <h3>
                How many people are you booking for?
             </h3>
             <span id="closeModalBtn" class="close">
&times;
            </span>
            <div class="booking-number">
                <p class="booking-p">
                    <label for="">No. of people</label>
                    <select class="booking-input" name="" id="">
                        <option value="0">0</option>
                        <option value="1">1</option>
                        <option value="2">2</option>
                        <option value="3">3</option>
                        <option value="4">4</option>
                    </select>
                </p>
                <div class="cta-progress">
                    <a href="">Next</a>
                </div>
            </div>
            {
                /**  <!--
                How many people am i booking for
         

            <h3>
                How many people are you booking for?
             </h3>
            <div class="booking-number">
                <p class="booking-p">
                    <label for="">No. of people</label>
                    <select class="booking-input" name="" id="">
                        <option value="0">0</option>
                        <option value="1">1</option>
                        <option value="2">2</option>
                        <option value="3">3</option>
                        <option value="4">4</option>
                    </select>
                </p>
                <div class="cta-progress">
                    <a href="">Next</a>
                </div>
            </div>
           -->
*/
            }
            {
                /**    <!--
            Pick seats
          
           <h3>Pick your seats</h3>
           <div class="seats-container">
            <div class="seat">
                1
            </div>
            <div id="occupied-seat" class="seat">
                2
            </div>
            <div class="seat">
                3
            </div>
            <div class="seat">
                4
            </div>
            <div class="seat">
                5
            </div>
            <div class="seat">
                6
            </div>
            <div class="seat">
                7
            </div>
            <div class="seat">
                8
            </div>
            <div class="seat">
                9
            </div>
            <div class="seat">
                10
            </div>
            <div class="seat">
                11
            </div>
            <div class="seat">
                12
            </div>
            <div class="seat">
                13
            </div>
            <div class="seat">
                14
            </div>
            <div class="seat">
                15
            </div>
            <div class="seat">
                16
            </div>
            <div class="seat">
                17
            </div>
            <div class="seat">
                18
            </div>
            <div class="seat">
                19
            </div>
            <div class="seat">
                20
            </div>
            <div class="seat">
                21
            </div>
            <div class="seat">
                22
            </div>
            <div class="seat">
                23
            </div>
            <div class="seat">
                24
            </div>
            <div class="seat">
                25
            </div>
            <div class="seat">
                26
            </div>
            <div class="seat">
                27
            </div>
            <div class="seat">
                28
            </div>
            <div class="seat">
                29
            </div>
            <div class="seat">
                30
            </div>
            <div class="seat">
                31
            </div>
            <div class="seat">
                32
            </div>
            <div class="seat">
                33
            </div>
            <div class="seat">
                34
            </div>
            <div class="seat">
                35
            </div>
            <div class="seat">
                36
            </div>
            <div class="seat">
                37
            </div>
            <div class="seat">
                38
            </div>
            <div class="seat">
                39
            </div>
            <div class="seat">
                40
            </div>
           </div>
            -->
*/
            }
               
        {
            /**<!--
Booking summary
-->
<h3>
Booking summary
</h3>
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
<tr>
    <td>1</td>
    <td>10</td>
    <td>Reginald Jongwe Bus Fare</td>
    <td>20</td>
    <td>
        <a href="">Edit</a>
        <a href="">Delete</a>
    </td>
</tr>
<tr>
    <td>2</td>
    <td>20</td>
    <td>Reginald Jongwe Bus Fare</td>
    <td>20</td>
    <td>
        <a href="">Edit</a>
        <a href="">Delete</a>
    </td>
</tr>
<tr>
    <td>3</td>
    <td>30</td>
    <td>Reginald Jongwe Bus Fare</td>
    <td>20</td>
    <td>
        <a href="">Edit</a>
        <a href="">Delete</a>
    </td>
</tr>
<tr>
    <td>4</td>
    <td>40</td>
    <td>Luggage x 4 (2.5 extra bag)</td>
    <td>8</td>
    <td>
        <a href="">Edit</a>
        <a href="">Delete</a>
    </td>
</tr>
<tr>
    <td><b>Total Price</b></td>
  <td></td>
  <td></td>
    <td><b>$200</b></td>
 
</tr>

</tbody>


</table>

<div class="div-button-pay">
<button class="btn-search">Pay</button>
</div>

 */
        }

{
    /**     <!--
                Personal details form
<h3>
               Enter personal details
            </h3>
        
           <div class="booking-form">
            <div class="booking-left">
                <p class="booking-p">
                    <label for="">Name</label>
                    <input class="booking-input" type="text">
                </p>
                <p class="booking-p">
                    <label for="">Surname</label>
                    <input class="booking-input" type="text">
                </p>
                <p class="booking-p">
                    <label for="">Contact Details</label>
                    <input class="booking-input" type="text">
                </p>
          
            </div>
            <div class="booking-right">
                <p class="booking-p">
                    <label for="">Email address</label>
                    <input class="booking-input" type="text">
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
                    <label for="">Drop off area</label>
                    <select class="booking-input" name="" id="">
                        <option value="1">Hurungwe</option>
                        <option value="2">Shurugwi</option>
                        <option value="3">Mpandawana</option>
                        <option value="4">Chihota</option>
                    </select>
                </p>
           
            </div>
            <div class="booking-pay">
                <p>
                    The total fee is <b>$245</b>
                </p>
                <button class="btn-search">
                    Pay
                </button>
            </div>
           </div>
            -->
          */
}
        
        </div>
       </div>

      
    </div>


    
</div>

  )
}

export default BusRoute