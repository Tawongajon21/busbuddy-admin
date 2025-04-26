import React from 'react'
import MainLayout from './MainLayout'
import Pathway from './pathway'
import BusCard from './bus-card'
import BusCards from './BusCards'
import { Link } from 'react-router-dom'
import { useState,useEffect } from 'react'
function Trips({data}) {

  

let signature=data?.signature;



    const [to, setto] = useState("")
    const [from, setfrom] = useState("")
    const [filteredItem, setfilteredItem] = useState([])

    const filteredData=(data)=>{
        let result=[];
        Object.keys(data).forEach((route)=>{
            let routeData=data[route]
            let filteredRouteData=routeData.filter((item)=>{
                return item.from ===from && item.to ===to
            })
            if(filteredRouteData.length>0){
result.push(...filteredRouteData)
            }
        })

        setfilteredItem(result)
      
    }

    
  return (
    <MainLayout>
        <header className="book-ticket-search-header">
         <p id='single-trip-nav' style={{
            "display":"flex",
            justifyContent:"space-between",
            alignItems:"center"
         }} className="inside-pathway">
            <p>
            <Link to="/">Home </Link>{'>'}  <span className='path-color'> Trips </span> 
            </p>

<Link to="/add-trip" style={{
    marginRight:'1rem'
}}>Add Trip</Link>
</p>

<h3 className='h3-heading'>
              Find and add your Trips here
            </h3>
         </header>
       
<BusCards signature={signature}/>
    </MainLayout>
  )
}

export default Trips