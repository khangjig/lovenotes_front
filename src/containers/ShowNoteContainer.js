import React, { Component } from 'react'
import { connect } from 'react-redux'
import ShowNoteView from '../views/ShowNoteView'

class ShowNoteContainer extends Component {

  render() {
    return (
      <ShowNoteView
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

export default connect(mapStateToProps, mapDispatchToProps)(ShowNoteContainer)
