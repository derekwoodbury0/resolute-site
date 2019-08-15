import React, { Component } from 'react'
import './Nav.css'
import { Link } from 'react-router-dom'

export default class Nav extends Component {

    render() {
        return (
            <div className="nav">
                <div>
                    <Link to="/">
                        <h3>Resolute</h3>
                    </Link>
                </div>
                <div className="nav-links-right">
                    <Link to="/about">
                        <h3>About</h3>
                    </Link>
                    <Link to ="/shop">
                        <h3>Shop</h3>
                    </Link>
                    <Link to="/contact">
                        <h3>Contact</h3>
                    </Link>
                </div>
            </div>
        )
    }
}