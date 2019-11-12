import React, { Component } from 'react'
import {
    Container,
    Form,
    Input,
    Item,
    Card,
    Right,
    Icon,
    Textarea,
    Thumbnail,
    Body,
    Content,
    CardItem,
    View,
} from 'native-base'
import { TouchableOpacity, Text, Alert, ToastAndroid } from 'react-native'
import { ImagePicker } from 'react-native-image-picker'

import { Fonts, Colors } from '../styles/App'
import { Toast } from '../components/ToastComponent'

class NoteWrittingView extends Component {

    constructor(props) {
        super(props)
        this.state = {
            allowed: null,
            visible: false
        }
        this.chooseImageFromGallery = this.chooseImageFromGallery.bind(this)
    }

    chooseImageFromGallery() {
        ImagePicker.openSelectDialog({}, imageUri => {
            this.setState({ image: imageUri })
        }, error => console.error(error))
    }

    showAlert = () => {
        Alert.alert(
            'Try again',
            'Camera not working',
            [
                { text: 'Cancel', onPress: () => console.log('Cancel Pressed'), style: 'cancel' },
                { text: 'OK', onPress: () => console.log('OK Pressed') },
            ],
            { cancelable: false }
        )
    }

    showToast = () => {
        this.setState({
            visible: true
        }, () => {
            this.hideToast()
        })
    }

    hideToast = () => {
        this.setState({
            visible: false
        })
    }

    render() {
        return (
            <Container>
                <Toast visible={this.state.visible} message= 'Saved' />
                <Content padder>
                    <Form>
                        <Item>
                            <Input placeholder=" Title . . . " style={{ fontFamily: Fonts.fiolexGirl }}/>
                        </Item>
                    </Form>
                    <Card>
                        <CardItem>
                            <Body>
                                <Thumbnail square large source={require('../assets/images/travel4.jpg')} />
                            </Body>
                            <Right>
                                <TouchableOpacity style={{ marginTop: 10, }}
                                    onPress={showAlert}>
                                    <Icon name="md-camera" style={{ color: 'white', backgroundColor: Colors.mainColor, padding: 20, borderRadius: 30 }} />
                                </TouchableOpacity>
                                <View style={{ flex: 1 }}>
                                    {this.state.image ? <Image style={{ flex: 1 }} source={{ uri: this.state.image }}></Image> : null}
                                </View>
                            </Right>
                        </CardItem>
                    </Card>
                    <Form>
                        <Textarea rowSpan={12} bordered placeholder=" Content . . . " style={{ fontFamily: Fonts.fiolexGirl }} />
                    </Form>
                    <TouchableOpacity
                        style={{
                            backgroundColor: Colors.mainColor,
                            alignSelf: 'center',
                            marginTop: 15,
                            shadowColor: 0,
                            elevation: 0,
                            borderRadius: 25,
                            width: 100,
                        }}
                        onPress={this.showToast}>
                        <Text
                            style={{
                                fontFamily: Fonts.fiolexGirl,
                                textAlign: 'center',
                                fontSize: 20,
                                margin: 10,
                                color: 'white'
                            }}>
                            Save
                        </Text>
                    </TouchableOpacity>

                </Content>
            </Container>
        )
    }
}
export default NoteWrittingView
