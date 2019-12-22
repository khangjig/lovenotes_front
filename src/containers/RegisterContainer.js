import React, { Component } from 'react'
import { connect } from 'react-redux'
import { View, ActivityIndicator } from 'react-native'

import Toast from '../components/ToastComponent'
import RegisterView from '../views/RegisterView'
import { requestAddUsers } from '../actions/UserAction'
import { Colors } from '../styles/App'

class RegisterContainer extends Component {


    constructor(props) {
        super(props)
        this.state = {
            visible: false,
            message: null,
            loader: false
        }
    }

    hideToast = () => {
        this.setState({
            visible: false
        })
    }

    submitFrom = async (email, password, viewName, birthday) => {

        this.setState({
            loader: true
        })

        await this.props.requestAddUsers(email, password, viewName, birthday)

        if (this.props.message !== null && !this.props.isLoadingAddUser) {
            this.setState({
                visible: true,
                message: this.props.message.messages,
                loader: false
            }, () => {
                this.hideToast()
            })

            if (this.props.message.status === '200') {
                this.props.navigation.goBack()
            }
        }
    }
    render() {
        return (
            <View style={{ flex: 1 }}>
                <Toast visible={this.state.visible} message={this.state.message} />
                <RegisterView
                    {...this.props}
                    {...this.state}
                    submitFrom={(email, password, viewName, birthday) => this.submitFrom(email, password, viewName, birthday)}
                />
                {
                    this.state.loader ?
                        <View style={{
                            position: 'absolute',
                            left: 0,
                            right: 0,
                            top: 0,
                            bottom: 0,
                            alignItems: 'center',
                            justifyContent: 'center',
                            backgroundColor: 'rgba(220, 220, 220, 0.4)'
                        }}>
                            <ActivityIndicator size='large' color={Colors.mainColor} />
                        </View>
                        : null
                }
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
