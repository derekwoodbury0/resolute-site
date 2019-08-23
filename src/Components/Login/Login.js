import React, { Component } from 'react'
import './Login.css'
import { Link } from 'react-router-dom'
import { login } from '../../redux/reducers/userReducer'
import { connect } from 'react-redux'

class Login extends Component {
    constructor(props) {
        super(props)

        this.state = {
            username: '',
            password: ''
        }
    }

    handleChange = e => {
        let { name, value } = e.target
        this.setState ({ [name]: value })
    }

    handleClick = async() => {
        let { username, password } = this.state

        await this.props.login({ username, password }).then(res => {
            if (res.value.status === 200 ) {
                this.props.history.push('/')
            }
        })
        .catch(() => alert('Email Or Password Incorrect. Please Try Again.'))
    }

    keyPressed = async e => {
        if (e.key === "Enter") {
            let { username, password } = this.state

            await this.props.login({ username, password }).then(res => {
                if (res.value.status === 200 ) {
                    this.props.history.push('/')
                }
            })
            .catch(() => alert('Email Or Password Incorrect. PLease Try Again.'))
        }
    }
    
    render() {
        return (
            <div className="login-page">
                <h1>Login</h1>
                <div className="login-container">
                    <div className="login-text-container">
                        <input
                            placeholder="Username"
                            name="username"
                            onChange={this.handleChange}
                            type="text"
                            autoComplete="off"
                            />
                        <input 
                            placeholder="password"
                            name="password"
                            onChange={this.handleChange}
                            type="password"
                            onKeyPress={(e) => this.keyPressed(e)}
                            />
                        <button onClick={this.handleClick}>Login</button>
                    </div>
                    <div className="register-container-login">
                        <h6>Don't Have An Account?</h6>
                        <Link to="/register">
                            <button>Register Now</button>
                        </Link>
                    </div>
                </div>
            </div>
        )
    }
}

export default connect(null, { login })(Login)