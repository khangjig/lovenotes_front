import axios from 'axios'

import { ACCESS_TOKEN_ASYNCSTORAGE, REFRESH_TOKEN_ASYNCSTORAGE, LAUCHED } from '../configs/config'

export const setInterceptors = async () => {
    try {
        const currentToken = await AsyncStorage.getItem(ACCESS_TOKEN_ASYNCSTORAGE)
        const refreshToken = await AsyncStorage.getItem(LAUCHED)

        console.log(currentToken)
        console.log(refreshToken)

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
                    url: 'http://localhost:8080/auth/refeshtoken',
                    method: "post",
                    data: {
                        "refreshToken": refreshToken
                    },
                    headers: {
                    }
                })
                    .then(async (res) => {
                        await AsyncStorage.setItem(ACCESS_TOKEN_ASYNCSTORAGE, res.data.accessToken)
                        await AsyncStorage.setItem(REFRESH_TOKEN_ASYNCSTORAGE, res.data.refreshToken)

                        axios.defaults.headers.common['Authorization'] = 'Bearer ' + res.data.accessToken
                        originalRequest.headers['Authorization'] = 'Bearer ' + res.data.accessToken

                        return axios(originalRequest)

                    }).catch(err => { })
            }
            return Promise.reject(error)
        })

    } catch (e) {
        console.log(e)
    }


    // if (currentToken !== null) {
    //     axios.defaults.headers.common['Authorization'] = 'Bearer ' + currentToken
    // }

    // axios.interceptors.response.use(function (response) {
    //     return response
    // }, function (error) {

    //     const originalRequest = error.config

    //     if (error.response && error.response.status === 401 && !originalRequest._retry) {
    //         originalRequest._retry = true

    //         return axios.request({
    //             url: 'http://localhost:8080/auth/refeshtoken',
    //             method: "post",
    //             data: {
    //                 "refreshToken": refreshToken
    //             },
    //             headers: {
    //             }
    //         })
    //             .then((res) => {
    //                 // try {
    //                 //     await AsyncStorage.setItem(ACCESS_TOKEN_ASYNCSTORAGE, res.data.accessToken)
    //                 //     await AsyncStorage.setItem(REFRESH_TOKEN_ASYNCSTORAGE, res.data.refreshToken)
    //                 // } catch (e) {
    //                 //     console.log(e)
    //                 // }

    //                 axios.defaults.headers.common['Authorization'] = 'Bearer ' + res.data.accessToken
    //                 originalRequest.headers['Authorization'] = 'Bearer ' + res.data.accessToken

    //                 return axios(originalRequest)

    //             }).catch(err => { })
    //     }
    //     return Promise.reject(error)
    // })
}