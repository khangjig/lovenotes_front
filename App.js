import React, { Component } from 'react'
import { Provider } from 'react-redux'
import store from './src/store'

import { setInterceptors } from './src/helpers/Interceptor'
import AppContainer from './src/navigations/AppNavigation'

setInterceptors()
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
