import React, { Component } from 'react'
import { connect } from 'react-redux'

import RegisterView from '../views/RegisterView'

class RegisterContainer extends Component {
    render() {
        return (
            <RegisterView
                {...this.props}
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

export default connect(mapStateToProps, mapDispatchToProps)(RegisterContainer)
