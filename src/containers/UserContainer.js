import React, { Component } from 'react'
import { connect } from 'react-redux'
import UserView from '../views/UserView'

class UserContainer extends Component {

  static navigationOptions = ({ navigation, navigationOptions }) => {
    const { params } = navigation.state

    return {
      title: params ? params.otherParam : 'My love - The Song we singed',

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
