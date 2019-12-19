import React, { Component } from 'react'
import {
    Container,
    Content,
    ListItem,
    DatePicker,
    Body,
    Right,
    Text,
    Card,
    CardItem,
    Thumbnail,

} from 'native-base'
import { ToastAndroid, TextInput, Button, ActivityIndicator, View } from 'react-native'
import { Dialog, Portal, Provider } from 'react-native-paper'
import ImagePicker from 'react-native-image-picker'
import AsyncStorage from '@react-native-community/async-storage'
import moment from 'moment'

import { ACCESS_TOKEN_ASYNCSTORAGE, REFRESH_TOKEN_ASYNCSTORAGE } from '../configs/config'
import { Fonts, Colors } from '../styles/App'

const options = {
    title: 'Select Avatar',
    // customButtons: [{ name: 'fb', title: 'Choose Photo from Facebook' }],
    storageOptions: {
        skipBackup: true,
        path: 'images',
    },
}

class UserView extends Component {

    constructor(props) {
        super(props)
        this.state = {
            nameValue: '',
            visibleDialogChangeUserName: false,
            avatarSource: {
                uri: null
            }
        }
    }

    setLoveDay = (newDate) => {
        this.props.changeLoveDay(newDate)
    }

    setBirthday = (newDate) => {
        this.props.changeBirthday(newDate)
    }

    show_Toast = () => {
        console.log('click')
        ToastAndroid.showWithGravity(
            'Sucssed',
            ToastAndroid.SHORT,
            ToastAndroid.CENTER,
        )
    }

    logout = async () => {
        await AsyncStorage.removeItem(ACCESS_TOKEN_ASYNCSTORAGE)
        await AsyncStorage.removeItem(REFRESH_TOKEN_ASYNCSTORAGE)
        this.props.navigation.navigate('Login')
    }

    showDialogChangeUserName = () => {
        this.setState({
            visibleDialogChangeUserName: true,
            nameValue: this.props.userInfo.name
        })
    }

    hideDialogChangeUserName = () => {
        this.setState({
            visibleDialogChangeUserName: false
        })
        this.props.changeUsername(this.state.nameValue)
    }

    onChangeUserName = (e) => {
        this.setState({
            nameValue: e
        })
    }

    chooseImageFromGallery = () => {
        ImagePicker.showImagePicker(options, async (response) => {
            // console.log('Response = ', response)
            await this.props.changeAvatar(response)

            if (response.didCancel) {
                console.log('User cancelled image picker')
            } else if (response.error) {
                console.log('ImagePicker Error: ', response.error)
            } else if (response.customButton) {
                console.log('User tapped custom button: ', response.customButton)
            } else {
                const source = { uri: response.uri }

                // You can also display the image using data:
                // const source = { uri: 'data:image/jpegbase64,' + response.data }

                this.setState({
                    avatarSource: source,
                })
            }
        })
    }

