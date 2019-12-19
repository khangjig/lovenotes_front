import React, { Component } from 'react'
import { connect } from 'react-redux'

import { Fonts, Colors } from '../styles/App'
import CountView from '../views/CountView'
import {
  requestGetUsers,
  requestGetAvatarUsers,
  requestEditLoveDay,
  requestUpdateAvatarUsers,
  requestEditUsername
} from '../actions/UserAction'

class CountContainer extends Component {

  static navigationOptions = ({ navigation, navigationOptions }) => {
    const { params } = navigation.state

    return {
      title: params ? params.otherParam : 'How long ?',
      headerTitleStyle: {
        textAlign: 'center',
        flex: 1,
        fontFamily: Fonts.rixLoveFool,
        fontWeight: '300',
        color: Colors.mainColor,
        fontWeight: undefined,
        fontSize: 30,
      },
      headerStyle: {
        backgroundColor: 'white',
        shadowOpacity: 0,
        elevation: 0,
        borderBottomWidth: 0.7,
        borderColor: Colors.mainColor,
      }
    }
  }

  componentDidMount() {
    this.props.requestGetUsers()
    this.props.requestGetAvatarUsers()
  }

  changeAvatar = (image) => {
    this.props.requestUpdateAvatarUsers(image)
  }

  changeUsername = (name) => {
    this.props.requestEditUsername(name)
  }

  changeLoveDay = (loveday) => {
    this.props.requestEditLoveDay(loveday)
  }

  render() {
    return (
      <CountView
        {...this.props}
        {...this.state}
      />
    )
  }
}

const mapStateToProps = state => {
  return ({
    ...state.userReducer,
  })
}

const mapDispatchToProps = dispatch => ({
  requestGetUsers: () => dispatch(requestGetUsers()),
  requestUpdateAvatarUsers: (image) => dispatch(requestUpdateAvatarUsers(image)),
  requestGetAvatarUsers: () => dispatch(requestGetAvatarUsers()),
  requestEditUsername: (name) => dispatch(requestEditUsername(name)),
  requestEditLoveDay: (loveDay) => dispatch(requestEditLoveDay(loveDay)),
  requestEditBirthday: (birthday) => dispatch(requestEditBirthday(birthday)),
})

export default connect(mapStateToProps, mapDispatchToProps)(CountContainer)
