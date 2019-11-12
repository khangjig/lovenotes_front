import React, { Component } from 'react'
import{ TouchableOpacity } from 'react-native'
import { connect } from 'react-redux'
import { Icon } from 'native-base'

import ShowNoteView from '../views/ShowNoteView'

class ShowNoteContainer extends Component {

  static navigationOptions = ({ navigation, navigationOptions }) => {
    const { params } = navigation.state

    return {
      title: params ? params.otherParam : 'My love - The Song we singed',

      headerRight: <TouchableOpacity
      style={{
          backgroundColor: 'transparent',
          alignSelf: 'center',
          marginRight: 18,
          shadowColor: 0,
          elevation: 0,
      }}>
        <Icon name="md-more" style={{ color: '#ff4081' }} />
    </TouchableOpacity>
    }
  }

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
