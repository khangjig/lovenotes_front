import React, { Component } from 'react'
import{ TouchableOpacity } from 'react-native'
import { connect } from 'react-redux'
import { Icon } from 'native-base'

import NoteWrittingView from '../views/NoteWrittingView'

class NoteWrittingContainer extends Component {

  static navigationOptions = ({ navigation, navigationOptions }) => {
    const { params } = navigation.state

    return {
      title: params ? params.otherParam : 'Writting...',

      headerRight: <TouchableOpacity
        style={{
            backgroundColor: 'transparent',
            alignSelf: 'center',
            marginRight: 18,
            shadowColor: 0,
            elevation: 0,
        }}>
        <Icon name="md-notifications" style={{ color: '#ff4081' }} />
      </TouchableOpacity>
    }
  }

  render() {
    return (
      <NoteWrittingView
        {...this.props}
        {...this.state}
      />
    )
  }
}

const mapStateToProps = state => {
  return ({

  })
}

const mapDispatchToProps = dispatch => ({

})

export default connect(mapStateToProps, mapDispatchToProps)(NoteWrittingContainer)
