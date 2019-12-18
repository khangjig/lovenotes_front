import React, { Component } from 'react'
import { connect } from 'react-redux'
import { Right } from 'native-base'

import { Fonts, Colors } from '../styles/App'
import {
  requestGetUsers,
  requestGetAvatarUsers,
  requestUpdateAvatarUsers,
  requestEditLoveDay,
  requestEditBirthday,
  requestEditUsername
} from '../actions/UserAction'
import UserView from '../views/UserView'

class UserContainer extends Component {
  static navigationOptions = ({ navigation, navigationOptions }) => {
    const { params } = navigation.state

    return {
      title: params ? params.otherParam : 'Me',
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
      headerRight: <Right />,
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

  changeBirthday = (birthday) =>{
    this.props.requestEditBirthday(birthday)
  }

  render() {
    return (
        <UserView
          {...this.props}
          {...this.state}
          changeAvatar={(image) => this.changeAvatar(image)}
          changeUsername={(name) => this.changeUsername(name)}
          changeLoveDay={(loveday) => this.changeLoveDay(loveday)}
          changeBirthday={(birthday) => this.changeBirthday(birthday)}
        />
    )
  }
}

const mapStateToProps = state => {
  return {
    ...state.userReducer,
  }
}

const mapDispatchToProps = dispatch => ({
  requestGetUsers: () => dispatch(requestGetUsers()),
  requestUpdateAvatarUsers: (image) => dispatch(requestUpdateAvatarUsers(image)),
  requestGetAvatarUsers: () => dispatch(requestGetAvatarUsers()),
  requestEditUsername: (name) => dispatch(requestEditUsername(name)),
  requestEditLoveDay: (loveDay) => dispatch(requestEditLoveDay(loveDay)),
  requestEditBirthday: (birthday) => dispatch(requestEditBirthday(birthday)),
})

export default connect(mapStateToProps, mapDispatchToProps)(UserContainer)
