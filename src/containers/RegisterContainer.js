import React, { Component } from 'react'
import { connect } from 'react-redux'
import { View } from 'react-native'

import Toast from '../components/ToastComponent'
import RegisterView from '../views/RegisterView'
import { requestAddUsers } from '../actions/UserAction'

class RegisterContainer extends Component {


    constructor(props) {
        super(props)
        this.state = {
            visible: false,
            message: null
        }
    }

    hideToast = () => {
        this.setState({
            visible: false
        })
    }

    submitFrom = async (email, password, viewName, birthday) => {
        await this.props.requestAddUsers(email, password, viewName, birthday)

        if (this.props.messages !== null) {
            this.setState({
                visible: true,
                message: this.props.messages
            }, () => {
                this.hideToast()
            })
            this.props.navigation.navigate('App')
        }
    }
    render() {
        return (
            <View>
                <Toast visible={this.state.visible} message={this.state.message} />
                <RegisterView
                    {...this.props}
                    {...this.state}
                    submitFrom={(email, password, viewName, birthday) => this.submitFrom(email, password, viewName, birthday)}
                />
            </View>
        )
    }
}
const mapStateToProps = state => {
    return ({
        ...state.userReducer
    })
}

const mapDispatchToProps = dispatch => ({
    requestAddUsers: (email, password, viewName, birthday) => dispatch(requestAddUsers(email, password, viewName, birthday))
})

export default connect(mapStateToProps, mapDispatchToProps)(RegisterContainer)
