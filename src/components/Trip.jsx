import React from 'react'
import imageOne from "../images/car-bg.png"
import imageFive from "../images/bus-3.jpg"
import { Link } from 'react-router-dom'
import Layout from './Layout'
function Trip() {
  return (


<section className='trip'>
    <Link to={`/single-trip/1`}>
        <img src={imageFive} alt="product-image" class="bus-image"/>
    </Link>
    <div class="bus-brand">
    City Bus  Irizar 3600X
    </div>
    <div class="bus-price">
       $15
    </div>

</section>

  )
}

export default Trip