import {applyMiddleware, combineReducers, compose} from 'redux';
import { legacy_createStore as createStore } from 'redux';
import {thunk} from 'redux-thunk';

import { shopOwnerRegisterReducer,shopOwnerLoginReducer } from './reducers/shopownerReducer';
import Cookie from 'js-cookie';
import { userRegisterReducer,userLoginReducer } from './reducers/userReducer';
import { getProductReducer,getProductsReducer,updateProductReducer,deleteProductReducer,createProductsReducer } from './reducers/productReducer';
import { getShopsReducer,getShopReducer,updateShopReducer,deleteShopReducer,createShopReducer } from './reducers/shopReducer';
import { getBranchReducer,getBranchesReducer,updateBranchReducer,deleteBranchReducer,createBranchReducer } from './reducers/branchReducer';
import { getStoreKeeperReducer,getStoreKeepersReducer,updateStoreKeeperReducer,deleteStoreKeeperReducer,storeKeeperLoginReducer,storeKeeperRegisterReducer } from './reducers/storeKeeperReducer';
import {cartReducer} from "./reducers/cartReducer";
import { weeklySalesReducer,dailySalesReducer,monthlySalesReducer,cumulativeSalesReducer,yearlySalesReducer } from './reducers/aggregationsReducer';
import { createSaleReducer,getSalesReducer,getStorekeeperSalesReducer } from './reducers/salesReducer';
import { developerLoginReducer,developerRegisterReducer } from './reducers/developerReducer';
import {deleteManagerPasswordReducer,updateManagerPasswordReducer,managerLoginReducer,managerRegisterReducer ,getManagerReducer,getManagersReducer,updateManagerReducer} from './reducers/managerReducer';
//import {updateAdminReducer,adminLoginReducer,adminRegisterReducer ,getAdminReducer,getAdminsReducer,deleteAdminReducer} from './reducers/adminReducer';
import {cashierLoginReducer,cashierRegisterReducer,getCashierReducer,getCashiersReducer,updateCashierReducer,deleteCashierReducer } from './reducers/cashierReducer';

import {getBankReducer,getBanksReducer,createBankReducer,updateBankReducer,deleteBankReducer } from './reducers/bankReducer';
import {getQuotationReducer,getQuotationsReducer,createQuotationReducer,updateQuotationReducer,deleteQuotationReducer } from './reducers/quotationReducer';
import {getInvoiceReducer,getInvoicesReducer,updateInvoiceReducer,deleteInvoiceReducer,createInvoiceReducer } from './reducers/invoice';
import {getPoReducer,getPosReducer,updatePoReducer,createPoReducer,deletePoReducer } from './reducers/poReducer';
import {getExpensesReducer,getExpenseReducer,updateExpenseReducer,deleteExpenseReducer,createExpenseReducer } from './reducers/expenseReducer';
import { getBusesReducer,addBusReducer,deleteBusReducer } from './reducers/busReducer';
import { editTripReducer,getPassengersReducer,deleteTripReducer,addTripReducer,getTripReducer,getTripsReducer,addPassengerReducer,getPassengerTripsReducer,cancelPassengerTripReducer } from './reducers/tripReducer';
import {notificationReducer,getNotificationsReducer} from './reducers/notificationReducer'
import {getCompaniesReducer,getCompanyReducer,createCompanyReducer} from "./reducers/companyReducer"
import {getDriverTripsReducer,getConductorTripsReducer,updateConductorReducer,deleteConductorReducer,getConductorsReducer,getConductorReducer,updateDriverReducer,getDriversReducer,getDriverReducer,updateAdminReducer,getAdminReducer,getAdminsReducer,getUsersReducer,adminLoginReducer,adminRegisterReducer,conductorLoginReducer,conductorRegisterReducer,companyOwnerLoginReducer,companyOwnerRegisterReducer,driverLoginReducer,driverRegisterReducer} from "./reducers/adminReducer"
const storeKeeperInfo = localStorage.getItem('storeKeeperInfo') ? JSON.parse(localStorage.getItem('storeKeeperInfo')): null
const cartItems = Cookie.get('cartItems') ? JSON.parse(Cookie.get("cartItems")):[];
let shopOwnerInfo= localStorage.getItem('shopOwnerInfo') ? JSON.parse(localStorage.getItem('shopOwnerInfo')): null
let devInfo= localStorage.getItem('devInfo') ? JSON.parse(localStorage.getItem('devInfo')): null;
let userInfo= localStorage.getItem('userInfo') ? JSON.parse(localStorage.getItem('userInfo')): null;
let managerInfo= localStorage.getItem('managerInfo') ? JSON.parse(localStorage.getItem('managerInfo')): null;
let adminInfo= localStorage.getItem('adminInfo') ? JSON.parse(localStorage.getItem('adminInfo')): null;
let companyOwnerInfo= localStorage.getItem('companyOwnerInfo') ? JSON.parse(localStorage.getItem('companyOwnerInfo')): null;
let driverInfo= localStorage.getItem('driverInfo') ? JSON.parse(localStorage.getItem('driverInfo')): null;
let conductorInfo= localStorage.getItem('conductorInfo') ? JSON.parse(localStorage.getItem('conductorInfo')): null;
let cashierInfo= localStorage.getItem('cashierInfo') ? JSON.parse(localStorage.getItem('cashierInfo')): null;

