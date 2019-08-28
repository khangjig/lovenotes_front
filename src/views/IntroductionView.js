import React, { Component } from 'react'
import { View, Text, Button } from 'react-native'

class IntroductionView extends Component {

    onPressed = () => {
        this.props.navigation.navigate('Login')
    }

    render() {
        return (
            <View>
                <Text>IntroductionContainer</Text>
                <Text>IntroductionContainer</Text>
                <Text>IntroductionContainer</Text>
                <Text>IntroductionContainer</Text>
                <Text>IntroductionContainer</Text>
                <Text>IntroductionContainer</Text>
                <Button title='Login Screen' onPress={this.onPressed} />
            </View>
        )
    }
}

export default IntroductionView
