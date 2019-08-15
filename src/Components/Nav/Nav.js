import React, { Component } from 'react'
import './Nav.css'

export default class Nav extends Component {

    render() {
        return (
            <div className="nav">
                <div>
                    <h3>Home</h3>
                </div>
                <div className="nav-links-right">
                    <h3>About</h3>
                    <h3>Porfolio</h3>
                    <h3>Contact</h3>
                </div>
            </div>
        )
    }
}