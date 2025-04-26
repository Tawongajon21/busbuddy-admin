import { useSelector } from "react-redux";
 const CompaniesData=()=>{
    const getCompaniesData=useSelector((state)=>state.getCompanies.data);
    const getCompaniesloading=useSelector((state)=>state.getCompanies.loading);
    const getCompaniesError=useSelector((state)=>state.getCompanies.error);
    return {getCompaniesData,getCompaniesloading,getCompaniesError}
}




export default CompaniesData

