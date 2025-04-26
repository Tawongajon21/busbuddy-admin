import React from 'react'

import { useState,useEffect } from 'react'
import imageThree from "../images/sun.jpg"
import imageOne from "../images/photofour.jpg" 
import imageTwo from "../images/sun2.jpg" 
import imageFour from "../images/sky2.jpg"
import imageFive from "../images/dragon.jpg"
import imageSeven from "../images/photo4.jpg"
import imageSix from "../images/photo1.jpg"
import bookingPhoto from "../images/phototwo.jpg"
import Heading from './heading'
import Trips from './Trips'
import Layout from './Layout'
import MainLayout from './MainLayout'
import { Link } from 'react-router-dom'
import CompanyNameModal from './CompanyNameModal'
import CompaniesData from './companyData'
function AdvertPage({data}) {
const [words, setwords] = useState(["ready for work","ready to roar"])
const [currentIndex,setCurrentIndex]=useState(0);
const {getCompaniesloading,getCompaniesData,getCompaniesError} =CompaniesData();



useEffect(()=>{
const intervalId=setInterval(()=>{
    setCurrentIndex((currentIndex+1)%words.length)
},2000)
return ()=>{
    clearInterval(intervalId)
}
},[words,currentIndex,data])

let user=data ? data : null
let userType=data?.role;

console.log(user);
let currentUser=user === null ? null : undefined ? null : userType!=="companyOwner" ? null :  getCompaniesData?.filter((item)=>item.companyOwner===user?._id)  
let company=getCompaniesData
console.log(currentUser);


  return (
<MainLayout>

{
currentUser === null ? null : undefined ? null :  currentUser?.length   > 0 ?   null : <CompanyNameModal/>

  
}
   



<section className='advert-section'>
    <h1>
    Your workspace is <span className='distinct-text'>{words[currentIndex]}</span> 
    </h1>
   
</section>
{
    user?.role === "companyOwner" ? <div className="selection-options">
  



    <Link  to='/admins' className='selection-option'>
       <main className="selection-text">
        <h3>
           Admins
        </h3>
       </main>
       <div className="selection-image">
        <img src={imageFive} className='image-selection-option' alt="image-selection-option" />
       </div>
    </Link>
    <Link to='/drivers' className='selection-option'>
       <main className="selection-text">
        <h3>
            Drivers
        </h3>
       </main>
       <div className="selection-image">
        <img src={imageSix} className='image-selection-option' alt="image-selection-option" />
       </div>
    </Link>
    <Link to='/conductors' className='selection-option'>
       <main className="selection-text">
        <h3>
      Conductors
        </h3>
       </main>
       <div className="selection-image">
        <img src={imageSeven} className='image-selection-option' alt="image-selection-option" />
       </div>
    </Link>
    <Link to='/trips' className='selection-option'>
       <main className="selection-text">
        <h3>
     Trips
        </h3>
       </main>
       <div className="selection-image">
        <img src={imageSeven} className='image-selection-option' alt="image-selection-option" />
       </div>
    </Link>


  
</div> 
:
 user?.role === "Admin" ? <div className="selection-options">
  




 <Link to='/drivers' className='selection-option'>
    <main className="selection-text">
     <h3>
         Drivers
     </h3>
    </main>
    <div className="selection-image">
     <img src={imageSix} className='image-selection-option' alt="image-selection-option" />
    </div>
 </Link>
 <Link to='/conductors' className='selection-option'>
    <main className="selection-text">
     <h3>
   Conductors
     </h3>
    </main>
    <div className="selection-image">
     <img src={imageSeven} className='image-selection-option' alt="image-selection-option" />
    </div>
 </Link>
 <Link to='/trips' className='selection-option'>
    <main className="selection-text">
     <h3>
  Trips
     </h3>
    </main>
    <div className="selection-image">
     <img src={imageSeven} className='image-selection-option' alt="image-selection-option" />
    </div>
 </Link>



</div> 
: 
user?.role === "driver"  ? 
<div className="selection-options">
  





<Link to='/drivers-page' className='selection-option'>
   <main className="selection-text">
    <h3>
        My 
 Trips
    </h3>
   </main>
   <div className="selection-image">
    <img src={imageSeven} className='image-selection-option' alt="image-selection-option" />
   </div>
</Link>



</div>  
:
user?.role === "conductor"  ? 
  <div className="selection-options">
  





<Link to='/conductors-page' className='selection-option'>
   <main className="selection-text">
    <h3>
        My 
 Trips
    </h3>
   </main>
   <div className="selection-image">
    <img src={imageSeven} className='image-selection-option' alt="image-selection-option" />
   </div>
</Link>



</div>    :
 <div className="selection-options">
  






 
 </div> 
}

<div className="download-options">
    <header className='download-options-header'>
<h3>
    We also have mobile application for both android and iOs
</h3>
    </header>

    <div className="download">
        <p>
            <a href="">Android</a>
        </p>
        <p>
            <a href="">iOS</a>
        </p>
    </div>
</div>
<div className="testimonials-container">
<header id="testimonial-header"className='download-options-header'>
<h3>
  Testimonials
</h3>
    </header>
<section className="testimonials">
    <div className="testimony">
       
        <img  className='testimony-image' src={imageThree} />
      
        <div className="testimony-text">
            <p className='testimony-name'>
<b>John Doe</b>
            </p>
            <p className="testimony-content">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Nulla non doloribus minus. Ullam, vero voluptatum?
            </p>
        </div>
      
    </div>
    <div className="testimony">
        <div className="testimony-img-div">
        <img  className='testimony-image' src={imageThree} />
        </div>
        <div className="testimony-text">
            <p className='testimony-name'>
<b>John Doe</b>
            </p>
            <p className="testimony-content">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Nulla non doloribus minus. Ullam, vero voluptatum?
            </p>
        </div>
      
    </div>
    <div className="testimony">
        <div className="testimony-img-div">
        <img  className='testimony-image' src={imageThree} />
        </div>
        <div className="testimony-text">
            <p className='testimony-name'>
<b>John Doe</b>
            </p>
            <p className="testimony-content">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Nulla non doloribus minus. Ullam, vero voluptatum?
            </p>
        </div>
      
    </div>
    <div className="testimony">
        <div className="testimony-img-div">
        <img  className='testimony-image' src={imageThree} />
        </div>
        <div className="testimony-text">
            <p className='testimony-name'>
<b>John Doe</b>
            </p>
            <p className="testimony-content">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Nulla non doloribus minus. Ullam, vero voluptatum?
            </p>
        </div>
      
    </div>
    <div className="testimony">
        <div className="testimony-img-div">
        <img  className='testimony-image' src={imageThree} />
        </div>
        <div className="testimony-text">
            <p className='testimony-name'>
<b>John Doe</b>
            </p>
            <p className="testimony-content">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Nulla non doloribus minus. Ullam, vero voluptatum?
            </p>
        </div>
      
    </div>
    <div className="testimony">
        <div className="testimony-img-div">
        <img  className='testimony-image' src={imageThree} />
        </div>
        <div className="testimony-text">
            <p className='testimony-name'>
<b>John Doe</b>
            </p>
            <p className="testimony-content">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Nulla non doloribus minus. Ullam, vero voluptatum?
            </p>
        </div>
      
    </div>

</section>
</div>

</MainLayout>
 
  )
}

export default AdvertPage

{
    /**     <div className='advert-page'>
<section className="advert-header">
    <h2>
        Book buses easy and fast with <span className='advert-brand'>busbuddy.</span>
    </h2>
</section>
<div className="advert-image-div">
    <img className='advert-image' src={currentImage} alt="Advert image" />
</div>

    </div>
    <Trips/> */
}