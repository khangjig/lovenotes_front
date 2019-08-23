import React, { Component } from 'react'
import {
    View,
    Text,
    Button
} from 'react-native'

class DemoView2 extends Component {
    
    onClick = () => {
        this.props.history.push('/')
    }
    render() {
        return (
            <View>
                <Text>DemoContainer2</Text>
                <Text>DemoContainer2</Text>
                <Text>DemoContainer2</Text>
                <Text>DemoContainer2</Text>
                <Text>DemoContainer2</Text>
                <Button title="Clicked" onPress={this.onClick} />
            </View>
        )
    }
}
export default DemoView2
