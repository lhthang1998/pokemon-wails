
import React, { FunctionComponent } from 'react'
import './Header.css'
import {Navbar} from 'react-bootstrap'

const Header: FunctionComponent = () => {
    return (
        <div className="app-bar">
            <nav className="navbar navbar-default">
                <div className="container-fluid">
                    <div className="navbar-header">
                        <img className="logo" src="pokemon.png" height="70px" className="navbar-brand"></img>
                    </div>
                </div>
            </nav>
        </div>
    );
}

export default Header