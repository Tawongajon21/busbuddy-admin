import React from 'react'
import MainLayout from './MainLayout'
import Pathway from './pathway'
import BusCard from './bus-card'
import BusCards from './BusCards'
import { useState,useEffect } from 'react'
function BookTickets() {
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
          <Pathway path="Trips"/>
            <h3 className='h3-heading'>
                Select  the trip you want to travel
            </h3>
      
        </header>
     
       
<BusCards />
    </MainLayout>
  )
}

export default BookTickets