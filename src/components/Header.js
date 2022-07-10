import React from 'react'
import { Row,Col } from 'react-bootstrap'
import wall_paper from "../assets/book_wall_proper.jpg"
import "../styles/header.css"
const Header = ()  => {
  return (
    <Row>
        <Col lg={4} md={4} sm={12}>
                <img src={wall_paper} alt="ImageNotFound" className='image-responsive'/>
        </Col>
        <Col lg={8} md={8} sm={12} className='intro-text'>
                <p>Find My Book is a place where you can find a perfect book depending upon your taste you can choose books from wide variety of category's we provide in our website.it can be thriller or mystery or love story what ever it might be <b style={{"textDecoration":"underline"}}>findmybook</b> never fails  in finding a good book for you.
                    <br/>
                    <b>So what are you waiting for!just dive in by login in to findmybook for the amazing experience.</b>
                </p>
        </Col>
    </Row>
  )
}

export default Header