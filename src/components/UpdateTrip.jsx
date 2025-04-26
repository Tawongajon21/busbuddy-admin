import React from 'react'
import MainLayout from './MainLayout'
import Pathway from './pathway'
import { Link } from 'react-router-dom'
import { useState,useEffect } from 'react'
import debounce from "lodash.debounce"
import { useDispatch,useSelector } from 'react-redux'
import { getbuses } from '../redux/actions/bus-actions'
import FormLoading from './FormLoading'
import styles from "./styles.css"
import { createtrip,updatetrip,gettrip } from '../redux/actions/trips'
import {useParams} from 'react-router-dom'
import { getData } from './helper'
import { baseUrlFrontend } from "../frontend-url";
function UpdateTrip() {
    const id= useParams().id
    const dispatch=useDispatch()
    const getTrip=useSelector((state)=>state.getTrip)
let objectData=getTrip.loading ? "Loading" : getTrip.error ? "error" : getTrip.data ? getTrip.data : null  ;



useEffect(() => {
 dispatch(gettrip(id))

}, [gettrip])

console.log(objectData);


    const [inputValue, setInputValue] = useState( "")
    const [to, setto] = useState(objectData.to)
    const [departure, setdeparture] = useState(objectData.departure)
    const [arrival, setarrival] = useState(objectData.arrival)
    const [from, setfrom] = useState(objectData.from)
    const [busId, setBusId] = useState(objectData.bus[0]._id)
    const [busfare, setBusfare] = useState(objectData.busfare)
    const [errorMessage, setErrorMessage] = useState("")
    const [capacity, setcapacity] = useState(objectData.capacity)
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




const buses=useSelector((state)=>state.getBuses)
const addTrip=useSelector((state)=>state.addTrip)

let {loading,error,data}=buses
console.log(buses);
useEffect(() => {
    let pairedCitiesArray=[]
    selectedItems.forEach((city1,index)=>{
        selectedItems.forEach((city2)=>{
            if (city1.city!==city2.city ) {
                pairedCitiesArray.push({id:counter++,from:city1.city,to:city2.city,busfare:0})
               
            }
        })
      
    
    
    
    
    
    })
    setpairedCities1DArray(pairedCitiesArray)

    dispatch(getbuses())
}, [selectedItems,getbuses])



const handleBusfareCharge=(index,busfare)=>{
 setpairedCities1DArray((prevData)=>{
    let updatedData=[...prevData];
updatedData[index].busfare=busfare
return updatedData
 })
}


function submit() {

        let dropOffAreas=pairedCities1DArray.filter((item)=>item.busfare!==0);
        if(addTrip.error){
            setErrorMessage(error)
            setTimeout(()=>{
                setErrorMessage('')
            },3000)
             }else{
                dispatch(createtrip(to,from,departure,arrival,busfare,capacity,busId,dropOffAreas))
             }
    
    
}
useEffect(() => {
if (addTrip.data) {
    setTimeout(()=>{
        window.location.replace(baseUrlFrontend)
     // navigate("/bookings")
       
      
          },1500)
   
      
}

}, [addTrip.data])


  return (
    <MainLayout>
   <header id='add-trip' className="book-ticket-search-header">

   <div className='add-trip-div'>

   
     <p className="inside-pathway">
         <Link to="/">Home </Link>{'>'}<Link to="/trips">Trips</Link>{'>'}<span className='path-color'>Edit Trip </span>
    </p>
    <div className="div-add-trip">

<button onClick={()=>submit()} className='add-trip-btn'>Edit Trip</button>

</div>
    </div>

    <h3 className='h3-heading'>
               Edit Trip Here
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
    {
        getTrip.loading ? <FormLoading /> : getTrip.error ? <p>Error</p> 
        :  data ?  <form className="add-item-form">
  
        <div className="add-item-right">
            <p className="add-item-input-p">
                <label htmlFor="">From</label>
                <input value={data.from} onChange={(e)=>setfrom(e.target.value)} type="text" className='add-item-input' />
            </p>
            <p className="add-item-input-p">
                <label htmlFor="">Bus Fare</label>
                <input value={busfare}  onChange={(e)=>setBusfare(e.target.value)} type="text" className='add-item-input' />
            </p>
            <p className="add-item-input-p">
                <label htmlFor="">Depature</label>
                <input onChange={(e)=>setdeparture(e.target.value)} type="datetime-local" className='add-item-input' />
            </p>
            <p id='auto-complete' className="add-item-input-p">
                <label htmlFor="">Drop Off Areas</label>
                <div className="textarea-container">
                <input 
                
                onChange={
                    (e)=>{
                        setInputValue(e.target.value)
                        handleInputChange(e.target.value)
                    }
            } value={inputValue}  type="text" className='add-item-input' />
                </div>
                <div className='selected-items'>
        {
        selectedItems.map((item)=>(
            <p className='selected-item' key={item.id}>
            
                {item.city} <span className='remove' onClick={()=>handleRemoveItem(item)}>X</span>
            
    
            </p>
        ))
        }
       </div>
       <ul className='suggested-items'>
        {
            suggestedItems.map((item)=>(
                <li key={item.id} style={{cursor:"pointer"}} onClick={()=>handleSelectItem(item)}>
                    {item.city}
                </li>
            ))
        }
       </ul>
    
            </p>
          
        </div>
        <div className="add-item-left">
        <p className="add-item-input-p">
                <label htmlFor="">To</label>
                <input value={to} onChange={(e)=>setto(e.target.value)} type="text" className='add-item-input' />
            </p>
        <p className="add-item-input-p">
                <label htmlFor="">Arrival</label>
                <input onChange={(e)=>setarrival(e.target.value)} type="datetime-local" className='add-item-input' />
            </p>
        <p className="add-item-input-p">
                <label htmlFor="">Bus</label>
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
                <label htmlFor="">Capacity</label>
                <input onChange={(e)=>setcapacity(e.target.value)} value={capacity} type="text" className='add-item-input' />
            </p>
        
    <p className="add-item-input-p">
                <label htmlFor="">Enter the bus fare for each city</label>
                {
                    pairedCities1DArray.length >0 && (
                        pairedCities1DArray.map((pair,index)=>(
                 <p key={pair.id}className='p-busfare'>
                    {pair.from} - {pair.to}
                    <input className='add-item-input'  onChange={(e)=>handleBusfareCharge(index,e.target.value)} type="number" value={busfares[pair.id]||pair.busfare} />
                 </p>
                        ))
                    )
                }
            
            </p>
         
        </div>
    </form> : null

    }

    </MainLayout>
  
  )
}

export default UpdateTrip