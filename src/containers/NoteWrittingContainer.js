import React, { Component } from 'react'
import { View } from 'react-native'
import { connect } from 'react-redux'

import { Fonts, Colors } from '../styles/App'
import { requestAddNote } from '../actions/NoteAction'
import NoteWrittingView from '../views/NoteWrittingView'
import Toast from '../components/ToastComponent'


class NoteWrittingContainer extends Component {

  constructor(props) {
    super(props)
    this.state = {
      allowed: null,
      visible: false
    }
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
      }
    }
  }

  hideToast = () => {
    this.setState({
      visible: false
    })
  }

  addNote = async (title, content, listImage, date, notifi) => {

    await this.props.requestAddNote(title, content, listImage, date, notifi, this.props.navigation.state.params.pageData)

    if (this.props.messages !== null) {
      this.setState({
        visible: true
      }, () => {
        this.hideToast()
        this.props.navigation.goBack()
      })
    }
  }

  render() {
    return (
        <NoteWrittingView
          {...this.props}
          {...this.state}
          addNote={(title, content, listImage, date, notifi) => this.addNote(title, content, listImage, date, notifi)}
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
  requestAddNote: (title, content, listImage, date, notifi, pageData) => dispatch(requestAddNote(title, content, listImage, date, notifi, pageData)),
})

export default connect(mapStateToProps, mapDispatchToProps)(NoteWrittingContainer)
