import React, { Component } from 'react'
import { connect } from 'react-redux'
import { View, Text } from 'react-native'
import AsyncStorage from '@react-native-community/async-storage'

import { LAUCHED, ACCESS_TOKEN_ASYNCSTORAGE, REFRESH_TOKEN_ASYNCSTORAGE } from '../configs/config'
import SplashView from '../views/SplashView'

class SplashContainer extends Component {

    constructor(props) {
        super(props)
        this.state = {
            firstLaunch: null
        }
    }

    async componentDidMount() {
        try {
            const allKeys = await AsyncStorage.getAllKeys()
            console.log(allKeys)

            const lauch = await AsyncStorage.getItem(LAUCHED)
            const accessToken = await AsyncStorage.getItem(ACCESS_TOKEN_ASYNCSTORAGE)
            const refreshToken = await AsyncStorage.getItem(REFRESH_TOKEN_ASYNCSTORAGE)
            // await AsyncStorage.removeItem(ACCESS_TOKEN_ASYNCSTORAGE)
            if (lauch !== null) {
                if (accessToken !== null && refreshToken !== null) {
                    this.setState({ firstLaunch: false })
                    setTimeout(() => {
                        this.props.navigation.navigate('App')
                    }, 2000)
                }
                else {
                    this.setState({ firstLaunch: false })
                    setTimeout(() => {
                        this.props.navigation.navigate('Login')
                    }, 2000)
                }
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
                <SplashView />
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
