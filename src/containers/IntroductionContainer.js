import React, { Component } from 'react'
import AsyncStorage from '@react-native-community/async-storage'

import { LAUCHED } from '../configs/config'
import IntroductionView from '../views/IntroductionView'

class IntroductionContainer extends Component {

    async componentDidMount() {
        try {
            await AsyncStorage.setItem(LAUCHED, 'true')
        } catch (e) {
            console.log(e)
        }
    }

    render() {
        return (
            <IntroductionView 
                {...this.props}
            />
        )
    }
}

export default IntroductionContainer
