import React, { Component } from 'react'
import { connect } from 'react-redux'
import { Right } from 'native-base';

import { Fonts, Colors } from '../styles/App'
import { requestGetUsers } from '../actions/UserAction'
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
      headerRight: <Right />
    }
  }

  componentDidMount(){
    this.props.requestGetUsers()
  }

  render() {
    return (
      <UserView
        {...this.props}
        {...this.state}
      />
    )
  }
}

const mapStateToProps = state => {
  return ({
    ...state.userReducer
  })
}

const mapDispatchToProps = dispatch => ({
  requestGetUsers: () => dispatch(requestGetUsers())
})

export default connect(mapStateToProps, mapDispatchToProps)(UserContainer)
