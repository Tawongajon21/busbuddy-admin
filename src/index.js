import React from 'react';
import ReactDOM from 'react-dom/client';


import reportWebVitals from './reportWebVitals';
import { BrowserRouter } from 'react-router-dom';
import { Provider } from 'react-redux';
import store from "./redux/store"
import { lazy,Suspense } from 'react';

const App=lazy(()=>import("./App"))
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(

  <BrowserRouter>
    <Provider store={store}>
    <React.StrictMode>
      <React.Suspense fallback={
        <div className='loading-container'>
<span className='loading-text'>Loading</span>
<span className='dot'></span>
<span className='dot'></span>
<span className='dot'></span>
        </div>
      }>
      <App />
      </React.Suspense>
  
  </React.StrictMode>
    </Provider>
   </BrowserRouter>

);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
