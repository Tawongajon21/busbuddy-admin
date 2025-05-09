import React from 'react'
import { useEffect,useState } from 'react';
import { Link } from 'react-router-dom'
import { useDispatch,useSelector } from 'react-redux'
import { gettrips } from '../redux/actions/trips';
import LazyLoad from "react-lazy-load"

function ImageLoader({thumbnail,original,imageData,item,className}) {
  let serverUrl='https://busbuddy-server.onrender.com'
    const [src, setsrc] = useState(`data:image/jpeg;base64,${item.thumbnail}`)
const [loaded, setloaded] = useState(false)
useEffect(()=>{
let img=new Image();
img.src=`${serverUrl}/${item.newPath}`;
img.onload=()=>{
    setsrc(`${serverUrl}/${item.newPath}`)
    setloaded(true)
}
},[item.newPath])

  return (
   <img src={src} alt='Progressive image' className={className} style={{
 
   }}
/>

  )
}

export default ImageLoader


 