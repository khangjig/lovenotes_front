import React, { Component } from 'react'
import { View, Text, Button } from 'react-native'
import AsyncStorage from '@react-native-community/async-storage'

class GetStartedContainer extends Component {

    onPressed = () => {
        this.props.navigation.navigate('Login')
    }

    async componentDidMount () {
        try {
            await AsyncStorage.setItem('@lauched', 'true')
        } catch (e) {
            console.log(e)
        }
    }
    
    render() {
        return (
            <View>
                <Text>GetStartedContainer</Text>
                <Text>GetStartedContainer</Text>
                <Text>GetStartedContainer</Text>
                <Text>GetStartedContainer</Text>
                <Text>GetStartedContainer</Text>
                <Text>GetStartedContainer</Text>
                <Button title='Login Screen' onPress={this.onPressed} />
            </View>
        )
    }
}

export default GetStartedContainer
