import React, { Component } from 'react'
import { View, Text, TextInput, TouchableOpacity, StyleSheet, ActivityIndicator } from 'react-native'

import { Fonts, Colors } from '../styles/App'
import { validateEmail } from '../helpers/validateEmail'
import Toast from '../components/ToastComponent'

class SignInView extends Component {

    constructor(props) {
        super(props)
        this.state = {
            username: '',
            password: '',
            visible: false,
            message: null,
            loader: false
        }
    }

    onSubmit = async () => {
        if (this.state.username === '' || this.state.password === '') {
            this.setState({
                visible: true,
                message: 'Please fill this form!'
            }, () => {
                this.hideToast()
            })
        }
        else {
            if (validateEmail(this.state.username)) {
                this.setState({
                    loader: true
                })
                await this.props.submitFrom(this.state.username, this.state.password)
                if (this.props.messages !== null) {
                    this.setState({
                        loader: false
                    })
                }
            }
            else {
                this.setState({
                    visible: true,
                    loader: false,
                    message: 'The email not in a valid format!'
                }, () => {
                    this.hideToast()
                })
            }
        }
    }

    onPressed = () => {
        this.props.navigation.navigate('Register')
    }

    onChangeUsername = (e) => {
        this.setState({
            username: e
        })
    }

    onChangePassword = (e) => {
        this.setState({
            password: e
        })
    }

    hideToast = () => {
        this.setState({
            visible: false
        })
    }

    render() {
        return (
            <View style={{ paddingTop: '50%', paddingLeft: '10%', paddingRight: '10%' }}>
                <Toast visible={this.state.visible} message={this.state.message} />
                <TextInput
                    placeholder="Email"
                    onChangeText={this.onChangeUsername}
                    style={styles.textInput}
                />
                <TextInput
                    secureTextEntry
                    placeholder="Password"
                    onChangeText={this.onChangePassword}
                    style={styles.textInput}
                />

                <TouchableOpacity onPress={this.onSubmit} style={styles.containerStyle}>
                    <Text style={styles.buttonLogin}>
                        Login
                    </Text>
                </TouchableOpacity>

                <TouchableOpacity onPress={this.onPressed}>
                    <Text style={styles.register}>
                        Register ?
                    </Text>
                </TouchableOpacity>
                {
                    this.state.loader ?
                        <View style={{
                            position: 'absolute',
                            flex: 1,
                            left: 0,
                            right: 0,
                            top: 0,
                            bottom: 0,
                            alignItems: 'center',
                            justifyContent: 'center',
                            backgroundColor: 'rgba(220, 220, 220, 0.01)'
                        }}>
                            <ActivityIndicator size='large' color={Colors.mainColor} />
                        </View>
                        : null
                }
            </View >
        )
    }
}
const styles = StyleSheet.create({
    containerStyle: {
        borderRadius: 2,
        borderColor: '#ddd',
        borderBottomWidth: 1,
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.8,
        shadowRadius: 2,
        elevation: 1,
        marginTop: 10,
    },
    textInput: {
        fontFamily: Fonts.rixLoveFool,
        fontSize: 18,
        borderBottomColor: Colors.mainColor,
        borderBottomWidth: 1
    },
    buttonLogin: {
        fontFamily: Fonts.rixLoveFool,
        fontSize: 18,
        backgroundColor: Colors.mainColor,
        padding: 8,
        color: 'white',
        textAlign: 'center'
    },
    register: {
        fontFamily: Fonts.rixLoveFool,
        fontSize: 15,
        padding: 10,
        color: Colors.mainColor,
        textAlign: 'center',
        textDecorationLine: 'underline'
    }
})
export default SignInView
