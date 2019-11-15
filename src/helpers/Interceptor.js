import axios from 'axios'
import AsyncStorage from '@react-native-community/async-storage'

import { ACCESS_TOKEN_ASYNCSTORAGE, REFRESH_TOKEN_ASYNCSTORAGE } from '../configs/config'


export const setInterceptors = async () => {
    try {
        const currentToken = await AsyncStorage.getItem(ACCESS_TOKEN_ASYNCSTORAGE)
        const currentRefreshToken = await AsyncStorage.getItem(REFRESH_TOKEN_ASYNCSTORAGE)

        if (currentToken !== null) {
            axios.defaults.headers.common['Authorization'] = 'Bearer ' + currentToken
        }

        axios.interceptors.response.use(function (response) {
            return response
        }, function (error) {
            const originalRequest = error.config
            if (error.response && error.response.status === 401 && !originalRequest._retry) {
                originalRequest._retry = true
                return axios.request({
                    url: 'http://192.168.37.102:3000/auth/refeshtoken',
                    method: "post",
                    data: {
                        accessToken : currentToken,
                        refreshToken: currentRefreshToken
                    }
                })
                    .then(async (res) => {
                        await AsyncStorage.setItem(ACCESS_TOKEN_ASYNCSTORAGE, res.data.accessToken)
                        await AsyncStorage.setItem(REFRESH_TOKEN_ASYNCSTORAGE, res.data.refreshToken)

                        axios.defaults.headers.common['Authorization'] = 'Bearer ' + res.data.accessToken
                        originalRequest.headers['Authorization'] = 'Bearer ' + res.data.accessToken

                        return axios(originalRequest)

                    }).catch(err => { 
                        console.log(err)
                    })
            }
            return Promise.reject(error)
        })

    } catch (e) {
        console.log(e)
    }
}