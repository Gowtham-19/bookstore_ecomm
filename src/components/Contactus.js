import React from 'react'
import {Row,Col,Container} from 'reactstrap';
import contact_us from "../assets/conactus_page.gif"
import "../styles/contact.css";
import { ImLocation ,ImPhone,ImWhatsapp,ImMail,ImFacebook2,ImInstagram,ImTwitter} from "react-icons/im";

const Contactus = () => {
  return (
    <Row>
        <Col lg={6} md={6} sm={12} className='contact_image' >
            <img src={contact_us} alt="ImageNotFound"/>
        </Col>
        <Col lg={6} md={6} sm={12}>
            <Container className='contact'>
                <p>You Can Contact Us At!</p>
                <p>Baker street Banglore <ImLocation style={{height:"40px",width:"70px"}}/></p>
                <p><ImPhone/>9877543221 also available on <ImWhatsapp style={{height:"40px",width:"70px"}}color="green"/>(whatsApp)</p>
                <p><ImMail style={{height:"40px",width:"70px"}} color="red"/>&nbsp;&nbsp; findmybook@gmail.com</p>
                <p>for continous updates follow us on</p>
                <p><ImFacebook2 color="blue" style={{height:"40px",width:"70px"}}/>(Facebook)&nbsp;&nbsp;<ImInstagram color="purple" style={{height:"40px",width:"70px"}}/>(Instagram)&nbsp;&nbsp;<ImTwitter color='skyblue' style={{height:"40px",width:"70px"}}/>(Twitter)</p>
            </Container>
        </Col>
    </Row>
  ) 
}

export default Contactus