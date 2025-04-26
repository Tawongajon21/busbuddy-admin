import { useSelector } from "react-redux";
 const UseData=()=>{
    const getUserData=useSelector((state)=>state.getUsers.data);
    const getUserloading=useSelector((state)=>state.getUsers.loading);
    const getUserError=useSelector((state)=>state.getUsers.error);
    return {getUserData,getUserloading,getUserError}
}




export default UseData

