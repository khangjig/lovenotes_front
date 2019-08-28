import React, { Component } from 'react'
import { connect } from 'react-redux'
import SignInView from '../views/SignInView'
import { requestGetUsers } from '../actions/LoginAction'

class SignInContainer extends Component {

    submitFrom = (username, password) => {
        this.props.requestGetUsers(username, password)
    }

    render() {
        return (
            <SignInView
                {...this.props}
                {...this.state}

                submitFrom={(username, password) => this.submitFrom(username, password)}
            />
        )
    }
}

const mapStateToProps = state => {
    return ({
        ...state.loginReducer
    })
}

const mapDispatchToProps = dispatch => ({
    requestGetUsers: (username, password) => dispatch(requestGetUsers(username, password))
})

export default connect(mapStateToProps, mapDispatchToProps)(SignInContainer)
