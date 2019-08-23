import React, { Component } from 'react'
import { connect } from 'react-redux'
import DemoView from '../views/DemoView'

class DemoContainer extends Component {

  onClick = () => {
    this.props.history.push('/xyz/')
  }

  render() {
    return (
      <DemoView
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

export default connect(mapStateToProps, mapDispatchToProps)(DemoContainer)
