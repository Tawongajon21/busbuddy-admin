import React from 'react'
import { useState } from 'react'
function SidebarPagination({data,itemsPerPage,currentPage}) {
    const [pageNumber,setPageNumber]=useState(currentPage)
    const pages=[];
    for(let i=1;i<=Math.ceil(data.length/itemsPerPage);++i){
        pages.push(i)
    }
    let startIndex=(pageNumber-1)*itemsPerPage;
    let endIndex=startIndex+itemsPerPage;
    let paginatedData=data.slice(startIndex,endIndex)
    const handlePageChange=(pageNumber)=>{
        setPageNumber(pageNumber)
    }
  return (
   <>
       {
            paginatedData.map((item)=>{
return  <li key={item.id} className='li-bus'>
<div class="bus">
    <a href="">
        <img src={item.image} alt="product" class="bus-image"/>
    </a>
    <ul className='bus-properties'>
        <li><b>{item.wordOne}</b> - {item.wordTwo}</li> 
      
    </ul>



</div>
</li>
            })
        }
        
            <p className="pagination-p">
                {
  pages.map((page)=>{
    return   <button className='pagination-button' onClick={()=>handlePageChange(page)} key={page}>
{page}
       </button>
           })
                }
 
            </p>
 

   </>
  )
}

export default SidebarPagination