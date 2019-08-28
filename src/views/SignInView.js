import React, { Component } from 'react'
import { View, Text, Button, TextInput } from 'react-native'
// import { Container, Header, Content, Form, Item, Input } from 'native-base'


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
            <View>
                <TextInput placeholder="Username" onChangeText={this.onChangeUsername} />
                <TextInput placeholder="Password" onChangeText={this.onChangePassword} />
                <Button title='Login' onPress={this.onSubmit} />
                <Button title='Register Screen' onPress={this.onPressed} />
            </View>
        )
    }
}

export default SignInView
