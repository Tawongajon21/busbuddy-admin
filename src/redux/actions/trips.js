
import {EDIT_TRIP_SUCCESS,EDIT_TRIP_REQUEST,EDIT_TRIP_FAIL,GET_PASSENGERS_SUCCESS,GET_PASSENGERS_REQUEST,GET_PASSENGERS_FAIL,DELETE_TRIP_SUCCESS,DELETE_TRIP_REQUEST,DELETE_TRIP_FAIL,CANCEL_TRIP_SUCCESS,CANCEL_TRIP_REQUEST,CANCEL_TRIP_FAIL,GET_USER_TRIP_SUCCESS,GET_USER_TRIP_REQUEST,GET_USER_TRIP_FAIL,GET_TRIPS_FAIL,GET_TRIPS_REQUEST,GET_TRIPS_SUCCESS,GET_TRIP_FAIL,GET_TRIP_REQUEST,GET_TRIP_SUCCESS,ADD_PASSENGER_FAIL,ADD_PASSENGER_REQUEST,ADD_PASSENGER_SUCCESS,ADD_TRIP_FAIL,ADD_TRIP_REQUEST,ADD_TRIP_SUCCESS} from "../constants/trips"
import axios from "axios";
import { baseUrl } from "./baseUrl";



export const gettrips =()=>async(dispatch,getState)=>{
  
   
    dispatch({
        type:GET_TRIPS_REQUEST
    });
 
  
   

  
    
    try {
      const temporaryData  =  (await axios.get(`${baseUrl}trip/get-trips`)).data
      let data =temporaryData.reduce((acc,item)=>{
        let key=`${item.from} - ${item.to}`
        if(!acc[key]){
            acc[key]=[];
        }
        acc[key].push(item)
        return acc
    },{}) 

      
         
    
     

   
          
dispatch({type:GET_TRIPS_SUCCESS,payload:data});
     } catch (error) {
      
    const message=  error
  
        dispatch({type:GET_TRIPS_FAIL,payload:message})
}

   
}


export const gettrip =(id)=>async(dispatch,getState)=>{
  
   
    dispatch({
        type:GET_TRIP_REQUEST
    });
 
  
   

console.log(id);
    
    try {
      const {data}  =  await axios.get(`${baseUrl}trip/get-trip/${id}`)
      
      
         console.log(data);
    
     

   
          
dispatch({type:GET_TRIP_SUCCESS,payload:data});
     } catch (error) {
      
    const message=  error
  
        dispatch({type:GET_TRIP_FAIL,payload:message})
}

   
}


export const addpassenger=( name,surname,phone,email,dropOffArea,bus,busfare,seatNumber,nextOfKinContactDetails,tripId,idNumber,idType,noOfBags,paymentMethod)=>async(dispatch,getState)=>{
    dispatch({
        type:ADD_PASSENGER_REQUEST
    });

 
    const {
        userLogin: { userInfo },
      } = getState();
    console.log(userInfo);


    
    try {
      const {data}  =  await axios.post(`${baseUrl}trip/add-passenger/${tripId}`,{name,surname,phone,email,dropOffArea,bus,busfare,seatNumber,nextOfKinContactDetails,tripId,idNumber,idType,noOfBags,paymentMethod},{headers:{        
         
          
        "Authorization":`Bearer ${userInfo.signature}`
}})
      
      
         console.log(data);
    
     

   
          
dispatch({type:ADD_PASSENGER_SUCCESS,payload:data});
     } catch (error) {

        dispatch({type:ADD_PASSENGER_FAIL,payload:error.response.data.msg})
}

}

