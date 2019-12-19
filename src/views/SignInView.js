import React, { Component } from 'react'
import { View, Text, TextInput, TouchableOpacity, StyleSheet } from 'react-native'

import { Fonts, Colors } from '../styles/App'

class SignInView extends Component {

    constructor(props) {
        super(props)
        this.state = {
            username: '',
            password: ''
        }
    }

    onSubmit = () => {
        this.props.submitFrom(this.state.username, this.state.password)
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

    render() {
        return (
            <View style={{ paddingTop: '50%', paddingLeft: '10%', paddingRight: '10%' }}>
                <TextInput
                    placeholder="Username"
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
