import React from 'react'
import { useState,useEffect } from 'react'
function FormLoading() {
    const [dots, setdots] = useState('')
useEffect(()=>{
const intervalId=setInterval(()=>{
    if (dots.length<3) {
        setdots(dots+'.')
    }else{
        setdots('')
    }
},500);
return ()=> clearInterval(intervalId)
},[dots])

  return (
    <div className='form-loading'>
Loading <span className='loading-dots'>{dots}</span>
    </div>
  )
}

export default FormLoading