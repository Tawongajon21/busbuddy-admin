import React from 'react'
import { Link } from 'react-router-dom'
function Pathway({path}) {
  return (
    <>
   
     <p className="inside-pathway">
         <Link to="/">Home {'>'}</Link>  <span className='path-color'>{path}</span>
    </p>
    </>
   
  )
}

export default Pathway