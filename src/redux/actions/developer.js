import {DEVELOPER_LOGIN_FAIL,DEVELOPER_LOGIN_REQUEST,DEVELOPER_LOGIN_SUCCESS,DEVELOPER_LOGOUT_SUCCESS,DEVELOPER_REGISTER_FAIL,DEVELOPER_REGISTER_REQUEST,DEVELOPER_REGISTER_SUCCESS} from "../constants/developer";
import Cookie from 'js-cookie';
import { Axios } from "axios";
import axios from "axios";
import { baseUrl } from "./baseUrl";
export const  developersignin = (email, password) => async (dispatch) => {
    dispatch({ type: DEVELOPER_LOGIN_REQUEST, payload: { email, password } });
    try {
      
      const { data } = await axios.post(`${baseUrl}developer/signin`, {  email, password  });
      dispatch({ type:DEVELOPER_LOGIN_SUCCESS, payload: data });
     
      localStorage.setItem("devInfo",JSON.stringify(data))
      
    } catch (error) {
      
      dispatch({ type: DEVELOPER_LOGIN_FAIL, payload: error.response.data.message });
    }
  }
  
 export const developerregister = (email,phone,password,name,surname) => async (dispatch) => {
    dispatch({ type: DEVELOPER_REGISTER_REQUEST, payload: { email,phone,password,name,surname } });
    try {
      const { data } = await axios.post(`${baseUrl}developer/signup`, { email,phone,password,name,surname});
    
      dispatch({ type: DEVELOPER_REGISTER_SUCCESS, payload: data });

   
      localStorage.setItem("devInfo",JSON.stringify(data))
     
      
      
    } catch (error) {
  console.log(error);
  let payload=error.response.data.message
      dispatch({ type:  DEVELOPER_REGISTER_FAIL, payload});
    }
  }
  
 export const devLogout = () => (dispatch) => {
  localStorage.removeItem("devInfo")
    dispatch({ type: DEVELOPER_LOGOUT_SUCCESS })
  }