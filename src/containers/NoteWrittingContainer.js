import React, { Component } from 'react'
import { TouchableOpacity } from 'react-native'
import { connect } from 'react-redux'
import { Icon } from 'native-base'

import { Fonts, Colors } from '../styles/App'
import NoteWrittingView from '../views/NoteWrittingView'
import {
  requestAddNote
} from '../actions/NoteAction'


class NoteWrittingContainer extends Component {

  constructor(props) {
    super(props)
    this.state = {
      notification: false
    }
    this.status = false
  }

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
        onPress={navigation.getParam('notifi')}
        style={{
          backgroundColor: 'transparent',
          alignSelf: 'center',
          marginRight: 18,
          shadowColor: 0,
          elevation: 0,
        }}>
        <Icon name="md-notifications" style={{ color: Colors.greyColor }} />
      </TouchableOpacity>
    }
  }

  componentDidMount() {
    this.props.navigation.setParams({ notifi: this.turnONOFFNotification })
  }

  addNote = (title, content, listImage) => {
    this.props.requestAddNote(title, content, listImage)
  }

  turnONOFFNotification = () => {
    console.log("turnONOFFNotification ")
  }

  render() {
    return (
      <NoteWrittingView
        {...this.props}
        {...this.state}
        addNote={(title, content, listImage) => this.addNote(title, content, listImage)}
      />
    )
  }
}

const mapStateToProps = state => {
  return ({
    ...state.noteReducer,
  })
}

const mapDispatchToProps = dispatch => ({
  requestAddNote: (title, content, listImage) => dispatch(requestAddNote(title, content, listImage)),
})

export default connect(mapStateToProps, mapDispatchToProps)(NoteWrittingContainer)