export const getusertrips=()=>async(dispatch,getState)=>{
  
   
    dispatch({
        type:GET_USER_TRIP_REQUEST
    });
    const {
        userLogin: { userInfo },
      } = getState();
  
   


    
    try {
      const {data}  =  await axios.get(`${baseUrl}trip/get-user-trips`,{
        headers:{  
          
         
          
            "Authorization":`Bearer ${userInfo.signature}`
    }
      })
      
      
         console.log(data);
    
     

   
          
dispatch({type:GET_USER_TRIP_SUCCESS,payload:data});
     } catch (error) {
      
    const message=  error
  
        dispatch({type:GET_USER_TRIP_FAIL,payload:message})
}

   
 
}
export const cancelusertrips=(id)=>async(dispatch,getState)=>{
  
   
    dispatch({
        type:CANCEL_TRIP_REQUEST
    });
    const {
        userLogin: { userInfo },
      } = getState();
  
   


    
    try { 
      const {data}  =  await axios.delete(`${baseUrl}trip/cancel-trip/${id}`,{
        headers:{  
          
         
          
            "Authorization":`Bearer ${userInfo.signature}`
    }
      })
      
      
      
    
     

   
          
dispatch({type:CANCEL_TRIP_SUCCESS,payload:data});
     } catch (error) {
      
    const message=  error
  
        dispatch({type:CANCEL_TRIP_FAIL,payload:message})
}

   
 
}


export const createtrip=(to,from,departure,arrival,busfare,capacity,bus,dropOffAreas,driver,company,conductor,signature)=>async(dispatch)=>{

try {

      dispatch({ type:ADD_TRIP_REQUEST ,payload: {to,from,departure,arrival,busfare,capacity,dropOffAreas,bus,driver,company,conductor,driver} });

  
    const {data}  = await axios.post(`${baseUrl}trip/add-trip`, {to,from,departure,arrival,busfare,capacity,dropOffAreas,bus,driver,company,conductor,driver} ,
    {
      headers:{  
        
       
        
        "Authorization":`Bearer ${signature}`
}
    }
    
       
  
   ) 
  console.log(data);
      dispatch({ type:ADD_TRIP_SUCCESS, payload: data,success:true });
    
  } catch (error) {

    dispatch({ type: ADD_TRIP_FAIL, payload: error.message });
  }

}

export const updatetrip=(to,from,departure,arrival,busfare,capacity,busId,dropOffAreas,id)=>async(dispatch,getState)=>{

try {
  let trip={to,from,departure,arrival,busfare,capacity,busId,dropOffAreas}
      dispatch({ type:EDIT_TRIP_REQUEST ,payload: trip });
    const {
      userLogin: { userInfo },
    } = getState();
  
  
    const {data}  = await axios.patch(`${baseUrl}trip/update-trip/${id}`, {to,from,departure,arrival,busfare,capacity,busId,dropOffAreas} ,
    {
      headers:{  
        
       
        
        "Authorization":`Bearer ${userInfo.signature}`
}
    }
    
       
  
   ) 
  console.log(data);
      dispatch({ type:EDIT_TRIP_SUCCESS, payload: data,success:true });
    
  } catch (error) {

    dispatch({ type: EDIT_TRIP_FAIL, payload: error.message });
  }

}

export const deletetrip=(id,signature)=>async(dispatch,getState)=>{
  
   
  dispatch({
      type:DELETE_TRIP_REQUEST
  });



  
  try { 
    const {data}  =  await axios.delete(`${baseUrl}trip/delete-trip/${id}`,{
      headers:{  
        
       
        
          "Authorization":`Bearer ${signature}`
  }
    })
    
    
    
  
   

 
        
dispatch({type:DELETE_TRIP_SUCCESS,payload:data});

   } catch (error) {
    
  const message=  error

      dispatch({type:DELETE_TRIP_FAIL,payload:message})
}

 

}


export const getpassengers =(signature,id)=>async(dispatch,getState)=>{
  


  dispatch({
      type:GET_PASSENGERS_REQUEST
  });


 


  try {
    const {data}  =  await axios.get(`${baseUrl}passenger/get-passengers/${id}`,
    {
      headers:{
        Authorization:`Bearer ${signature}`
      }
    }
    )
    
    
        
dispatch({type:GET_PASSENGERS_SUCCESS,payload:data});
   } catch (error) {
    
  const message=  error

      dispatch({type:GET_PASSENGERS_FAIL,payload:message})
}

 
}