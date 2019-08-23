import React, { Component } from 'react'
import {
    View,
    Text,
    Button
} from 'react-native'

class DemoView extends Component {
    
    onClick = () => {
        this.props.history.push('/xyz')
    }

    render() {
        return (
            <View>
                <Text>DemoContainer1</Text>
                <Text>DemoContainer1</Text>
                <Text>DemoContainer1</Text>
                <Text>DemoContainer1</Text>
                <Text>DemoContainer1</Text>
                <Button title="Clicked" onPress={this.onClick} />
            </View>
        )
    }
}
export default DemoView
