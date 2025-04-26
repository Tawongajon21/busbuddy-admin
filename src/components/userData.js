import { useSelector } from "react-redux";
const UserData=()=>{
    let userInfo=useSelector((state)=>state.userLogin);
    let adminInfo=useSelector((state)=>state.adminSignin);
    let conductorInfo=useSelector((state)=>state.conductorSignin);
    let driverInfo=useSelector((state)=>state.driverSignin);
    let companyOwnerInfo=useSelector((state)=>state.companyOwnerSignin);




    
function returnData() {
    if (userInfo!==null) {
        return userInfo
    }else if(companyOwnerInfo!==null){
return companyOwnerInfo
    }else if(driverInfo!==null){
return driverInfo
    }else if(adminInfo!==null){
        
return adminInfo
    }
}
return returnData()



}

export default UserData