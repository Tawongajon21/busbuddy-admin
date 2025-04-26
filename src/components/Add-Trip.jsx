import React from 'react'
import MainLayout from './MainLayout'
import Pathway from './pathway'
import { Link } from 'react-router-dom'
import { useState,useEffect } from 'react'

import { useDispatch,useSelector } from 'react-redux'
import { getbuses } from '../redux/actions/bus-actions'
import {getconductors,getdrivers} from "../redux/actions/admin"
import FormLoading from './FormLoading'

import { createtrip } from '../redux/actions/trips'
import { tempCityData } from './cityData'
import { debounce } from 'lodash'

function AddTrip({data:userInfo}) {
    const [inputValue, setInputValue] = useState("")
    const [to, setto] = useState("")
    const [departure, setdeparture] = useState("")
    const [arrival, setarrival] = useState("")
    const [from, setfrom] = useState("")
    const [busId, setBusId] = useState("")
    const [busfare, setBusfare] = useState("")
    const [driver, setdriver] = useState("")
    const [conductor, setconductor] = useState("")
    const [errorMessage, setErrorMessage] = useState("")
    const [capacity, setcapacity] = useState(0)
    const [suggestedItems, setsuggestedItems] = useState([])
    const [selectedItems, setselectedItems] = useState([])
    const [busfares, setbusfares] = useState({})
    const [possiblePickupDropOff, setpossiblePickupDropOff] = useState([])
    const [pairedCities1DArray, setpairedCities1DArray] = useState([])
    let pairedCities=[]
    let cityData=[
        {
            id:1,
            city:"Norton"
        },
        {
            id:2,
            city:"Chegutu"
        },
        {
            id:3,
            city:"Kadoma"
        },
        {
            id:4,
            city:"Kwekwe"
        },
        {
            id:5,
            city:"Gweru"
        },
        {
            id:6,
            city:"Bulawayo"
        },
        {
            id:7,
            city:"Beatrice"
        },
        {
            id:8,
            city:"Furtherstone"
        },
        {
            id:9,
            city:"Chivhu"
        },
        {
            id:10,
            city:"Mvuma"
        },
        {
            id:11,
            city:"Masvingo"
        },
        {
            id:12,
            city:"Ngundu"
        },
        {
            id:13,
            city:"Beitbridge"
        },
        {
            id:14,
            city:"Ruwa"
        },
        {
            id:15,
            city:"Marondera"
        },
        {
            id:16,
            city:"Macheke"
        },
        {
            id:17,
            city:"Headlands"
        },
        {
            id:18,
            city:"Rusape"
        },
        {
            id:19,
            city:"Mutare"
        },
        {
            id:20,
            city:"Harare"
        }
    ]
    
 



const handleInputChange=(dropOffArea)=>{
    if (dropOffArea.trim()==='') {
        setsuggestedItems([])
    }else{
        let filterData=cityData.filter((item)=>item.city.toLocaleLowerCase().includes(dropOffArea.toLocaleLowerCase()))
        setsuggestedItems(filterData)
    }

}
const handleSelectItem=(item)=>{
    setselectedItems((prevItems)=>{
        if (!Array.isArray(prevItems)) {
            return [item]
        }else{
           
       
            return [...prevItems,item]
        }
    })
}
const handleRemoveItem=(item)=>{
   
    setselectedItems((prevItems)=>prevItems.filter((i)=>i.id!==item.id))
}

let counter=0
let signature=userInfo.signature
let company=userInfo.company
console.log(userInfo);

const dispatch=useDispatch()

const buses=useSelector((state)=>state.getBuses)
const conductors=useSelector((state)=>state.getConductors)
const drivers=useSelector((state)=>state.getDrivers)
const addTrip=useSelector((state)=>state.addTrip)
let {loading,error,data}=buses


const getRoute=debounce(()=>{
    let key=`${from} ${to}`;


    if (tempCityData[key]) {

        setpairedCities1DArray(tempCityData[key])
  
    }
    if (to&&from) {
        
    }
},500)
useEffect(() => {
    let pairedCitiesArray=[]

 
getRoute()
    dispatch(getbuses())
    dispatch(getconductors(signature))
    dispatch(getdrivers(signature))
return ()=>getRoute.cancel()
    
}, [selectedItems,getbuses,to,from,getconductors,getdrivers])



const handleBusfareCharge=(index,busfare)=>{
 setpairedCities1DArray((prevData)=>{
    let updatedData=[...prevData];
updatedData[index].busfare=busfare
return updatedData
 })
}




function submit() {

        let dropOffAreas=pairedCities1DArray;

        if(addTrip.error){
            setErrorMessage(error)
            setTimeout(()=>{
                setErrorMessage('')
            },3000)
             }else{
                let bus=busId
                dispatch(createtrip(to,from,departure,arrival,busfare,capacity,bus,dropOffAreas,driver,company,conductor,signature))
             }
    
    
}

console.log(company);
useEffect(() => {
if (addTrip.data) {
    setTimeout(()=>{
        window.location.replace(`http://localhost:3005/trips`)
     // navigate("/bookings")
       
      
          },1500)
   
      
}


}, [addTrip.data])



console.log(getRoute(from,to));


  return (
    <MainLayout>
   <header id='add-trip' className="book-ticket-search-header">

   <div className='add-trip-div'>

   
     <p className="inside-pathway">
         <Link to="/">Home </Link>{'>'}<Link to="/trips">Trips</Link>{'>'}<span className='path-color'>Add Trip </span>
    </p>
    <div className="div-add-trip">

<button onClick={()=>submit()} className='add-trip-btn'>Add Trip</button>

</div>
    </div>

    <h3 className='h3-heading'>
                Add Trip Here
            </h3>
    
</header>
<p>
        {
            addTrip.loading ? <FormLoading/> : addTrip.error ? 
            <p className='form-error'>
            {addTrip.error}
                            </p> :
            addTrip.success &&  <p id='form-success' className='form-error'>
            You have successfully addthe trip,you will be redirected to the trips page.
                            </p>
        }
    </p>
<form className="add-item-form">
  
    <div className="add-item-right">
        <p className="add-item-input-p">
            <label htmlFor=""> <b>From</b> </label>
            <input value={from} onChange={(e)=>setfrom(e.target.value)} type="text" className='add-item-input' />
        </p>
        <p className="add-item-input-p">
            <label htmlFor=""> <b>Bus Fare</b> </label>
            <input value={busfare}  onChange={(e)=>setBusfare(e.target.value)} type="text" className='add-item-input' />
        </p>
        <p className="add-item-input-p">
            <label htmlFor=""><b> Depature</b></label>
            <input onChange={(e)=>setdeparture(e.target.value)} type="datetime-local" className='add-item-input' />
        </p>
        <p className="add-item-input-p">
            <label htmlFor=""><b>Enter the bus fare for each city</b></label>
            {
                pairedCities1DArray?.length >0 ? (
                    pairedCities1DArray.map((pair,index)=>(
             <p key={pair.id}className='p-busfare'>
                {pair.from} - {pair.to}
                <input className='add-item-input'  onChange={(e)=>handleBusfareCharge(index,e.target.value)} type="number" value={busfares[pair.id]||pair.busfare} />
             </p>
                    ))
                ) : undefined ? null : null
            }
        
        </p>
      
    </div>
    <div className="add-item-left">
    <p className="add-item-input-p">
            <label htmlFor=""><b>To</b> </label>
            <input value={to} onChange={(e)=>setto(e.target.value)} type="text" className='add-item-input' />
        </p>
    <p className="add-item-input-p">
            <label htmlFor=""><b>Arrival</b> </label>
            <input onChange={(e)=>setarrival(e.target.value)} type="datetime-local" className='add-item-input' />
        </p>
    <p className="add-item-input-p">
            <label htmlFor=""> <b>Bus</b> </label>
           <select  onChange={(e)=>setBusId(e.target.value)} id='select-add-trip'>
           <option value="">Select Bus for the trip</option>
            {
loading ? "Loading" : error ? "error" :
data.map((item)=>(
     
       <option value={item._id}>{item.busName} </option>
   
))
            }
         
           
       
           </select>
        </p>
        <p className="add-item-input-p">
            <label htmlFor=""><b>Capacity</b> </label>
            <input onChange={(e)=>setcapacity(e.target.value)} value={capacity} type="text" className='add-item-input' />
        </p>

        <p className="add-item-input-p">
            <label htmlFor=""><b>Driver</b></label>
           <select  onChange={(e)=>setdriver(e.target.value)} id='select-add-trip'>
           <option value="">Select Driver for the trip</option>
            {
 drivers.loading ? "Loading" :  drivers.error ? "error" :
 drivers.data?.map((item)=>(
     
       <option value={item._id}>{item.name} {item.surname} </option>
   
))
            }
         
           
       
           </select>
        </p>
        <p className="add-item-input-p">
            <label htmlFor=""><b>Conductor</b></label>
           <select  onChange={(e)=>setconductor(e.target.value)} id='select-add-trip'>
           <option value="">Select Conductor for the trip</option>
            {
conductors.loading ? "Loading" : error ? "error" :
conductors.data?.map((item)=>(
     
       <option value={item._id}>{item.name} {item.surname} </option>
   
))
            }
         
           
       
           </select>
        </p>
    

     
    </div>
</form>
    </MainLayout>
  
  )
}

export default AddTrip