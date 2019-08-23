import React, { Component } from 'react'
import './Home.css'
import definition from './resolute_definition.jpg'
import { getUser } from '../../redux/reducers/userReducer'
import { connect } from 'react-redux'

class Home extends Component {

    render() {
        console.log(this.props)
        return (
            <div>
                <div className="homepage_banner" >
                    <img src={definition} style={{}}alt="" />
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

export default connect(mapStateToProps, { getUser })(Home)