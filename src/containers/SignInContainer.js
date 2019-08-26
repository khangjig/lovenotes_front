import React, { Component } from 'react'
import { View, Text, Button } from 'react-native'
import AsyncStorage from '@react-native-community/async-storage'

class SignInContainer extends Component {

    componentDidMount() {
        this.checkFirstLaunch()
    }

    checkFirstLaunch = async () => {
        try {
            const value = await AsyncStorage.getItem('@lauched')
            if (value !== null) {
                console.log(AsyncStorage.getItem('@lauched'))
            }
            else {
                console.log("None!!!")
            }
        } catch (e) {
            console.log(e)
        }
    }

    // delete = async () => {
    //     try {
    //         await AsyncStorage.removeItem('@lauched')
    //     } catch (e) {
    //         console.log(e)
    //     }
    // }

    render() {
        return (
            // value === 'true'
            //     ? this.props.navigation.navigate('App') :
            <View>
                <Text> SignInContainer</Text>
                <Text> SignInContainer</Text>
                <Text> SignInContainer</Text>
                <Text> SignInContainer</Text>
                <Text> SignInContainer</Text>
                <Button title='App Screen' onPress={() => { this.props.navigation.navigate('App') }} />
                <Button title='Register Screen' onPress={() => { this.props.navigation.navigate('Register', { GoBackKey: this.props.navigation.state.key }) }} />
                {/* <Button title='Register Screen' onPress={this.delete} /> */}
            </View>
        )
    }
}

export default SignInContainer
