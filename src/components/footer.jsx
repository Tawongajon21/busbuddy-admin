import React from 'react'

function Footer() {
  return (
    <footer class="footer">
       <div className="website-name">
        <h3>
          Busbuddy
        </h3>
       </div>
       <div className="">
       <ul id='list-items' className="list-of-things">
      <li><h3>Navigation</h3></li>
      <li><a href="">Buy Tickets</a></li>
      <li><a href="">Browse journeys</a></li>
      <li><a href="">Booked journeys</a></li>
      <li><a href="">Booking history</a></li>
      <li><a href="">Bus tracking</a></li>
      <li><a href="">Route maps</a></li>
     </ul>
       </div>
     <div>
     <ul id='list-items' className="list-of-things"> 
    <li><h3>Downloads</h3></li>
    <li><a href="">Download Android</a></li>
    <li><a href="">Download Apple</a></li>
    </ul>
     </div>
      <div className="">
      <ul className="list-of-things">
        <li><h3>Contact details</h3></li>
        <li>2456 Unit O Chitungwiza</li>
        <li>0784313785</li>
       </ul>
      </div>
     
            </footer>
  )
}

export default Footer