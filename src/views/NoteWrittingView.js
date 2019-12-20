import React, { Component } from 'react'
import { Container, Form, Input, Item, Card, Right, Icon, Textarea, Thumbnail, Body, Content, CardItem, View, } from 'native-base'
import { TouchableOpacity, Text, Alert, ToastAndroid, TouchableHighlight } from 'react-native'
import ImagePicker from 'react-native-image-picker'

import { Fonts, Colors } from '../styles/App'
import Toast from '../components/ToastComponent'


const options = {
    title: 'Select Image',
    storageOptions: {
        skipBackup: true,
        path: 'images',
    },
}

class NoteWrittingView extends Component {

    constructor(props) {
        super(props)
        this.state = {
            visible: false,
            reset: null,
            index: 0
        }
    }

    static defaultProps = {
        listImage: []
    }

    chooseImageFromGallery = () => {
        ImagePicker.showImagePicker(options, (response) => {

            if (response.didCancel) {
                console.log('User cancelled image picker')
            } else if (response.error) {
                console.log('ImagePicker Error: ', response.error)
            } else if (response.customButton) {
                console.log('User tapped custom button: ', response.customButton)
            } else {

                this.props.listImage.push({
                    uri: response.uri,
                    index: this.state.index
                })

                this.setState({
                    index: this.state.index + 1
                })
            }
        })
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

    submitForm = () => {
        this.props.addNote(this.props.listImage)
    }

    deleteImage = (e) => {
        delete this.props.listImage[e]
        this.setState({
            reset: null
        })
    }

    render() {
        console.log(this.props)
        return (
            <Container>
                <Toast visible={this.state.visible} message='Saved' />
                <Content padder>
                    <Form>
                        <Item>
                            <Input placeholder=" Title . . . " style={{ fontFamily: Fonts.fiolexGirl }} />
                        </Item>
                    </Form>
                    <Card>
                        <CardItem>
                            <Body style={{ flexDirection: 'row', flexWrap: 'wrap' }}>
                                {
                                    this.props.listImage !== null ?
                                        this.props.listImage.map(x =>
                                            <TouchableHighlight key={x.index} onPress={() => this.deleteImage(x.index)}>
                                                <Thumbnail square large source={{ uri: x.uri }} style={{ margin: 1 }} />
                                            </TouchableHighlight>
                                        ) : null
                                }

                            </Body>
                            <Right>
                                <TouchableOpacity
                                    onPress={this.chooseImageFromGallery}>
                                    <Icon name="md-camera" style={{ color: 'white', backgroundColor: Colors.mainColor, padding: 20, borderRadius: 30 }} />
                                </TouchableOpacity>
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
                        onPress={this.submitForm}>
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
