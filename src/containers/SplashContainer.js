import React, { Component } from 'react'
import { connect } from 'react-redux'
import { View, Text } from 'react-native'
import AsyncStorage from '@react-native-community/async-storage'

class SplashContainer extends Component {

    constructor(props) {
        super(props)
        this.state = {
            firstLaunch: null
        }
    }

    async componentDidMount() {
        try {
            const value = await AsyncStorage.getItem('@lauched')
            if (value !== null) {
                this.setState({ firstLaunch: false })
                setTimeout(() => {
                    this.props.navigation.navigate('Login')
                }, 2000)
            }
            else {
                this.setState({ firstLaunch: true })
                setTimeout(() => {
                    this.props.navigation.navigate('GetStatedScreen')
                }, 2000)
            }
        } catch (e) {
            console.log(e)
        }
    }

    render() {
        if (this.state.firstLaunch === null) {
            return null
        } else {
            return (
                <View>
                    <Text>SplashContainer</Text>
                    <Text>SplashContainer</Text>
                    <Text>SplashContainer</Text>
                    <Text>SplashContainer</Text>
                    <Text>SplashContainer</Text>
                </View>
            )
        }
    }
}
const mapStateToProps = state => {
    return ({

    })
}

const mapDispatchToProps = dispatch => ({

})

export default connect(mapStateToProps, mapDispatchToProps)(SplashContainer)
