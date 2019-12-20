import React, { Component } from 'react'
import { TouchableOpacity } from 'react-native'
import { connect } from 'react-redux'
import { Icon, Left } from 'native-base'
import AsyncStorage from '@react-native-community/async-storage'

import { Colors, Fonts } from '../styles/App'
import NoteView from '../views/NoteView'
import {
  requestGetListNotes,
  requestAddNote,
  requestGetInfoNote,
  requestDeleteNote
} from '../actions/NoteAction'


import { USER_ID_ASYNCSTORAGE } from '../configs/config'

class NoteContainer extends Component {

  static navigationOptions = ({ navigation, navigationOptions }) => {
    const { params } = navigation.state

    return {

      title: params ? params.otherParam : 'Notes',

      headerTitleStyle: {
        textAlign: 'center',
        flex: 1,
        fontFamily: Fonts.rixLoveFool,
        fontWeight: '300',
        color: Colors.mainColor,
        fontWeight: undefined,
        fontSize: 30,
      },

      headerLeft: <Left />,

      headerRight: <TouchableOpacity
        onPress={() => navigation.navigate('Users')}
        style={{
          backgroundColor: 'transparent',
          alignSelf: 'center',
          marginRight: 18,
          shadowColor: 0,
          elevation: 0,
        }}>
        <Icon name="md-person" style={{ color: Colors.mainColor }} />
      </TouchableOpacity>
    }
  }

  constructor(props) {
    super(props)
    this.userID = null
  }

  async componentDidMount() {
    this.props.requestGetListNotes()
    this.userID = await AsyncStorage.getItem(USER_ID_ASYNCSTORAGE)
  }

  getNoteInfo = (id) => {
    this.props.requestGetInfoNote(id)
  }

  addNote = () => {
    this.props.requestAddNote()
  }

  deleteNote = (id) => {
    this.props.requestDeleteNote(id)
  }

  render() {
    return (
      <NoteView
        {...this.props}
        {...this.state}
        userId={this.userID}
        getNoteInfo={(id) => this.getNoteInfo(id)}
        addNote={() => this.addNote()}
        deleteNote={(id) => this.deleteNote(id)}
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
  requestGetListNotes: () => dispatch(requestGetListNotes()),
  requestAddNote: () => dispatch(requestAddNote()),
  requestGetInfoNote: (id) => dispatch(requestGetInfoNote(id)),
  requestDeleteNote: (id) => dispatch(requestDeleteNote(id)),
})

export default connect(mapStateToProps, mapDispatchToProps)(NoteContainer)
