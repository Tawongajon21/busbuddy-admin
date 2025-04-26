
import React from 'react';

import Hero from './components/hero';

import RoutesContainer from './components/routes-container';
import Footer from './components/footer';
import { lazy,Suspense } from 'react';
import imageOne from "./images/mutanda.jpg"
import BusRoute from './components/route';
import Heading from './components/heading';
import Sidebar from './components/sidebar';
import AdvertPage from './components/AdvertPage';
import SingleTrip from './components/single-trip';
import MyBookings from './components/MyBookings';
import Signin from './components/Signin';
import Signup from './components/Signup';
import {Routes,Route} from "react-router-dom"
import AppLayout from './components/AppLayout';
import BookTickets from './components/BookTickets';
import BookingHistory from './components/BookingHistory';
import BusTracking from './components/BusTracking';
import Trips from "./components/Trips"
import AddTrip from './components/Add-Trip';
import AddBus from './components/AddBus';
import UpdateTrip from './components/UpdateTrip';
import Buses from './components/Buses';
import Notifications from "./components/Notifications"
import Admins from './components/Admins';
import Drivers from './components/Drivers';
import Driver from './components/Driver';
import Admin from './components/Admin';
import AddAdmin from './components/Add-Admin';
import AddDriver from "./components/Add-Driver"
import Conductors from "./components/Conductors"
import AddConductor from './components/Add-Conductors';
import Conductor from './components/Conductor';
import ConductorsPage from './components/ConductorsPage';
import DriversPage from './components/DriversPage';
import {useMemo} from "react"
import { useSelector } from "react-redux";
const Layout=lazy(()=>import("./components/Layout"))
function App() {


  let userLogin=useSelector((state)=>state.userLogin);
  let adminLogin=useSelector((state)=>state.adminLogin);
  let conductorLogin=useSelector((state)=>state.conductorLogin);
  let driverLogin=useSelector((state)=>state.driverLogin);
  let companyOwnerLogin=useSelector((state)=>state.companyOwnerLogin);
  console.log(conductorLogin);

  let adminInfo=adminLogin.adminInfo;
  let userInfo=userLogin.userInfo;
  let conductorInfo=conductorLogin.conductorInfo;
  let driverInfo=driverLogin.driverInfo;
  let companyOwnerInfo=companyOwnerLogin.companyOwnerInfo;


function getData(){
  let data;
  if (adminInfo) {
    data= adminInfo
    return data
  }else if(userInfo){
data=userInfo
  }else if(conductorInfo){
data=conductorInfo
return data
  }else if(driverInfo){
data=driverInfo
return data
  }else{
    data=companyOwnerInfo
    return data
  }
}

let item=getData();


let data=useMemo(()=>{
  return item
},[item])



function closeMenu() {
    document.querySelector(".sidebar").classList.remove("open")
}

  return <Routes>
    <Route path='/signin' element={ <Signin/>}/>
    <Route path='/signup' element={ <Signup/>}/>
    <Route path='/' element={<AppLayout data={data}/>}>
      <Route index element={<AdvertPage data={data}/>}/>
      <Route path='/trips' element={<Trips   data={data}/>}/>
      <Route path='/buses' element={<Buses/>}/>
      <Route path='/admins' element={<Admins data={data}/>}/>
      <Route path='/drivers' element={<Drivers data={data}/>}/>
      <Route path='/conductors' element={<Conductors data={data}/>}/>
      <Route path='/conductors-page' element={<ConductorsPage data={data}/>}/>
      <Route path='/drivers-page' element={<DriversPage data={data}/>}/>
      <Route path='/conductor/:id' element={<Conductor data={data}/>}/>
      <Route path='/add-conductor' element={<AddConductor data={data}/>}/>
      <Route path='/driver/:id' element={<Driver data={data}/>}/>
      <Route path='/admin/:id' element={<Admin data={data}/>}/>
      <Route path='/add-admin' element={<AddAdmin data={data}/>}/>
      <Route path='/add-driver' element={<AddDriver data={data}/>}/>
      <Route path='/add-trip' element={<AddTrip data={data}/>}/>
      <Route path='/add-bus' element={<AddBus/>}/>
      <Route path='/edit-trip/:id' element={<UpdateTrip/>}/>
      <Route path='/single-trip/:id' element={  <SingleTrip data={data}/>}/>
    <Route path='/bookings' element={  <MyBookings/>}/>
    <Route path='/booking-history' element={  <BookingHistory/>}/>
    <Route path='/bus-tracking' element={  <BusTracking/>}/>
    <Route path='/notifications' element={  <Notifications/>}/>
    
    </Route>
  
   
   

 

   
     
   
   
          
   
   
              {
               /**
                * <AdvertPage/>
                *  <Heading heading="Book a bus with ease online" />
                */
              }
   
            
           
   
    
  </Routes>
 

}

