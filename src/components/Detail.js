import React from 'react'
import {Row,Col} from 'reactstrap'
import "../styles/detail.css"
import wall_paper from "../assets/mboile_paper _1.jpg"
const Detail = () => {
  return (
    <Row>
        <Col lg={8} md={8} sm={12} className='intoduction'>
            <p>we will be providing you top picks from all the all sectors not just only story books.you can find novels,core subjects and even books for kids.  </p>
        </Col>
        <Col lg={4} md={4} sm={12}>
            <img src={wall_paper} style={{"height":"400px"}} alt="ImageNotFound"/>
        </Col>
    </Row>
  )
}

export default Detail