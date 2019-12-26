import React, { Component } from 'react'
import { View } from 'react-native'
import { connect } from 'react-redux'
import { Right } from 'native-base'

import { Fonts, Colors } from '../styles/App'
import Toast from '../components/ToastComponent'
import UserView from '../views/UserView'
import {
  requestGetUsers,
  requestGetAvatarUsers,
  requestUpdateAvatarUsers,
  requestEditLoveDay,
  requestEditBirthday,
  requestEditUsername,
  requestGetNotification,
  requestSendSyncCode,
  requestActivedSyncCode,
  requestDenySyncCode,
  requestCancelSyncCode
} from '../actions/UserAction'

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

  constructor(props) {
    super(props)
    this.state = {
      visible: false
    }
  }

  hideToast = () => {
    this.setState({
      visible: false
    })
  }

  componentDidMount() {
    this.props.requestGetUsers()
    this.props.requestGetAvatarUsers()
    this.props.requestGetNotification()
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

  changeBirthday = (birthday) => {
    this.props.requestEditBirthday(birthday)
  }

  sendSyncCode = async (syncCode) => {
    await this.props.requestSendSyncCode(syncCode)
    this.setState({
      visible: true
    },() => this.hideToast())
  }

  activedSyncCode = async (id) => {
    await this.props.requestActivedSyncCode(id)
    !this.props.isLoadingActivedSyncCode ? this.props.navigation.navigate('Login') : null
  }

  denySyncCode = (id) => {
    this.props.requestDenySyncCode(id)
  }

  cancelSyncCode = async (partnerID) => {
    await this.props.requestCancelSyncCode(partnerID)
    !this.props.isLoadingCancelSyncCode ? this.props.navigation.navigate('Login') : null
  }


  render() {
    return (
      <>
        <UserView
          {...this.props}
          {...this.state}
          changeAvatar={(image) => this.changeAvatar(image)}
          changeUsername={(name) => this.changeUsername(name)}
          changeLoveDay={(loveday) => this.changeLoveDay(loveday)}
          changeBirthday={(birthday) => this.changeBirthday(birthday)}
          sendSyncCode={(syncCode) => this.sendSyncCode(syncCode)}
          activedSyncCode={(id) => this.activedSyncCode(id)}
          denySyncCode={(id) => this.denySyncCode(id)}
          cancelSyncCode={(partnerID) => this.cancelSyncCode(partnerID)}
        />
        <Toast visible={this.state.visible} message={this.props.message} />
      </>
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
  requestGetNotification: () => dispatch(requestGetNotification()),
  requestSendSyncCode: (syncCode) => dispatch(requestSendSyncCode(syncCode)),
  requestActivedSyncCode: (id) => dispatch(requestActivedSyncCode(id)),
  requestDenySyncCode: (id) => dispatch(requestDenySyncCode(id)),
  requestCancelSyncCode: (partnerID) => dispatch(requestCancelSyncCode(partnerID))
})

export default connect(mapStateToProps, mapDispatchToProps)(UserContainer)
