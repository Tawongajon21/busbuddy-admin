import React from 'react'
import MainLayout from './MainLayout'
import Pathway from './pathway'
import { Link } from 'react-router-dom'
import { useState,useEffect } from 'react'
import debounce from "lodash.debounce"
import { useDispatch,useSelector } from 'react-redux'
import { getbuses,addbus } from '../redux/actions/bus-actions'
import FormLoading from './FormLoading'
import {baseUrlFrontend} from "../frontend-url"
import { createtrip } from '../redux/actions/trips'

function AddBus() {
 
   
    const [busName, setBusName] = useState("")
    const [company, setcompany] = useState("")
    const [registrationNumber, setregistrationnumber] = useState("")
    const [images, setImages] = useState([])
    const [imagesUrl, setImagesUrl] = useState([])
  
    const [errorMessage, setErrorMessage] = useState("")
    const [capacity, setcapacity] = useState(0)
    const [suggestedItems, setsuggestedItems] = useState([])
    const [selectedItems, setselectedItems] = useState([])

 
    function imageHandler(e) {
        setImages([...images,e.target.files[0]])
        setImagesUrl((urlList)=>[
            ...urlList,
            URL.createObjectURL(e.target.files[0])
        ])
    
    }

    function deleteFile(e) {
        const s= images.filter((item,index)=>index!==e)
        const d= imagesUrl.filter((item,index)=>index!==e)
        setImages(s);
        setImagesUrl(d);
       
    }


const handleRemoveItem=(item)=>{
   
    setselectedItems((prevItems)=>prevItems.filter((i)=>i.id!==item.id))
}


const dispatch=useDispatch()
const buses=useSelector((state)=>state.getBuses)
const addTrip=useSelector((state)=>state.addTrip)
const addBus=useSelector((state)=>state.addBus)
let {loading,error,data}=buses
console.log(buses);
useEffect(() => {
    console.clear();
    images.length&& console.log(images)
    imagesUrl.length&& console.log(imagesUrl)
    
    }, [images,imagesUrl])


  
function submit() {
    let inputData={busName,company,capacity,registrationNumber,images}
    dispatch(addbus(inputData))
 
}

  


useEffect(() => {
if (addBus.data) {
    setTimeout(()=>{
        window.location.replace(`${baseUrlFrontend}/buses`)
     // navigate("/bookings")
       
      
          },1500)
   
      
}

}, [addBus.data])


  return (
    <MainLayout>
   <header id='add-trip' className="book-ticket-search-header">

   <div className='add-trip-div'>

   
     <p className="inside-pathway">
         <Link to="/">Home </Link>{'>'}<Link to="/trips">Trips</Link>{'>'}<span className='path-color'>Add Trip </span>
    </p>
   
    </div>

    <h3 className='h3-heading'>
                Add Bus Here
            </h3>
    
</header>
<p>
        {
            addBus.loading ? <FormLoading/> : addBus.error ? 
            <p className='form-error'>
            {addBus.error}
                            </p> :
            addBus.success &&  <p id='form-success' className='form-error'>
            You have successfully added the bus,you will be redirected to the buses page.
                            </p>
        }
    </p>
<form className="add-item-form">
  
    <div className="add-item-right">
        <p className="add-item-input-p">
            <label htmlFor="">Bus Name    </label>
            <input value={busName} onChange={(e)=>setBusName(e.target.value)} type="text" className='add-item-input' />
        </p>
     
        <p className="add-item-input-p">
            <label htmlFor="">Company Name</label>
            <input onChange={(e)=>setcompany(e.target.value)} type="text" className='add-item-input' />
        </p>
      
    </div>
    <div className="add-item-left">
  
        <p className="add-item-input-p">
            <label htmlFor="">Capacity</label>
            <input onChange={(e)=>setcapacity(e.target.value)} value={capacity} type="text" className='add-item-input' />
        </p>
        <p className="add-item-input-p">
            <label htmlFor="">Registration Number</label>
            <input onChange={(e)=>setregistrationnumber(e.target.value)} value={registrationNumber} type="text" className='add-item-input' />
        </p>
        <p id='image-input' className="add-item-input-p">
            <label htmlFor="">Select Image</label>
            <input id='image-input' onChange={imageHandler}  type="file" className='add-item-input' />
        </p>

     
    </div>
</form>
<div className="image-display">
    {
        imagesUrl.length > 0 &&(
            imagesUrl.map((item,index)=>{
                <div>
                <a href="#" class="d-flex">
                <img src={item} width="100%" height="100%" class="card-img-top"/>
                </a>
            <button onClick={()=>deleteFile(index)} style={{
                position:"absolute",background:"black",color:"white",top:"-10px",right:"-12px",borderRadius:"100%"
            
            }}>
                x
            </button>
            </div>
            })
        )
    }
</div>
<div id='add-bus-btn' className="div-add-trip">

<button onClick={()=>submit()} className='add-trip-btn'>Add Trip</button>

</div>
    </MainLayout>
  
  )
}

export default AddBus