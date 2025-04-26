import React from 'react'
import imageOne from "../images/car-bg.png"
import StepOne from './StepOne'
import StepTwo from "./StepTwo"
import StepThree from "./StepThree"
import StepFour from "./StepFour"
import PaymentMethod from "./PaymentMethod"
import NotRegistered from './NotRegistered'
import { useState,useEffect,useRef ,useCallback} from 'react'
import Layout from './Layout'
import { Link } from 'react-router-dom'
import { useNavigate ,useLocation} from 'react-router-dom'
import Pathway from './pathway'
import MainLayout from './MainLayout'
import { useParams } from 'react-router-dom'
import { buses } from './data'
import { useDispatch,useSelector } from 'react-redux'
import { gettrips,gettrip,getpassengers } from '../redux/actions/trips';
import {getbuses} from "../redux/actions/bus-actions"
import FormLoading from './FormLoading';
import {addpassenger} from "../redux/actions/trips"
import {getdrivers,getconductors} from "../redux/actions/admin"
import styles from "./styles.css"
import ImageLoader from './ImageLoader'
import PassengersBooked from './PassengersBooked'
function SingleTrip({data:Info}) {
let location=useLocation()
let userLogin=useSelector((state)=>state.userLogin)
let {userInfo}=userLogin;

    console.log(userInfo);
    let authenticated=userInfo ? true : false ;
  const [isUserAuthenticated, setisUserAuthenticated] = useState(authenticated);
  const [formData, setformData] = useState({})
 
    const [formNumber, setformNumber] = useState(0)
    const [paymentMethod, setPaymentMethod] = useState("")


    const id= useParams().id;
    let tripId=id;
    const trips=useSelector((state)=>state.getTrip);
    const passengers=useSelector((state)=>state.getPassengers);
    const addPassenger=useSelector((state)=>state.addPassenger);
    const buses=useSelector((state)=>state.getBuses);
    const conductors=useSelector((state)=>state.getConductors);
    const drivers=useSelector((state)=>state.getDrivers);
    console.log(addPassenger);
    let {loading,error,data}=trips
    console.log(trips)
    const [seatNumber, setseatNumber] = useState(0)
    const [occupied, setoccupied] = useState(false)
    const [selectedValue, setselectedValue] = useState(1)
   let navigate=useNavigate()

  
    

    

   let previousLocation=location.state?.from
   console.log(previousLocation);
  

    const dispatch=useDispatch();

let signature=Info.signature

    useEffect(() => {
      dispatch(gettrip(id))
      dispatch(getpassengers(signature,id))
      dispatch(getconductors(signature))
      dispatch(getdrivers(signature))
      dispatch(getbuses())

      setformData(data)
    
      }, [gettrip,userInfo,getpassengers])
      const [selectedbox, setselectedbox] = useState([])
      const [selectedSeats, setselectedSeats] = useState([])

      function selectSeat(e,index,data) {
        let isSelected=selectedbox.includes(index)
        let boxText=data[index].seatNumber;
        if (isSelected) {
            setselectedbox(selectedbox.filter((i)=>i!==index))
          setselectedSeats(selectedSeats.filter((text)=>text!==boxText))

        }else{
            setselectedbox([...selectedbox,index])
            setselectedSeats([...selectedSeats,boxText])

        }
        let seat=e.target.innerText;
        setseatNumber(seat)
       
console.log(selectedSeats[index]);

      }

  console.log(buses);
     
//let data=buses.find((item)=>item.id===id);



console.log(formData)
    



    const [currentIndex,setCurrentIndex]=useState(0);
    const [progress,setProgress]=useState(0);

    const [modal,setModal]=useState(false);
    function handleNext() {

    //    setCurrentIndex(currentIndex+1)
        
      setstep(step+1)

    }
    function handlePrevious() {
    //    setCurrentIndex((currentIndex-1))
        setstep(step-1)
    }
    function modalfunction() {
        setModal(!modal)
    }
console.log(formNumber);






const [step, setstep] = useState(1)

const [numberOfPeople, setnumberOfPeople] = useState("1")
const [people, setpeople] = useState([
    {
        id:1,
        name:'',
        surname:'',
        phone:'',
        idType:'',
        email:'',
        noOfBags:'',
        nextOfKinContactDetails:'',
        idNumber:'',
        dropOffArea:'',
        busfare:'',
        seatNumber:''
      

    }
])


const handleNumPeopleChange=(e)=>{
  setnumberOfPeople(parseInt(e.target.value))
  let newPeople=Array.from({length:parseInt(e.target.value)},(_,i)=>({
id:i+1,
name:'',
surname:'',
phone:'',
idType:'',
email:'',
noOfBags:'',
nextOfKinContactDetails:'',
idNumber:'',
dropOffArea:'',
paymentMethod
  }))
  setpeople(newPeople)

}


const handleGuestInfoChange=(e,index)=>{
    const newPeople=[...people];
    newPeople[index][e.target.name]=e.target.value;
    setpeople(newPeople)
}
const handleChange=(event)=>{
    setformData({...formData,[event.target.name]:event.target.value})
}

if (selectedSeats.length!==0) {
    for(let i=0;i<people.length;++i){
        console.log(people);
        people[i].seatNumber=selectedSeats[i]
        }
}
let paid=paymentMethod === "Ecocash" ?  true : paymentMethod=== "Bank Transfer" ?  true :  false;

function handleSubmit(e) {
e.preventDefault()
    console.log("hello");
let newPeople=people.map((item)=>({
    ...item,
    paid,
    paymentMethod
}));
for(let i=0;i<newPeople.length;++i){
    if (newPeople[i].name==="" || newPeople[i].surname===""|| newPeople[i].phone ==="" || newPeople[i].email===""||newPeople[i].dropOffArea===""||newPeople[i].busfare===""||newPeople[i].seatNumber===""||newPeople[i].nextOfKinContactDetails===""||newPeople[i].idNumber===""||newPeople[i].noOfBags===""||paymentMethod==="") {
        alert("There are form fields that you did not fill in")
    }else{
        dispatch(addpassenger(newPeople[i].name,newPeople[i].surname,newPeople[i].phone,newPeople[i].email,newPeople[i].dropOffArea,data.bus[0]._id,newPeople[i].busfare,newPeople[i].seatNumber,newPeople[i].nextOfKinContactDetails,tripId,newPeople[i].idType,newPeople[i].idNumber,newPeople[i].noOfBags,paymentMethod))

    }
   
}
//

   // name,surname,phone,email,dropOffArea,bus,busfare,seatNumber,nextOfKinNumber,tripId:id,idNumber,idType,noOfBags,paid,paymentMethod
}
const [activeTab,setActiveTab] = useState('tab1')


  return (
    <MainLayout>
            <header className="book-ticket-search-header">

<div className='single-trip-pathway'>
{
trips.loading ? <div className='data-loading'><FormLoading/></div>  : trips.error ? "error" :  data ?
<p id='single-trip-nav' className="inside-pathway">
<Link to="/">Home </Link>{'>'} <Link to="/trips"> Trips</Link> {'>'} {data.from} - {data.to} <span className='path-color'> {'>'} {data.bus[0].company} {data.bus[0].busName} </span> 
</p> : null
}


</div>




</header>

<section className='tabbed-views-container' >
  
        <div  id='p-tab' className={activeTab==='tab1' ? 'tab active' : 'tab'} onClick={(e)=>setActiveTab('tab1')}>
         <p  className={activeTab==='tab1' ? "active-text" :"tab-text"}>
         Trip Details
         </p>
           
          
          
        </div>
 
        <div id='p-tab' onClick={(e)=>setActiveTab('tab2')} className={activeTab==='tab2' ? 'tab active' : 'tab'}>
            <p   className={activeTab==='tab2' ? "active-text" :"tab-text"}>
            Booked Passengers
            </p>
         
        </div>
   
</section>
{
    activeTab==='tab1' ?  <div className="single-trip-layout">
    {
   
   trips.loading ? <div className='data-loading'><FormLoading/></div>  : trips.error ? "error" :  data ?
   <div>






<div className='singe-trip'>

<div className="details-image-component">
{
    data.bus[0].images.map((item)=>(
<ImageLoader  item={item}  className={"details-image"}/>
    ))
}



</div>



<div class="details-info">
<ul>
<li>
   <h4>
      Bus name : {data.bus[0].company} {data.bus[0].busName}
   </h4>
</li>
<li>
   <h4>
      Route: {data.from} to  {data.to} 
   </h4>
</li>
<li>
   <h4>
      Date of departure:  {data.departure}
   </h4>
</li>
<li>
   <h4>
     Expected date of arrival:  {data.arrival}
   </h4>
</li>
<li>
   <h4>
       Bus capacity : {data.capacity}
   </h4>
</li>
<li>
   <h4>
       Seats booked : {data.passengers.length}
   </h4>
</li>
<li>
   <h4>
     Bus fare: ${data.busfare}
   </h4>
</li>


</ul>

</div>






</div>
   
   </div>



:
null

}
    </div> : <PassengersBooked passengers={passengers}/>
}
        
  
{
modal &&  <div class="modal" id="myModal">
  
<div class="modal-content">
    <div className="modal-progress">
       
    
   </div>
   <span onClick={()=>modalfunction()} id="closeModalBtn" class="close">
&times;
   </span>




            <>
            <h3>
                      Update The Trip
                      </h3>
          <div class="booking-form">
                      <div class="booking-left">
                          <p class="booking-p">
                              <label for="">From</label>
                              <input required name='from' value={formData?.from}   onChange={handleChange}  class="booking-input" type="text"/>
                          </p>
                          <p class="booking-p">
                              <label for="">To</label>
                              <input required name='to' value={formData?.to}   onChange={handleChange} class="booking-input" type="text"/>
                          </p>
                          <p class="booking-p">
                              <label for="">Bus </label>
                              <select required  onChange={handleChange} class="booking-input" name="idType" id="">
                                  <option value={formData?.bus[0].busName}>{formData?.bus[0].busName}</option>
{
    buses.loading ? "loading" : buses.error? "error" 
    : buses.data?.map((item)=>(
        <option value={item._id}>{item.busName} {item.registrationNumber}</option>
    ))
}

                              
                            
                              </select>
                          </p>
                          <p class="booking-p">
                              <label for="">Bus Capacity</label>
                              <input  onChange={handleChange} required name='capacity' value={formData?.capacity} class="booking-input" type="text"/>
                          </p>
                          <p class="booking-p">
                              <label for="">Departure</label>
                              <input required name='departure'  onChange={handleChange} value={formData?.departure} class="booking-input" type="datetime-local"/>
                          </p>
                          <p class="booking-p">
                              <label for="">Arrival</label>
                              <input required name='departure'  onChange={handleChange} value={formData?.arrival} class="booking-input" type='datetime-local' />

                          </p>
                        
                      
                      </div>
                      <div class="booking-right">
                      <p class="booking-p">
                              <label for="">Bus fare</label>
                              <input required name='busfare'   onChange={handleChange} value={formData?.busfare} class="booking-input" type='text' />

                          </p>
                          <p class="booking-p">
                              <label for="">Bus driver </label>
                              <select required  onChange={handleChange} class="booking-input" name="driver" id="">
                                  <option value={formData?.driver}>{formData?.driver.name}</option>
                                  {
    drivers.loading ? "loading" : drivers.error? "error" 
    : drivers.data?.map((item)=>(
        <option value={item._id}>{item.name} {item.surname}</option>
    ))
}
                              </select>
                          </p>
                          <p class="booking-p">
                              <label for="">Bus conductor </label>
                              <select required  name="conductor" onChange={handleChange} class="booking-input"  id="">
                                  <option value={formData?.conductor}>{formData?.conductor.name}</option>
                                  {
   conductors.loading ? "loading" : conductors.error? "error" 
    : conductors.data?.map((item)=>(
        <option value={item._id}>{item.name} {item.surname}</option>
    ))
}
                              </select>
                          </p>
                     
                      </div>
                      </div>
                      <div style={{width:"100%",display:"grid",justifyContent:"center"}} className="button-div">
                        <button >
                            Update
                        </button>
                      </div>
                     
        </>
        
    














</div>
</div>
}
       



</MainLayout>
 
  )
}

export default SingleTrip