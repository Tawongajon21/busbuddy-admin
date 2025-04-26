import React from 'react'
import {Link} from "react-router-dom"
function EmptyJourney() {
  return (
    <div>
  <h2>
    Hey you have not yet booked any trip yet.You can start by clicking the link below
  </h2>
  <p>
    <Link to="/book-tickets">
        Go to book tickets' page
    </Link>
  </p>

    </div>
  )
}

export default EmptyJourney