import React, { Component } from 'react'
import { connect } from 'react-redux'
import { Right } from 'native-base';

import { Fonts, Colors } from '../styles/App'
import UserView from '../views/UserView'


class UserContainer extends Component {

  static navigationOptions = ({ navigation, navigationOptions }) => {
    const { params } = navigation.state

    return {
      title: params ? params.otherParam : 'Me',
      headerTintColor: '#ff4081',
      headerStyle: {
        backgroundColor: 'white',
        shadowOpacity: 0,
        elevation: 0,
        borderBottomWidth: 0.7,
        borderColor: '#ff4081',
      },
      headerTitleStyle: {
        textAlign: 'center',
        flex: 1,
        fontFamily: Fonts.rixLoveFool,
        fontWeight: '300',
        color: '#ff4081',
        fontWeight: undefined,
        fontSize: 30,
      },
      headerRight: <Right />
    }
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

  })
}

const mapDispatchToProps = dispatch => ({

})

export default connect(mapStateToProps, mapDispatchToProps)(UserContainer)
