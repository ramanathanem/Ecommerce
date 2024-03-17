import React from 'react'
import "../Style/BackTop.css"
import { faArrowUp } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

export const BackTop = () => {
    const top=()=>{
        window.scrollTo(0,0)
    }
  return (

    <div className='text-center ' >
        
       
      <FontAwesomeIcon icon={faArrowUp}onClick={top} className='topbtn btn btn-success' />
       
    </div>
  )
}
