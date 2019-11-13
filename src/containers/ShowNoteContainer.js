import React, { Component } from 'react'
import{ TouchableOpacity, Text } from 'react-native'
import { connect } from 'react-redux'
import { Icon } from 'native-base'

import ShowNoteView from '../views/ShowNoteView'
import { Fonts } from '../styles/App'

class ShowNoteContainer extends Component {

  static navigationOptions = ({ navigation, navigationOptions }) => {
    const { params } = navigation.state

    return {
      title: params ? params.otherParam : 'My love - The Song we singed',

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
        fontSize: 25,
      },
      headerRight: <TouchableOpacity
        onPress={() => navigation.navigate('Users')}
        style={{
            backgroundColor: 'transparent',
            alignSelf: 'center',
            marginRight: 18,
            shadowColor: 0,
            elevation: 0,
        }}>
        <Icon name="md-create" style={{ color: '#ff4081' }} />
      </TouchableOpacity>
    }
  }

  render() {

    return (
      <ShowNoteView
        {...this.props}
        {...this.state}
      />
      
      // <Text>itemId: {JSON.stringify(this.props.navigation.getParam('itemId'))}</Text>
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
