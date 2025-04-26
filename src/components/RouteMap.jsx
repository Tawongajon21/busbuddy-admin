import React from 'react'
import MainLayout from './MainLayout'
function RouteMap() {
  return (
  <MainLayout>
      <form action="" className="searching-form">
                <p className='p-form'>
                    <label className='label-search' htmlFor="">From</label>
                    <select name="" id="select-form">
                        <option value="">Select city to start from</option>
                        <option value="">Harare</option>
                        <option value="">Shurugwi</option>
                        <option value="">Mazowe</option>
                        <option value="">Banket</option>
                        <option value="">Chinhoyi</option>
                        <option value="">Mutare</option>
                        <option value="">Burma Valley</option>
                        <option value="">Honde Valley</option>
                    </select>
                 
                </p>
                <p className='p-form'>
                    <label className='label-search' htmlFor="">To</label>
                    <select id="select-form" name="" >
                        <option value="">Select the destination city</option>
                        <option value="">Harare</option>
                        <option value="">Shurugwi</option>
                        <option value="">Mazowe</option>
                        <option value="">Banket</option>
                        <option value="">Chinhoyi</option>
                        <option value="">Mutare</option>
                        <option value="">Burma Valley</option>
                        <option value="">Honde Valley</option>
                    </select>
                 
                </p>
           
                <p className='form-buttons'>
                    <button className='form-search-btn'>
                        Search
                    </button>
                
                </p>
            </form>
  </MainLayout>
  )
}

export default RouteMap