import React, { Component } from 'react'
import { TouchableOpacity } from 'react-native'
import { connect } from 'react-redux'
import { Icon, Left } from 'native-base'
import AsyncStorage from '@react-native-community/async-storage'

import { Colors, Fonts } from '../styles/App'
import NoteView from '../views/NoteView'
import {
  requestGetListNotes,
  requestGetMoreNotes,
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
    this.state = {
      pageData: {
        page: 1,
        size: 10
      },
      loadmore: false
    }
  }

  async componentDidMount() {
    this.props.requestGetListNotes(this.state.pageData)
    this.userID = await AsyncStorage.getItem(USER_ID_ASYNCSTORAGE)
  }

  getNoteInfo = (id) => {
    this.props.requestGetInfoNote(id)
  }

  deleteNote = (id) => {
    this.props.requestDeleteNote(id, this.state.pageData)
  }

  getMore = async () => {
    this.setState({
      loadmore: true,
      pageData: {
        page: this.state.pageData.page,
        size: this.state.pageData.size + 10,
      }
    })

    await this.props.requestGetMoreNotes({ page: this.state.pageData.page, size: this.state.pageData.size + 10 })

    this.setState({
      loadmore: false
    })
  }

  render() {
    return (
      <NoteView
        {...this.props}
        {...this.state}
        userId={this.userID}
        getNoteInfo={(id) => this.getNoteInfo(id)}
        deleteNote={(id) => this.deleteNote(id)}
        getMore={() => this.getMore()}
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
  requestGetListNotes: (pageData) => dispatch(requestGetListNotes(pageData)),
  requestGetMoreNotes: (pageData) => dispatch(requestGetMoreNotes(pageData)),
  requestGetInfoNote: (id) => dispatch(requestGetInfoNote(id)),
  requestDeleteNote: (id, pageData) => dispatch(requestDeleteNote(id, pageData)),
})

export default connect(mapStateToProps, mapDispatchToProps)(NoteContainer)
