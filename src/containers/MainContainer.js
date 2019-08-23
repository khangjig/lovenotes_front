import React, { Component } from 'react'
import {
  View
} from 'react-native'
import { connect } from 'react-redux'
import { Switch, Route } from 'react-router-native'
import { requestGetUsers } from '../actions/DemoAction'
import DemoContainer from './DemoContainer'
import DemoContainer2 from './DemoContainer2'

class MainContainer extends Component {

  render() {
    return (
      <View>
        <Switch>
          <Route exact path='/' component={DemoContainer} />
          <Route exact path='/xyz' component={DemoContainer2} />
        </Switch>
      </View>
    )
  }
}
const mapStateToProps = state => {
  return ({
    ...state.demoReducer
  })
}

const mapDispatchToProps = dispatch => ({
  requestGetUsers: () => dispatch(requestGetUsers())
})

export default connect(mapStateToProps, mapDispatchToProps)(MainContainer)
