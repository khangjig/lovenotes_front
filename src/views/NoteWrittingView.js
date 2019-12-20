import React, { Component } from 'react'
import { Container, Form, Input, Item, Card, Right, Icon, Textarea, Thumbnail, Body, Content, CardItem, View, DatePicker } from 'native-base'
import { TouchableOpacity, Text, Alert, ToastAndroid, TouchableHighlight } from 'react-native'
import ImagePicker from 'react-native-image-picker'
import moment from 'moment'

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
            index: 0,
            title: null,
            content: null,
            list: []
        }
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

                this.setState({
                    list: [...this.state.list, {
                        uri: response.uri,
                        id: this.state.index
                    }],
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
        this.props.addNote(this.state.title, this.state.content, this.state.list)
    }

    deleteImage = (e) => {

        let temp = []
        for (i = 0; i < this.state.list.length; i++) {
            if (this.state.list[i].id !== e) {
                temp.push(this.state.list[i])
            }
        }

        this.setState({
            list: [...temp]
        })
    }

    onChangeContent = (e) => {
        this.setState({
            content: e
        })
    }

    onChangeTitle = (e) => {
        this.setState({
            title: e
        })
    }

    setAnniversary = (newDate) => {
        // this.props.changeLoveDay(newDate)
    }

    setNotification = () => {
        // this.props.changeLoveDay(newDate)
    }

    render() {
        return (
            <Container>
                <Toast visible={this.state.visible} message='Saved' />
                <Content padder>
                    <View style={{ flex: 2, flexDirection: 'row', justifyContent: 'space-between' }}>
                        <View>
                            <DatePicker
                                defaultDate={new Date(moment().format('YYYY/MM/DD'))}
                                minimumDate={new Date(1950, 1, 1)}
                                maximumDate={Date.now()}
                                locale={"en"}
                                modalTransparent={false}
                                animationType={"fade"}
                                androidMode={"default"}
                                textStyle={{ color: Colors.mainColor, fontFamily: Fonts.rixLoveFool }}
                                placeHolderTextStyle={{ color: Colors.mainColor, fontFamily: Fonts.rixLoveFool }}
                                onDateChange={this.setAnniversary}
                            />
                        </View>
                        <View style={{ paddingTop: 10 }}>
                            <TouchableOpacity
                                onPress={this.setNotification}
                                style={{
                                    alignSelf: 'center',
                                    marginRight: 18,
                                    shadowColor: 0,
                                    elevation: 0,
                                }}>
                                <Icon name="md-notifications" style={{ color: Colors.greyColor }} />
                            </TouchableOpacity>
                        </View>
                    </View>
                    <Form>
                        <Item>
                            <Input
                                onChangeText={this.onChangeTitle}
                                placeholder=" Title . . . "
                                style={{ fontFamily: Fonts.fiolexGirl }}
                            />
                        </Item>
                    </Form>
                    <Card>
                        <CardItem>
                            <Body style={{ flexDirection: 'row', flexWrap: 'wrap' }}>
                                {
                                    this.state.list !== null ?
                                        this.state.list.map(x =>
                                            <TouchableHighlight key={x.id} onPress={() => this.deleteImage(x.id)}>
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
                        <Textarea
                            onChangeText={this.onChangeContent}
                            rowSpan={12}
                            bordered
                            placeholder=" Content . . . "
                            style={{ fontFamily: Fonts.fiolexGirl }}
                        />
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
