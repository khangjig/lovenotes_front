import React, { Component } from 'react'
import { Provider } from 'react-redux'
import AppContainer from './src/navigations/AppNavigation'
import store from './src/store'

class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <AppContainer />
      </Provider>
    )
  }
}
export default App
