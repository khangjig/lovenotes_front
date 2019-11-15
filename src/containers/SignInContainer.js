import React, { Component } from 'react'
import { connect } from 'react-redux'
import { View } from 'react-native'
import AsyncStorage from '@react-native-community/async-storage'

import { ACCESS_TOKEN_ASYNCSTORAGE, REFRESH_TOKEN_ASYNCSTORAGE } from '../configs/config'
import { requestGetToken } from '../actions/LoginAction'
import SignInView from '../views/SignInView'
import Toast from '../components/ToastComponent'


class SignInContainer extends Component {

    constructor(props) {
        super(props)
        this.state = {
            allowed: null,
            visible: false
        }
    }

    hideToast = () => {
        this.setState({
            visible: false
        })
    }

    submitFrom = async (username, password) => {
        await this.props.requestGetToken(username, password)
        if (this.props.messages !== null) {
            const accessToken = await AsyncStorage.getItem(ACCESS_TOKEN_ASYNCSTORAGE)
            const refreshToken = await AsyncStorage.getItem(REFRESH_TOKEN_ASYNCSTORAGE)
            this.setState({
                visible: true
            }, () => {
                this.hideToast()
            })

            if (accessToken !== null && refreshToken !== null) {
                this.props.navigation.navigate('App')
            }
        }
    }

    render() {
        return (
            <View>
                <Toast visible={this.state.visible} message= {this.props.messages} />
                <SignInView
                    {...this.props}
                    {...this.state}

                    submitFrom={(username, password) => this.submitFrom(username, password)}
                />
            </View>
        )
    }
}

const mapStateToProps = state => {
    return ({
        ...state.loginReducer
    })
}

const mapDispatchToProps = dispatch => ({
    requestGetToken: (username, password) => dispatch(requestGetToken(username, password))
})

export default connect(mapStateToProps, mapDispatchToProps)(SignInContainer)
