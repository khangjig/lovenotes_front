import React, { Component } from 'react'
import { Provider } from 'react-redux'
import { NativeRouter, Route } from 'react-router-native'
import MainContainer from './src/containers/MainContainer'
import store from './src/store'


class App extends Component {
  render() {
    return (
      <NativeRouter>
        <Provider store={store}>
            <Route path="/" component={MainContainer} />
        </Provider>
      </NativeRouter>
    )
  }
}
export default App
