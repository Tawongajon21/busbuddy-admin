import React from 'react'
import MainLayout from './MainLayout'
import { Link,useParams } from 'react-router-dom'
import { useSelector,useDispatch } from 'react-redux';
import { getadmin ,updateadmin} from '../redux/actions/admin';
import { useEffect,useState } from 'react';
import imageOne from "../images/1.png"
import imageTwo from "../images/5.png"
import imageThree from "../images/6.png"
import FormLoading from './FormLoading';
import ErrorPage from './ErrorPage';
function Admin({data:companyOwnerInfo}) {
    const [formData, setformData] = useState({})
    const [errorMessage, setErrorMessage] = useState("")
    let id=useParams().id;
    const [modal,setModal]=useState(false);
let signature=companyOwnerInfo?.signature
    const dispatch=useDispatch();
    const admin=useSelector((state)=>state.getAdmin);
    const updateAdmin=useSelector((state)=>state.updateAdmin);
    console.log(updateAdmin);
    const {loading,error,data}=admin
    useEffect(() => {
dispatch(getadmin(id,signature))
setformData(data)
    },[dispatch,getadmin])
    console.log(admin);
    const handleChange=(event)=>{
        setformData({...formData,[event.target.name]:event.target.value})
    }
    function modalfunction() {
        setModal(!modal)
    }
    useEffect(() => {
       if (updateAdmin.data) {
        console.log("hello world");
       }
      
        }, [updateAdmin,dispatch])

        function onSubmit() {
            dispatch(updateadmin(formData.email,formData.phone,formData.name,formData.surname,id,signature))
            
if (updateAdmin.error) {
   
    setErrorMessage(updateAdmin.error)
    setTimeout(()=>{
        setErrorMessage('')
    },3000)
}
else if(updateAdmin.success){
window.location.reload()
}
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
            <Link to="/">Home </Link>{'>'}<Link to="/admins">Admins </Link>  {'>'}  <span className='path-color'> 
            {
                loading ? "Loading..." : error ? "error" : data? `${data.name} ${data.surname} ` : "Admin"
            }
             </span> 
            </p>


</p>


         </header>
         <div className="single-trip-layout">
    {
   
  loading ? <div className='data-loading'><FormLoading/></div>  : error ? "error" :  data ?
   <div>






<div className='singe-trip'>

<div className="details-image-component">

<img src={imageOne}  className={"details-image"}/>




</div>



<div class="details-info">
<ul>
<li>
   <h4>
     Admin name : {data.name}
   </h4>
</li>
<li>
   <h4>
   Admin surname: {data.surname}
   </h4>
</li>
<li>
   <h4>
      Admin Email:  {data.email}
   </h4>
</li>
<li>
   <h4>
     Admin Phone Number:  {data.phone}
   </h4>
</li>
<li>
    <button onClick={ ()=>modalfunction() } id="open-modal-button">
        Edit
    </button>
</li>



</ul>

</div>






</div>
   
   </div>
:
null

}
{
modal &&  <div class="modal" id="myModal">
  
<div class="modal-content">

   <span onClick={()=>modalfunction()} id="closeModalBtn" class="close">
&times;
   </span>


{
  

            <>
            <h3>
                        Update Admin Details
                      </h3>


{
    updateAdmin.loading ? <FormLoading/> :
    updateAdmin.error ?  <p className='form-error'>
    {errorMessage}
                    </p> : null
}
          <div class="booking-form">
                      <div class="booking-left">
                          <p class="booking-p">
                              <label for="">Name</label>
                              <input
                               required 
                               name='name'
                                value={formData.name}
                                 onChange={handleChange}
                                  class="booking-input"
                                   type="text"/>
                          </p>
                          <p class="booking-p">
                              <label for="">Surname</label>
                              <input
                               required
                                name='surname' 
                              
                                value={formData.surname}
                                 onChange={handleChange}
                                  class="booking-input" type="text"/>
                          </p>
                       
                     
                      
                      </div>
                      <div className="booking-right">
                      <p class="booking-p">
                              <label for="">Contact Details</label>
                              <input required
                               name='phone' 
                             
                              
                               value={formData.phone}
                                onChange={handleChange}
                                 class="booking-input" type="text"/>
                          </p>
                          <p class="booking-p">
                              <label for="">Email Address</label>
                              <input required
                               name='email' 
                             
                              
                               value={formData.email}
                                onChange={handleChange}
                                 class="booking-input" type="text"/>
                          </p>
                      </div>
                   
                  
                      </div>
                     
                      <div style={{width:"100%",display:"grid",justifyContent:"center"}} className="button-div">
                        <button onClick={onSubmit}>
                            Update
                        </button>
                      </div>
        </>
     
    
}








</div>
</div>
}
    </div>

    </MainLayout>
  )
}

export default Admin