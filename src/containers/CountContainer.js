import React, { Component } from 'react'
import { connect } from 'react-redux'
import CountView from '../views/CountView'

class CountContainer extends Component {

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

  })
}

const mapDispatchToProps = dispatch => ({

})

export default connect(mapStateToProps, mapDispatchToProps)(CountContainer)
