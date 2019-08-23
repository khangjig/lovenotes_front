import React, { Component } from 'react'
import { connect } from 'react-redux'
import DemoView2 from '../views/DemoView2'

class DemoContainer2 extends Component {
    
    onClick = () => {
        this.props.history.push('/')
    }

    render() {
        return (
            <DemoView2
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

export default connect(mapStateToProps, mapDispatchToProps)(DemoContainer2)
