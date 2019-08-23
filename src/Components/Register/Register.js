import React, { Component } from 'react'
import { register } from '../../redux/reducers/userReducer'
import { connect } from 'react-redux'
import './Register.css'

class Register extends Component {
    constructor(props) {
        super(props)

        this.state = {
            firstName: '',
            lastName: '',
            email: '',
            username: '',
            password: ''
        }
    }

    handleChange = e => {
        let { name, value } = e.target
        this.setState ({ [name]: value })
    }

    handleClick = async () => {
        let { firstName, lastName, email, password, username } = this.state

        await this.props.register({ firstName, lastName, email, password, username }).then(res => {
            if (res.value.status === 200) {
                this.props.history.push('/')
            }
        })
        .catch(() => alert('A User Already Exists With This Email Address.'))
    }

    keyPressed = async e => {
        if (e.key === 'Enter') {
            let { firstName, lastName, email, password, username } = this.state

            await this.props.register({ firstName, lastName, email, password, username }).then(res => {
                if (res.value.status === 200) {
                    this.props.history.push('/')
                }
            })
            .catch(() => alert('A User Already Exists With This Email Address.'))
        }
    }
    
    render() {
        return (
            <div className="register-page">
                <h1>Register</h1>
                <div className="register-container">
                    <div className="register-text-container">
                        <input
                            placeholder="First Name"
                            name="firstName"
                            onChange={this.handleChange}
                            type="text"
                            />
                            <input
                            placeholder="Last Name"
                            name="lastName"
                            onChange={this.handleChange}
                            type="text"
                            />
                        <input
                            placeholder="email address"
                            name="email"
                            onChange={this.handleChange}
                            type="text"
                            />
                        <input 
                            placeholder='username'
                            name='username'
                            onChange={this.handleChange}
                            type="text"
                        />
                        <input 
                            placeholder="password"
                            name="password"
                            onChange={this.handleChange}
                            type="password"
                            onKeyPress={e => this.keyPressed(e)}
                            />
                        <button onClick={this.handleClick}>Register</button>
                    </div>
                </div>
            </div>
        )
    }
}

export default connect(null, { register })(Register)