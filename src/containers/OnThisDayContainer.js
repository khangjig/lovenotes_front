import React, { Component } from 'react'
import { connect } from 'react-redux'
import OnThisDayView from '../views/OnThisDay'

class OnThisDayContainer extends Component {

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
