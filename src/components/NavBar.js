import React,{useState} from 'react'

import {
    Collapse,
    Navbar,
    NavbarToggler,
    NavbarBrand,
    Nav,
    Button
} from "reactstrap";


const NavBar = () => {
    const [isOpen, setisOpen] = useState(false);
    const toggle = () => setisOpen(!isOpen);
    return (
        <Navbar  className="color-nav" light expand="md">
            <NavbarBrand>
                <span style={{"cursor":"pointer"}} className='text-white'>
                    Find My Book.io
                </span>
            </NavbarBrand>
            <NavbarToggler onClick={toggle} style={{backgroundColor:"white"}} />
            <Collapse isOpen={isOpen} navbar>
                <Nav className="ms-auto mt-5" navbar>
                    {
                            <>
                               <Button className="login-txt mr-5">
                                    <span>Register</span>
                                </Button> &nbsp;&nbsp;&nbsp;
                            
                                <Button className="login-txt">
                                    <span>Login</span>
                                </Button>
                            </>
                    }
                </Nav>
            </Collapse>
        </Navbar>
    )
}

export default NavBar