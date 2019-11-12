import React, { Component } from 'react'
import { connect } from 'react-redux'
import NoteWrittingView from '../views/NoteWrittingView'

class NoteWrittingContainer extends Component {

  render() {
    return (
      <NoteWrittingView
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

export default connect(mapStateToProps, mapDispatchToProps)(NoteWrittingContainer)
