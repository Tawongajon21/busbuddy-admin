import { ADD_PRODUCT_REQUEST,ADD_PRODUCT_SUCCESS,ADD_PRODUCT_FAIL,GET_PRODUCTS_REQUEST,GET_PRODUCTS_SUCCESS,GET_PRODUCT_FAIL,GET_PRODUCTS_FAIL,GET_PRODUCT_SUCCESS ,GET_PRODUCT_REQUEST,UPDATE_PRODUCT_REQUEST,UPDATE_PRODUCT_SUCCESS,UPDATE_PRODUCT_FAIL,DELETE_PRODUCT_REQUEST,DELETE_PRODUCT_FAIL,DELETE_PRODUCT_SUCCESS} from "../constants/products";
import axios from "axios";
import { baseUrl } from "./baseUrl";


 

export const getproducts =()=>async(dispatch,getState)=>{

      dispatch({
          type:GET_PRODUCTS_REQUEST
      });
   
  
      try {
        const {data}  = await axios.get(`${baseUrl}product/get-products`)  
           
      
      
   
     
            
  dispatch({type:GET_PRODUCTS_SUCCESS,payload:data});
       } catch (error) {
        
      const message=  error
   
          dispatch({type:GET_PRODUCTS_FAIL,payload:message})
  }
  
     
  }
export const getproduct =(id)=>async(dispatch,getState)=>{
 
      dispatch({
          type:GET_PRODUCT_REQUEST
      });
   
  
      try {
        const {data}  = await axios.get(`${baseUrl}product/get-product/${id}`)      
           
      
      
   
     
            
  dispatch({type:GET_PRODUCT_SUCCESS,payload:data});
       } catch (error) {
      const message=  error.response&& error.response.data.message
          ? error.response.data.message
          : error.message
          dispatch({type:GET_PRODUCT_FAIL,payload:message})
  }
  
     
  }
  export const createproduct = ( name,brand,model,sellingPrice,buyingPrice,barcode,quantityBought,quantitySold,year,productDescription,showOnEcommerce,images,signature) => async (dispatch, getState) => {

    console.log(name);
    try {
      let product={name,brand,model,sellingPrice,buyingPrice,barcode,quantityBought,quantitySold,year,productDescription,showOnEcommerce};
          dispatch({ type: ADD_PRODUCT_REQUEST ,payload: product });
        const {
          shopOwnerSignin: { shopOwnerInfo },
        } = getState();
     
      
        const {data}  = await axios.post(`${baseUrl}product/create-product`, {name: name.name,brand:name.brand,model:name.model,sellingPrice:name.sellingPrice,buyingPrice:name.buyingPrice,barcode:name.barcode,quantityBought:name.quantityBought,quantitySold:name.quantitySold,year:name.year,productDescription:name.productDescription,showOnEcommerce:name.showOnEcommerce,images:name.images} ,
   
        {
          headers:{  
            
           
            
            "Authorization":`Bearer ${name.signature}`,
            "Content-Type":"multipart/form-data"
    }
        }
        
           
      
       ) 
       console.log(data)
          dispatch({ type:ADD_PRODUCT_SUCCESS, payload: data });
        
      } catch (error) {
        dispatch({ type: ADD_PRODUCT_FAIL, payload: error.message });
      }
    };
export const updateproduct =(name,brand,model,sellingPrice,buyingPrice,quantityBought,quantitySold,quantityRemaining,year,productDescription,showOnEcommerce,images,id,signature)=>async(dispatch,getState)=>{
  console.log(name,brand,model,sellingPrice,buyingPrice,quantityBought,quantitySold,quantityRemaining,year,showOnEcommerce,images);
//let {name,brand,model,sellingPrice,buyingPrice,quantityBought,quantitySold,quantityRemaining,year,showOnEcommerce,id,signature}=inputData
      dispatch({
          type:UPDATE_PRODUCT_REQUEST
      });
   
//.log(token);
      try {

        const {data}  = await axios.patch(`${baseUrl}product/update-product/${id}`,{name,brand,model,sellingPrice,buyingPrice,quantityBought,quantitySold,quantityRemaining,year,productDescription,showOnEcommerce,images},{headers:{        
           
            
            "Authorization":`Bearer ${signature}`,
            "Content-Type":"multipart/form-data"
    }
        }
        
           
      
       )  
      
   
     
            
  dispatch({type:UPDATE_PRODUCT_SUCCESS,payload:data});
       } catch (error) {
      const message=  error.response&& error.response.data.message
          ? error.response.data.message
          : error.message
          dispatch({type:UPDATE_PRODUCT_FAIL,payload:message})
  }
  
     
  }


  export const deleteproduct =(id,signature)=>async(dispatch,getState)=>{
    const {
        shopOwnerSignin: { shopOwnerInfo },
      }  = getState();

   
      dispatch({
          type:DELETE_PRODUCT_REQUEST
      });
   
  
      try {
        const {data}  = await axios.delete(`${baseUrl}product/delete-product/${id}`,{headers:{        
           
            
            "Authorization":`Bearer ${signature}`
    }
        }
        
           
      
       )  

     
            
  dispatch({type:DELETE_PRODUCT_SUCCESS,payload:data});
       } catch (error) {
        console.log(error);
      const message=  error.response&& error.response.data.message
          ? error.response.data.message
          : error.message
          dispatch({type:DELETE_PRODUCT_FAIL,payload:message})
  }
  
     
  }
 