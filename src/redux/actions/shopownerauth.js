import { SHOP_OWNER_REGISTER_FAIL,SHOP_OWNER_REGISTER_SUCCESS,SHOP_OWNER_REGISTER_REQUEST ,SHOP_OWNER_LOGOUT_SUCCESS,SHOP_OWNER_LOGIN_FAIL,SHOP_OWNER_LOGIN_SUCCESS,SHOP_OWNER_LOGIN_REQUEST} from "../constants/shopowners";
import Cookie from 'js-cookie';
import { Axios } from "axios";
import axios from "axios";
import { baseUrl } from "./baseUrl";
export const  shopownersignin = (phoneNumber, password) => async (dispatch) => {
    dispatch({ type: SHOP_OWNER_LOGIN_REQUEST, payload: { phoneNumber, password } });
    try {
      
      const { data } = await axios.post(`${baseUrl}shop-owner/login`, { phoneNumber, password });
      dispatch({ type:SHOP_OWNER_LOGIN_SUCCESS, payload: data });
     
      localStorage.setItem("shopOwnerInfo",JSON.stringify(data))
      
    } catch (error) {
      
      dispatch({ type: SHOP_OWNER_LOGIN_FAIL, payload: error.response.data.message });
    }
  }
  
 export const shopownerregister = (name, phoneNumber, password,role,country) => async (dispatch) => {
    dispatch({ type: SHOP_OWNER_REGISTER_REQUEST, payload: { name, phoneNumber, password,role,country } });
    try {
      const { data } = await axios.post(`${baseUrl}shop-owner/register`, { name, phoneNumber, password,role,country });
    
      dispatch({ type: SHOP_OWNER_REGISTER_SUCCESS, payload: data });

   
      localStorage.setItem('shopOwnerInfo',JSON.stringify(data))
     
      
      
    } catch (error) {
  console.log(error.response.data.message);
  let payload={errorMessage:error.response.data.message,errorStatus:true}
      dispatch({ type: SHOP_OWNER_REGISTER_FAIL, payload});
    }
  }
  
 export const logout = () => (dispatch) => {
  localStorage.removeItem('shopOwnerInfo')
    dispatch({ type: SHOP_OWNER_LOGOUT_SUCCESS })
  }