export default App;

{
  /**  <Routes>
    <Route path='/developer-register' element={ <DeveloperRegister/>}/> 
    <Route path='/developer-signin' element={ <DeveloperSignin/>}/> 
    <Route path='/manager-signin' element={ <ManagerSignin/>}/> 
    <Route path='/admin-signin' element={ <AdminSignin/>}/> 
    <Route path='/cashier-signin' element={  <CashierSignin/>}/> 
    <Route path='/home'  element={<AppLayout data={data}/>} >
    <Route path='/home/products'  element={<Products userData={userData}/>} />
    <Route path='/home/users/register-manager'  element={<ManagerRegister userData={userData}/>} />
    <Route path='/home/users/managers'  element={<Managers userData={userData}/>} />
    <Route path='/home/users/admins'  element={<Admins userData={userData}/>} />
    <Route path='/home/users/cashiers'  element={<Cashiers userData={userData}/>} />
    <Route path='/home/users/add-cashier'  element={<CashierRegister userData={userData}/>} />
    <Route path='/home/users/update-cashier/:id'  element={<UpdateCashier userData={userData}/>} />
    <Route path='/home/users/admin/:id'  element={<Admin userData={userData}/>} />
    <Route path='/home/users/register-admin'  element={<AdminRegister userData={userData}/>} />
    <Route path='/home/users/manager/:id'  element={<Manager userData={userData}/>} />
    <Route path='/home/users/manager/update/:id'  element={<UpdateManager userData={userData}/>} />
    <Route path='/home/users/admin/update/:id'  element={<UpdateAdmin userData={userData}/>} />
    <Route path='/home/products/add-product'  element={<AddProduct userData={userData}/>} />
    <Route path='/home/product/:id'  element={<Product userData={userData}/>} />
    <Route path='/home/products/update-product/:id'  element={<UpdateProduct userData={userData}/>} />
    <Route path='/home/banks'  element={<Banks userData={userData}/>} />
    <Route path='/home/banks/add-bank'  element={<AddBank userData={userData}/>} />
    <Route path='/home/banks/update-bank/:id'  element={<UpdateBank userData={userData}/>} />
    <Route path='/home/quotations'  element={<Quotations userData={userData}/>} />
    <Route path='/home/invoices'  element={<Invoices userData={userData}/>} />
    <Route path='/home/pos'  element={<PurchaseOrders userData={userData}/>} />
    <Route path='/home/expenses'  element={<Expenses userData={userData}/>} />
    <Route path='/home/expense/:id'  element={<Expense userData={userData}/>} />
    <Route path='/home/quotations/create-quotation'  element={<CreateQuotation userData={userData}/>} />
    <Route path='/home/purchase-order/create-po'  element={<CreatePo userData={userData}/>} />
    <Route path='/home/expense/create-expense'  element={<CreateExpense userData={userData}/>} />
    <Route path='/home/purchase-order/get-po/:id'  element={<PoTemplate userData={userData}/>} />
    <Route path='/home/template/:id'  element={<Template userData={userData}/>} />
    <Route path='/home/invoice-template/:id'  element={<InvoiceTemplate userData={userData}/>} />
    <Route path='/home/cashier-page'  element={<CashierPage userData={userData}/>} />
 
    <Route index element={<Dashboard   userData={userData}/>}/> 
    </Route>

    <Route path='/template/:id'  element={<Template userData={userData}/>} />
    <Route path='*' element={<NotFoundPage to="/" replace/>}/>
   </Routes> */
}