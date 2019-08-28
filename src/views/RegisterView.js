import React, { Component } from 'react'
import { View, Text, Button } from 'react-native'

class RegisterView extends Component {
    
    render() {
        return (
            <View>
                <Text>RegisterContainer</Text>
                <Text>RegisterContainer</Text>
                <Text>RegisterContainer</Text>
                <Text>RegisterContainer</Text>
                <Text>RegisterContainer</Text>
                <Text>RegisterContainer</Text>
                <Button title='Login Screen' onPress={() => { this.props.navigation.goBack()}} />
            </View>
        )
    }
}

export default RegisterView
