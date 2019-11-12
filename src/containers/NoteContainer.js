import React, { Component } from 'react'
import { connect } from 'react-redux'
import NoteView from '../views/NoteView'

class NoteContainer extends Component {

  render() {
    return (
      <NoteView
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

export default connect(mapStateToProps, mapDispatchToProps)(NoteContainer)
