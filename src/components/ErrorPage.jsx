import React from 'react'
import { Link } from 'react-router-dom'
function ErrorPage() {
  return (
    <div>
    <h2>
    Sorry there is a server error.Please try again later. 
    </h2>
    <p>
      <Link to="/">
         Go home
      </Link>
    </p>
  
      </div>
  )
}

export default ErrorPage