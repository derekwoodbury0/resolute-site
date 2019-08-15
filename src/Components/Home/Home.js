import React, { Component } from 'react'
import './Home.css'
import definition from './resolute_definition.jpg'

class Home extends Component {

    render() {
        return (
            <div>
                <div className="homepage_banner" >
                    <img src={definition} style={{}}alt="" />
                </div>
            </div>
        )
    }
}

export default Home