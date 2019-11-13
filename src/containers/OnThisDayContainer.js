import React, { Component } from 'react'
import { connect } from 'react-redux'

import { Fonts } from '../styles/App'
import OnThisDayView from '../views/OnThisDayView'


class OnThisDayContainer extends Component {

    static navigationOptions = ({ navigation, navigationOptions }) => {
        const { params } = navigation.state

        return {
            title: params ? params.otherParam : 'On this day !',
            headerTitleStyle: {
                textAlign: 'center',
                flex: 1,
                fontFamily: Fonts.rixLoveFool,
                fontWeight: '300',
                color: '#ff4081',
                fontWeight: undefined,
                fontSize: 30,
            },
            headerStyle: {
                backgroundColor: 'white',
                shadowOpacity: 0,
                elevation: 0,
                borderBottomWidth: 0.7,
                borderColor: '#ff4081',
            }
        }
    }

    render() {
        return (
            <OnThisDayView
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

export default connect(mapStateToProps, mapDispatchToProps)(OnThisDayContainer)
