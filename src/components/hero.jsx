import React from 'react'
import carBg from "../images/car-bg.png"
function Hero() {
  return (
    <main className='main'>
               <img src={carBg} alt="image"/>

<div class="hero">
   <div class="hero-txt">
       <h1>
           Adventure Is Calling.
       </h1>
       <h2>
           Get set for a long weekend outside!
       </h2>
       <form action="">
           <input type="text" class="search-input" placeholder="Search for available buses"/>
           <button class="btn-search">
               Search
           </button>
       </form>
   </div>
   <div class="btn-book-div">
      
   </div>
</div>
    </main>
  )
}

export default Hero