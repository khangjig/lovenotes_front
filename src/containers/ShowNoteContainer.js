import React, { Component } from 'react'
import { TouchableOpacity } from 'react-native'
import { connect } from 'react-redux'
import { Icon } from 'native-base'

import ShowNoteView from '../views/ShowNoteView'
import { Fonts, Colors } from '../styles/App'
import {
  requestGetInfoNote,
  requestGetNoteImage
} from '../actions/NoteAction'

class ShowNoteContainer extends Component {

  static navigationOptions = ({ navigation, navigationOptions }) => {
    const { params } = navigation.state

    return {
      title: params ? params.otherParam : 'My love',

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
        fontSize: 25,
      },
      headerRight: <TouchableOpacity
        onPress={() => navigation.navigate('Users')}
        style={{
          backgroundColor: 'transparent',
          alignSelf: 'center',
          marginRight: 18,
          shadowColor: 0,
          elevation: 0,
        }}>
        <Icon name="md-create" style={{ color: Colors.mainColor }} />
      </TouchableOpacity>
    }
  }

  componentDidMount() {
    this.props.requestGetInfoNote(this.props.navigation.state.params.itemId)
    this.props.requestGetNoteImage(this.props.navigation.state.params.itemId)
  }

  render() {
    return (
      <ShowNoteView
        {...this.props}
        {...this.state}
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
  requestGetInfoNote: (id) => dispatch(requestGetInfoNote(id)),
  requestGetNoteImage: (id) => dispatch(requestGetNoteImage(id))
})

export default connect(mapStateToProps, mapDispatchToProps)(ShowNoteContainer)
