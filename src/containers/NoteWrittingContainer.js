import React, { Component } from 'react'
import{ TouchableOpacity } from 'react-native'
import { connect } from 'react-redux'
import { Icon } from 'native-base'

import { Fonts, Colors } from '../styles/App'
import NoteWrittingView from '../views/NoteWrittingView'

class NoteWrittingContainer extends Component {

  static navigationOptions = ({ navigation, navigationOptions }) => {
    const { params } = navigation.state

    return {
      title: params ? params.otherParam : 'Writting...',
      headerTintColor: Colors.mainColor,
      headerStyle: {
          backgroundColor: 'white',
          shadowOpacity: 0,
          elevation: 0,
          borderBottomWidth: 0.7,
          borderColor: Colors.mainColor,
      },
      headerTitleStyle: {
          textAlign: 'center',
          flex: 1,
          fontFamily: Fonts.rixLoveFool,
          fontWeight: '300',
          color: Colors.mainColor,
          fontWeight: undefined,
          fontSize: 30,
      },
      headerRight: <TouchableOpacity
          style={{
              backgroundColor: 'transparent',
              alignSelf: 'center',
              marginRight: 18,
              shadowColor: 0,
              elevation: 0,
          }}>
          <Icon name="md-notifications" style={{ color: Colors.mainColor }} />
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
