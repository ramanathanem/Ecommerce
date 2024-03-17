import React from 'react'
import bg from "../assets/bg.avif"
import '../Style/Home.css'


export const Home = () => {
  return (
    <div className='hero'>
    <div class="card text-bg-dark ">
    <img src={bg} class="card-img" alt="..." height={"700px"}/>
    <div class="card-img-overlay d-flex flex-column justify-content-center">
      <h5 class="card-title display-3 fw-bolder mb-0">NEW REASON ARRIVAL</h5>
      <p class="card-text lead fs-2">CHECKOUT ALL THE TRENDS</p>
      
    </div>
 
  </div>

  

  </div>
  )
}
