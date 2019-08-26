import React, { Component } from 'react'
import { View, Text } from 'react-native'
import { connect } from 'react-redux'
import { requestGetUsers } from '../actions/DemoAction'

class MainContainer extends Component {

  render() {
    return (
      <View>
        <Text>
          temp
        </Text>
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
