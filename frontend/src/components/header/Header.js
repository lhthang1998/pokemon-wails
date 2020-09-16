
import React, { FunctionComponent } from 'react'
import './Header.css'
import {Navbar} from 'react-bootstrap'

const Header: FunctionComponent = () => {
    return (
        <Navbar bg="light" expand="lg" >
            <Navbar.Brand href="#home">React-Bootstrap</Navbar.Brand>
        </Navbar>
    );
}

export default Header