const persistedState={
    companyOwner:JSON.parse(localStorage.getItem('companyOwnerInfo'))|| null,
    admin:JSON.parse(localStorage.getItem('adminInfo'))|| null,
    driver:JSON.parse(localStorage.getItem('driverInfo'))|| null,
    conductor:JSON.parse(localStorage.getItem('conductorInfo'))|| null,
}


const initialState={
    shopOwnerSignin:{
      
        shopOwnerInfo
    },
    devSignin:{
      
        devInfo
    },
    managerSignin:{
      
        managerInfo
    },
    adminSignin:{
      
        adminInfo
    },
    companyOwnerSignin:{
      
        companyOwnerInfo
    },
    conductorSignin:{
      
        conductorInfo
    },
    driverSignin:{
      
        driverInfo
    },
    cashierSignin:{
      
        cashierInfo
    },
    storeKeeperLogin:{
      
        storeKeeperInfo
    },
    userLogin:{
      
       userInfo
    },
    
    cart:{cartItems}


};

console.log(initialState);


 const reducer= combineReducers({
userRegister:userRegisterReducer,
userLogin:userLoginReducer,
adminLogin:adminLoginReducer,
adminRegister:adminRegisterReducer,
getAdmins:getAdminsReducer,
getAdmin:getAdminReducer,
updateAdmin:updateAdminReducer,
companyOwnerRegister:companyOwnerRegisterReducer,
companyOwnerLogin:companyOwnerLoginReducer,
driverRegister:driverRegisterReducer,
driverLogin:driverLoginReducer,
conductorRegister:conductorRegisterReducer,
conductorLogin:conductorLoginReducer,
getTrips:getTripsReducer,
getTrip:getTripReducer,
addPassenger:addPassengerReducer,
getPassengerTrips:getPassengerTripsReducer,
cancelPassengerTrip:cancelPassengerTripReducer,
addBus:addBusReducer,
getBuses:getBusesReducer,
deleteBus:deleteBusReducer,
addTrip:addTripReducer,
deleteTrip:deleteTripReducer,
getPassengers:getPassengersReducer,
editTrip:editTripReducer,
notifications:notificationReducer,
getNotifications:getNotificationsReducer,
getUsers:getUsersReducer,
createCompany:createCompanyReducer,
getCompanies:getCompaniesReducer,
getCompany:getCompanyReducer,
getDrivers:getDriversReducer,
getDriver:getDriverReducer,
updateDriver:updateDriverReducer,
getConductorTrips:getConductorTripsReducer,
getConductors:getConductorsReducer,
getConductor:getConductorReducer,
updateConductor:updateConductorReducer,
deleteConductor:deleteConductorReducer,
getDriverTrips: getDriverTripsReducer

 
   
   
});

const composeEnhancer= window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__||compose
 const store= createStore(reducer,initialState,compose(applyMiddleware(thunk)));
/*
 store.subscribe(()=>{
    localStorage.setItem('adminInfo',JSON.stringify(store.getState().adminLogin))
    localStorage.setItem('companyOwnerInfo',JSON.stringify(store.getState().companyOwnerLogin))
    localStorage.setItem('driverInfo',JSON.stringify(store.getState().driverLogin))
    localStorage.setItem('conductorInfo',JSON.stringify(store.getState().conductorLogin))
 })
*/

 export default store