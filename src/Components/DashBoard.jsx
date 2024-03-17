import React from 'react'
import Product from '../Product'
import { useState } from 'react'
import { BackTop } from './BackTop';
import Flight from './Flight';
import { Footer } from './Footer';
import { Home } from './Home';


function DashBoard() {
  const [loading,setLoading]= useState(true)

  setTimeout(() => {
    setLoading(false)
  }, 200);
  return (
    <div >
        <Home/>
        { loading?<div style={{display:'flex',justifyContent:'center',marginTop:'10%'}}> 
                <h2 style={{color:'coral'}}> Loading...</h2></div> : <Product/> } 
                <BackTop/>
                <Flight/>
                <Footer/>
                
        </div>
  )
}

export default DashBoard