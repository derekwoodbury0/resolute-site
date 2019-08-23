import React, { Component } from 'react'
import './Contact.css'
import axios from 'axios';

class Contact extends Component {
    constructor() {
        super()

        this.state = {
            name: '',
            email: '',
            message: '',
            submitted: false
        }
    }

    componentDidMount() {
        window.scrollBy(0,-10000000)
    }

    submitted = () => {
        this.setState ({ submitted: true })
    }

    handleChange = (e) => {
        let { name, value } = e.target
        this.setState ({ [name]: value })
    }

    handleClick = () => {
        let { name, email, message } = this.state

        if (name && email && message) { 
            axios.post('/api/support', {name, email, message})
            this.submitted()
        } else {
            return alert('please make sure name, email, and message are filled in before submitting')
        }
    }

    keyPressed = (e) => {
        if (e.key === 'Enter') {
            this.handleClick()
        }
    }

    render() {
        return (
            <div className="support-page">
                <div className="support-header">
                    <h1>Contact Resolute.</h1>
                    <h3>Let Us Help You Climb Your Mountain.</h3>
                </div>
                {this.state.submitted ?
                <div className="support-submitted">
                    <h1>Thank you! A representative will be in touch with you shortly.</h1>
                </div>
                :
                <div>
                    <div className="support-main-full-screen">
                        <div className="support-inputs-container">
                            <h2>Send Us An Email</h2>
                            <input 
                                className="support-inputs" 
                                placeholder="Enter Name" 
                                name="name"
                                autoComplete="off"
                                onChange={this.handleChange}
                            />
                            <input 
                                className="support-inputs" 
                                placeholder="Enter Email" 
                                name="email"
                                autoComplete="off"
                                onChange={this.handleChange}
                            />
                            <textarea 
                                placeholder="Enter Questions Or Comments Here" 
                                name="message"
                                onChange={this.handleChange}
                                onKeyPress={this.keyPressed}    
                            />
                            <button onClick={this.handleClick}>Submit</button>
                        </div>
                        <img src="https://scontent-sjc3-1.xx.fbcdn.net/v/t1.0-9/68525494_106399804053739_8216894619095400448_o.jpg?_nc_cat=107&_nc_oc=AQndljct7o4YDNAEuKSRLWKFcQqscQxBVYXJJ4Ou7ACCUjet5E3tuZdANTqkoPnPKQdMYxFbiLakt3nEFf85UmnG&_nc_ht=scontent-sjc3-1.xx&oh=86db7e625a0ce7775cb0a231402624d1&oe=5E140443" alt="" height="300" width="300"/>
                    </div>
                </div>
                }
            </div>
        )
    }
}

export default Contact