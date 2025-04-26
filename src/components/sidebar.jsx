import React from 'react'
import imageOne from "../images/mutanda.jpg"
import imageTwo from "../images/car-bg.png"
import imageThree from "../images/sun.jpg"
import imageFour from "../images/sky.jpg"
import { useState } from 'react'
import SidebarPagination from './SidebarPagination'
function Sidebar() {
    const [pageNumber,setPageNumber]=useState(0)
    function closeMenu() {
        document.querySelector(".sidebar").classList.remove("open")
    }
    const pages=[];
    let itemsPerPage=2
  
    let data=[
        {id:1,image:imageOne,wordOne:"Bus name",wordTwo:"Bus price"},
        {id:1,image:imageTwo,wordOne:"Bus name",wordTwo:"Bus price"},
        {id:1,image:imageThree,wordOne:"Bus name",wordTwo:"Bus price"},
        {id:1,image:imageFour,wordOne:"Bus name",wordTwo:"Bus price"},
    ]
    for(let i=1;i<=Math.ceil(data.length/itemsPerPage);++i){
        pages.push(i)
    }
    let startIndex=(pageNumber-1)*itemsPerPage;
    let endIndex=startIndex+itemsPerPage;
    let paginatedData=data.slice(startIndex,endIndex)
const handlePageChange=(pageNumber)=>{
    setPageNumber(pageNumber)
}
let currentPage=1
  return (
    <aside class="sidebar">
    <h3 >
      Available buses
    </h3>
    <button onClick={()=>closeMenu()} class="sidebar-close-button">
        x 
    </button>
    <ul class="buses">
    <SidebarPagination data={data} itemsPerPage={itemsPerPage} currentPage={currentPage}/>

       
     
      
      
    </ul>

    
        </aside>
  )
}

export default Sidebar