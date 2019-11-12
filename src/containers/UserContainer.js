import React, { Component } from 'react'
import { connect } from 'react-redux'
import UserView from '../views/UserView'

class UserContainer extends Component {

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
