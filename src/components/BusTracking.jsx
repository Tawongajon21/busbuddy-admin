import React from 'react'
import MainLayout from './MainLayout'
import { Link } from 'react-router-dom'

function BusTracking() {
  return (
    <MainLayout>
        <header className="book-ticket-search-header">
          
     <p className="inside-pathway">
         <Link to="/">Back Home {'>'}</Link>  <span className='path-color'>Bus Tracking</span>
    </p>
         
      
        </header>
        <form action="" id='bus-tracking-form' >
             
                <p id='search-p-form' >
                  
                    <input className='input-search' name="" placeholder='Enter the trip Id'/>
                    
                    <button className=''>
                        Search
                    </button>
            
                
                    
                 
                </p>
           
      
            </form>
    </MainLayout>
  )
}

export default BusTracking