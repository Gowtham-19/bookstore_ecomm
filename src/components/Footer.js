import React from "react";
import {Container} from "reactstrap"

const Footer = () => {

    return(
        <Container
        fluid 
        tag="footer"
        className="text-center bg-dark text-white text-uppercase fixed-bottom p-2"
        >
        <i className="fa fa-copyright" aria-hidden="true">@All rights reserved to find my book.io</i>
        </Container>
    )
}

export default Footer;