import React, { Component } from 'react'
import { View, Text, TextInput, TouchableOpacity, StyleSheet } from 'react-native'
import { ListItem, DatePicker, Body } from 'native-base'
import moment from 'moment'

import Toast from '../components/ToastComponent'
import { Fonts, Colors } from '../styles/App'
import { validateEmail } from '../helpers/validateEmail'


class RegisterView extends Component {

    constructor(props) {
        super(props)
        this.state = {
            email: null,
            password: null,
            rePassword: null,
            birthday: null,
            viewName: null,
            visible: false,
            message: null
        }
    }

    componentDidMount() {
        this.setState({
            birthday: new Date(moment().format('YYYY/MM/DD'))
        })
    }

    hideToast = () => {
        this.setState({
            visible: false
        })
    }

    onSubmit = () => {

        if (this.state.email === null ||
            this.state.viewName === null ||
            this.state.password === null ||
            this.state.rePassword === null) {
            this.setState({
                visible: true,
                message: 'Please fill this form!'
            }, () => {
                this.hideToast()
            })
        }
        else {
            if (this.state.password === this.state.rePassword) {
                if (validateEmail(this.state.email)) {
                    this.props.submitFrom(this.state.email, this.state.password, this.state.viewName, this.state.birthday)
                }
                else {
                    this.setState({
                        visible: true,
                        message: 'The email not in a valid format!'
                    }, () => {
                        this.hideToast()
                    })
                }
            }
            else {
                this.setState({
                    visible: true,
                    message: 'password not invalid'
                }, () => {
                    this.hideToast()
                })
            }
        }
    }

    onChangeEmail = (e) => {
        this.setState({
            email: e
        })
    }

    onChangeViewName = (e) => {
        this.setState({
            viewName: e
        })
    }

    onChangePassword = (e) => {
        this.setState({
            password: e
        })
    }

    onChangeRePassword = (e) => {
        this.setState({
            rePassword: e
        })
    }

    setBirthday = (newDate) => {
        this.setState({
            birthday: newDate
        })
    }

    goBack = () => {
        this.props.navigation.goBack()
    }

    render() {
        return (
            <View>
                <Toast visible={this.state.visible} message={this.state.message} />
                <View style={{ paddingTop: '30%', paddingLeft: '10%', paddingRight: '10%' }}>
                    <TextInput
                        placeholder="Email"
                        onChangeText={this.onChangeEmail}
                        style={styles.textInput}
                    />
                    <TextInput
                        placeholder="View name"
                        onChangeText={this.onChangeViewName}
                        style={styles.textInput}
                    />
                    <TextInput
                        secureTextEntry
                        placeholder="Password"
                        onChangeText={this.onChangePassword}
                        style={styles.textInput}
                    />
                    <TextInput
                        secureTextEntry
                        placeholder="Confirm Password"
                        onChangeText={this.onChangeRePassword}
                        style={styles.textInput}
                    />

                    <ListItem>
                        <Body>
                            <Text style={{ fontFamily: Fonts.rixLoveFool, fontSize: 15, color: Colors.greyColor }}>
                                Birthday
                            </Text>
                        </Body>
                        <DatePicker
                            defaultDate={new Date(moment().format('YYYY/MM/DD'))}
                            minimumDate={new Date(1950, 1, 1)}
                            maximumDate={Date.now()}
                            locale={"en"}
                            modalTransparent={false}
                            animationType={"fade"}
                            androidMode={"default"}
                            textStyle={{ color: Colors.mainColor, fontFamily: Fonts.rixLoveFool }}
                            placeHolderTextStyle={{ color: Colors.mainColor, fontFamily: Fonts.rixLoveFool }}
                            onDateChange={this.setBirthday}
                        />
                    </ListItem>

                    <TouchableOpacity onPress={this.onSubmit} style={styles.containerStyle}>
                        <Text style={styles.buttonLogin}>
                            Register
                    </Text>
                    </TouchableOpacity>

                    <TouchableOpacity onPress={this.goBack}>
                        <Text style={styles.register}>
                            {'<< Go back'}
                        </Text>
                    </TouchableOpacity>
                </View >
            </View>
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

export default RegisterView
