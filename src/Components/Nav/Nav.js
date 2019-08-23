import React, { Component } from 'react'
import './Nav.css'
import { Link, withRouter } from 'react-router-dom'
import { connect } from 'react-redux'
import { getUser, logout } from '../../redux/reducers/userReducer'

class Nav extends Component {

    componentDidMount() {
        this.props.getUser()
    }

    logout = async() => {
        await this.props.logout()
        this.props.history.push('/')
    }

    render() {
        console.log(this.props)
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
                    { this.props.user ?
                        <div>
                            <div>
                                <h3 onClick={this.logout}>Logout</h3>
                            </div>
                            <div>
                                <i className="fas fa-shopping-cart" style={{fontSize: '35px', color: 'white'}}></i>
                            </div>
                        </div>
                    :
                        <Link to="/login">
                            <h3>Login</h3>
                        </Link>
                    }
                </div>
            </div>
        )
    }
}

const mapStateToProps = reduxState => {
    return {
        user: reduxState.userReducer.data
    }
}

export default connect(mapStateToProps, { getUser, logout })(withRouter(Nav))