import React, { Component } from 'react'
import { connect } from 'react-redux'

import { Fonts, Colors } from '../styles/App'
import OnThisDayView from '../views/OnThisDayView'
import {
    requestGetNoteOnThisDay,
    requestGetNoteByWeek
  } from '../actions/NoteAction'

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
                color: Colors.mainColor,
                fontWeight: undefined,
                fontSize: 30,
            },
            headerStyle: {
                backgroundColor: 'white',
                shadowOpacity: 0,
                elevation: 0,
                borderBottomWidth: 0.7,
                borderColor: Colors.mainColor,
            }
        }
    }

    componentDidMount()
    {
        this.props.requestGetNoteOnThisDay()
        this.props.requestGetNoteByWeek()
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
        ...state.noteReducer,
    })
}

const mapDispatchToProps = dispatch => ({
    requestGetNoteOnThisDay:()=>dispatch(requestGetNoteOnThisDay()),
    requestGetNoteByWeek:()=>dispatch(requestGetNoteByWeek()),
})

export default connect(mapStateToProps, mapDispatchToProps)(OnThisDayContainer)
