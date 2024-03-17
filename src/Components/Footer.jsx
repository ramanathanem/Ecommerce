import React from 'react'
import "../Style/Footer.css"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPhoneVolume,faLocationDot,faSquareEnvelope} from '@fortawesome/free-solid-svg-icons'
import { faYoutube,faInstagram,faTwitter,faFacebook} from '@fortawesome/free-brands-svg-icons'

export const Footer = () => {
  return (
  
    
    <div maxWidthstyle="lg md  xs" style={{marginTop:"20px", backgroundColor:"#0C2340",color:"white"}} className='mt-3'>
    <div class="row">
      <div class="col-sm" style={{marginTop:"20px"}}>
    
        <h4 style={{marginTop:"20px"}}>Contect Info</h4>
       
        <ul style={{listStyle:"none"}}>
           
            <li> <FontAwesomeIcon icon={faSquareEnvelope} />ecommerceshop@gmail.com</li>
            <li> <FontAwesomeIcon icon={faPhoneVolume}  />+91 95443331551</li>
           
        </ul>
      </div>
      <div class="col-sm">
      <div class="row">
  <div class="col-6 col-sm-4"><h4 style={{marginTop:"130px"}}>Customs Links</h4>
  <ul style={{listStyle:"none"}}>
   <li>Get to Know Us</li>
        <li>About Us</li>
        <li>Careers</li>
        <li>Press Releases</li>
        <li>
Amazon Science</li>



       </ul></div>
  <div class="col-6 col-sm-4"><ul style={{marginTop:"170px",listStyle:"none"}}>
    <li>100% Purchase Protection</li>
    <li>Help</li></ul></div>
       
       
       </div>
      </div>
      <div class="col-sm">
      <div class="row">
      <h4 style={{marginTop:"20px"}} >Social Media Platforms</h4>
  
</div>
<ul style={{listStyle:"none",display:"flex",margin:"25px"}}>
   
      <li > <FontAwesomeIcon icon={faYoutube} className='me-2' id='youtube'/></li>
       <li ><FontAwesomeIcon icon={faInstagram} className='me-2' id='insta'/></li>
       <li ><FontAwesomeIcon icon={faTwitter} className='me-2' id='twitter'/></li>
       <li ><FontAwesomeIcon icon={faFacebook}  id='face'/></li>
       </ul>
       <ul style={{listStyle:"none"}}>
       <li>	
Connect with Us</li>
<li>Facebook</li>
<li>Twitter</li>
<li>Instagram</li>
</ul>
      </div>
      
    </div>
    <hr/>
    <p className='text-center mb-0'>Conditions of Use & Sale
Privacy Notice
Interest-Based Ads</p>
   
  </div>
  )
}
