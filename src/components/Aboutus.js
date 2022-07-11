import React from 'react'
import "../styles/aboutus.css"
import {Row,Col} from "reactstrap"
import businnes from "../assets/business_reach.jpg"
import businnes_mobile from "../assets/business_mobile.gif"
const Aboutus = () => {
  return (
      <div>
        <p className='about_us_title'>About Us</p> 
   <Row  className="about_info">
        <p>findmybook.io is one of the most rapidly growing ecommerce books store.our main goal is 
            to provide the best quality content for any kind of customers they can be a kid or adult or an professional who ever it might be <b >findmybook</b> always aims to provide the best possible results for them.now we have grown we are increasing our delivery services to the maximum number of places we could reach.
        </p>
        <p>our moto is simple <b>Providing Quality Content to the Customer</b>.</p>
   </Row>
   <Row>
    <Col sm={12} md={6} lg={6}>
      <img src={businnes} alt="imageNotFound" className='about_img'/>
    </Col>
    <Col sm={12} md={6} lg={6}>
    <img src={businnes_mobile} alt="imageNotFound" className='about_img'/>
    </Col>
   </Row>
    </div>
  )
}

export default Aboutus