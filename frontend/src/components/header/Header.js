
import React, { FunctionComponent } from 'react'
import './Header.css'
import {Navbar} from 'react-bootstrap'

const Header: FunctionComponent = () => {
    return (
        <div class="app-bar">
            <nav class="navbar navbar-default">
                <div class="container-fluid">
                    <div class="navbar-header">
                        <img className="logo" src="pokemon.png" height="60px" class="navbar-brand"></img>
                    </div>
                </div>
            </nav>
        </div>
    );
}

export default Header