    render() {
        return (
            <Provider>
                <Container>
                    <Portal>
                        <Dialog
                            visible={this.state.visibleDialogChangeUserName}
                            onDismiss={this.hideDialogChangeUserName}>
                            {/* <Dialog.Title>Alert</Dialog.Title> */}
                            <Dialog.Content>
                                <TextInput style={{ borderBottomColor: Colors.mainColor, borderBottomWidth: 1, fontFamily: Fonts.rixLoveFool, fontSize: 20 }}
                                    value={this.state.nameValue}
                                    onChangeText={this.onChangeUserName} />
                            </Dialog.Content>
                            <Dialog.Actions>
                                <Button title='Done' onPress={this.hideDialogChangeUserName} color={Colors.mainColor} style={{ fontFamily: Fonts.rixLoveFool }} />
                            </Dialog.Actions>
                        </Dialog>
                    </Portal>
                    <Content>
                        <Card pointerEvents='none' style={{ height: 150 }}>
                            <CardItem style={{ alignSelf: 'center', justifyContent: 'center' }} onPress={this.show_Toast}>
                                {
                                    this.props.isLoadingGetAvatar ?
                                        <View style={{ width: 70, height: 70, alignSelf: 'center', justifyContent: 'center' }}>
                                            <ActivityIndicator size="small" color={Colors.mainColor} />
                                        </View>
                                        :
                                        <Thumbnail large circular source={{ uri: 'data:image/png;base64,' + this.props.avatarUser }} />
                                }
                            </CardItem>

                            <CardItem onPress={this.show_Toast} style={{ marginTop: -10 }}>
                                <Body>
                                    <Text style={{ alignSelf: 'center', fontFamily: Fonts.rixLoveFool, fontSize: 20, color: Colors.mainColor }}>
                                        {this.props.userInfo.name}
                                    </Text>
                                </Body>
                            </CardItem>
                        </Card>

                        <ListItem onPress={this.chooseImageFromGallery}>
                            <Body>
                                <Text style={{ fontFamily: Fonts.rixLoveFool, fontSize: 16 }}>
                                    Change Avatar
                                </Text>
                            </Body>
                        </ListItem>

                        <ListItem onPress={this.showDialogChangeUserName}>
                            <Body>
                                <Text style={{ fontFamily: Fonts.rixLoveFool, fontSize: 16 }}>
                                    Change Name
                                </Text>
                            </Body>
                        </ListItem>

                        <ListItem>
                            <Body>
                                <Text style={{ fontFamily: Fonts.rixLoveFool, fontSize: 16 }}>
                                    Birthday
                                </Text>
                            </Body>
                            {
                                !this.props.isLoadingGetUser ?
                                    <DatePicker
                                        defaultDate={new Date(moment(this.props.userInfo.birthday).format('YYYY/MM/DD'))}
                                        minimumDate={new Date(1950, 1, 1)}
                                        maximumDate={Date.now()}
                                        locale={"en"}
                                        modalTransparent={false}
                                        animationType={"fade"}
                                        androidMode={"default"}
                                        textStyle={{ color: Colors.mainColor, fontFamily: Fonts.rixLoveFool }}
                                        placeHolderTextStyle={{ color: Colors.mainColor, fontFamily: Fonts.rixLoveFool }}
                                        onDateChange={this.setBirthday}
                                    /> : null
                            }
                        </ListItem>

                        <ListItem>
                            <Body>
                                <Text style={{ fontFamily: Fonts.rixLoveFool, fontSize: 16 }}>
                                    Change The Day Begin
                                </Text>
                            </Body>
                            {
                                !this.props.isLoadingGetUser ?
                                    <DatePicker
                                        defaultDate={new Date(moment(this.props.userInfo.loveDate).format('YYYY/MM/DD'))}
                                        minimumDate={new Date(1950, 1, 1)}
                                        maximumDate={Date.now()}
                                        locale={"en"}
                                        modalTransparent={false}
                                        animationType={"fade"}
                                        androidMode={"default"}
                                        textStyle={{ color: Colors.mainColor, fontFamily: Fonts.rixLoveFool }}
                                        placeHolderTextStyle={{ color: Colors.mainColor, fontFamily: Fonts.rixLoveFool }}
                                        onDateChange={this.setLoveDay}
                                    /> : null
                            }
                        </ListItem>

                        <ListItem onPress={this.show_Toast}>
                            <Body>
                                <Text style={{ fontFamily: Fonts.rixLoveFool, fontSize: 16 }}>
                                    Sync Code
                            </Text>
                            </Body>
                        </ListItem>

                        <ListItem onPress={this.show_Toast}>
                            <Body>
                                <Text style={{ fontFamily: Fonts.rixLoveFool, fontSize: 16 }}>
                                    Password
                            </Text>
                            </Body>
                        </ListItem>

                        <ListItem onPress={this.logout}>
                            <Body>
                                <Text style={{ fontFamily: Fonts.rixLoveFool, fontSize: 16 }}>
                                    Log out
                            </Text>
                            </Body>
                        </ListItem>
                    </Content>
                </Container>
            </Provider>
        )
    }
}
export default UserView
