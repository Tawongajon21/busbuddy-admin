import React from 'react'
import MainLayout from './MainLayout'
import Pathway from './pathway'
import BusCard from './bus-card'
import BusCards from './BusCards'
import { useState,useEffect } from 'react'
import { getconductortrips } from '../redux/actions/admin';
import FormLoading from './FormLoading';
import { useSelector,useDispatch } from 'react-redux'
function ConductorsPage({data:conductorsInfo}) {
    console.log(conductorsInfo);
    let signature=conductorsInfo.signature

    const [to, setto] = useState("")
    const [from, setfrom] = useState("")
    const [filteredItem, setfilteredItem] = useState([])
    const dispatch=useDispatch();
    const trips=useSelector((state)=>state.getConductorTrips);
    let {loading,error,data}=trips;
  
    console.log(trips);
    useEffect(() => {
      dispatch(getconductortrips(signature))
  
  
      }, [getconductortrips,dispatch])
    

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




    console.log(conductorsInfo);

    
  return (
    <MainLayout>
        <header className="book-ticket-search-header">
          <Pathway path="Trips"/>
            <h3 className='h3-heading'>
               Your Trips
            </h3>
      
        </header>
     
{
        loading ?  <div className='data-loading'><FormLoading/></div> : error ? <h2>Errror</h2>: data?

    
        <>
              <header id='route-header' className="book-ticket-search-header">
          
          <h3 className='h3-heading'>
       
      
       
          </h3>
          
          </header>
        {
   data.map((key)=>(
   
    <div className="bus-cards">
    
    
    {
        data.map((item)=>(
           
               
             <BusCard signature={signature} item={item} bus={item.bus} key={item._id} id={item._id} image={item.image} busName={item.busName} to={item.to} from={item.from} busFare={item.busfare}/>
            
            
        )
 
        )
    }
    </div>
 
    
      ))     
       
    
        }
     
    {
        /** <div className="bus-cards">
    {
        buses.map((item)=>{
         return 
          
       })
    }
       
      
    
            </div>*/
    }
        
            </> 

     : null
}       

    </MainLayout>
  )
}

export default ConductorsPage