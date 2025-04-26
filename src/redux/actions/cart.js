import * as actionTypes from "../constants/cart";
import axios from "axios"
import Cookies from "js-cookie";
import { baseUrl } from "./baseUrl";
export const addToCart=(productId,qty,vat,discount,discountpercentage)=>async(dispatch,getState)=>{

    console.log(productId,qty,vat,discount,discountpercentage);
try {
    let {data}= await axios.get(`${baseUrl}product/get-product/${productId}`,{
      
    });
   let tempTotal=Number(data.sellingPrice*qty).toFixed(3);
   let totalAfterVat;
   let totalAfterDiscount;

   let grandTotal=calculateTotal();
  function calculateTotal() {
    if (vat && discount) {
       let temporaryTotal= tempTotal*1.15;
        totalAfterVat= Number(temporaryTotal).toFixed(2);
       let modifyDiscountFee=Number(discountpercentage)/ 100
       console.log(modifyDiscountFee);
       let discountFee= totalAfterVat*modifyDiscountFee;
       totalAfterDiscount=totalAfterVat-discountFee
       let grandTotal= totalAfterVat-discountFee;
       return grandTotal
    }
    else if(vat&&!discount){
        let temporaryTotal= tempTotal*1.15;
        let grandTotal= Number(temporaryTotal).toFixed(2);
        return grandTotal
    }
    else if(!vat&&discount){
    
       let modifyDiscountFee=Number(discountpercentage)/ 100
       console.log(modifyDiscountFee);
       let discountFee= tempTotal*modifyDiscountFee;
   //    totalAfterDiscount=tempTotal-discountFee
       let grandTotal= tempTotal-discountFee;
       return grandTotal
       
    }
    else{
        return Number(tempTotal).toFixed(2)
    }
  }
   
dispatch({
    type:actionTypes.ADD_TO_CART,
    payload:{
        productId:productId,
       
        name:data.name,
        brand:data.name,
        model:data.model,
        year:data.year,
        unit:data.unit,
        price:data.sellingPrice,
        quantity:parseInt(qty),
        total:Number(tempTotal),
        taxes: vat === true ? "15%" : null,
        grandTotal:Number(grandTotal),
        totalAfterVat: totalAfterVat,
        totalAfterDiscount,
        
        
        discount: discount === true ? discountpercentage : null

    }
})
const {cart:{cartItems}}=getState();
Cookies.set("cartItems", JSON.stringify(cartItems));




} catch (error) {
    console.log(error);
}
}

export const removeFromCart=(productId)=>(dispatch,getState)=>{
   
    
    dispatch({type:actionTypes.REMOVE_FROM_CART,payload:productId});
    
    const {cart:{cartItems}}=getState();
    Cookies.set("cartItems", JSON.stringify(cartItems));
   
}

