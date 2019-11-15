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
import { Switch, ToastAndroid } from 'react-native'
import AsyncStorage from '@react-native-community/async-storage'

import { ACCESS_TOKEN_ASYNCSTORAGE, REFRESH_TOKEN_ASYNCSTORAGE } from '../configs/config'
import { Fonts, Colors } from '../styles/App'


class UserView extends Component {

    constructor(props) {
        super(props)
        this.state = {
            chosenDate: new Date(),
            switchOn: false
        }
    }

    setDate = (newDate) => {
        this.setState({ chosenDate: newDate })
    }

    show_Toast = () => {
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

    changeSwich = () => {
        !this.state.switchOn ? this.setState({ switchOn: true }) : this.setState({ switchOn: false })
    }

    render() {
        console.log(this.state.switchOn)
        return (
            <Container>
                <Content>
                    <Card pointerEvents='none' >
                        <CardItem style={{ alignSelf: 'center', justifyContent: 'center' }}>
                            <Thumbnail large circular source={{ uri: this.props.avatarUser }} />
                        </CardItem>

                        <CardItem>
                            <Body>
                                <Text style={{ alignSelf: 'center', fontFamily: Fonts.fiolexGirl, fontSize: 20, color: Colors.mainColor }}>
                                    {this.props.userInfo.name}
                                </Text>
                            </Body>
                        </CardItem>
                    </Card>

                    <ListItem onPress={this.show_Toast}>
                        <Body>
                            <Text style={{ fontFamily: Fonts.fiolexGirl, fontSize: 16 }}>
                                Change Avatar
                            </Text>
                        </Body>
                    </ListItem>

                    <ListItem onPress={this.show_Toast}>
                        <Body>
                            <Text style={{ fontFamily: Fonts.fiolexGirl, fontSize: 16 }}>
                                Change Name
                            </Text>
                        </Body>
                    </ListItem>

                    <ListItem onPress={this.show_Toast}>
                        <Body>
                            <Text style={{ fontFamily: Fonts.fiolexGirl, fontSize: 16 }}>
                                Change The Day Begin
                            </Text>
                        </Body>
                        <DatePicker
                            defaultDate={new Date(Date.now())}
                            minimumDate={new Date(2018, 1, 1)}
                            maximumDate={new Date(2200, 12, 31)}
                            locale={"en"}
                            modalTransparent={false}
                            animationType={"fade"}
                            androidMode={"default"}
                            textStyle={{ color: Colors.mainColor, fontFamily: Fonts.fiolexGirl }}
                            placeHolderTextStyle={{ color: Colors.mainColor, fontFamily: Fonts.fiolexGirl }}
                            onDateChange={this.setDate}
                        />

                    </ListItem>

                    <ListItem onPress={this.changeSwich}>
                        <Body>
                            <Text style={{ fontFamily: Fonts.fiolexGirl, fontSize: 16 }}>
                                Turn On Notifications
                            </Text>
                        </Body>
                        <Right>
                            <Switch thumbColor={Colors.mainColor} value={this.state.switchOn} onValueChange={this.changeSwich} />
                        </Right>
                    </ListItem>

                    <ListItem onPress={this.show_Toast}>
                        <Body>
                            <Text style={{ fontFamily: Fonts.fiolexGirl, fontSize: 16 }}>
                                Sync Code
                            </Text>
                        </Body>
                    </ListItem>

                    <ListItem onPress={this.show_Toast}>
                        <Body>
                            <Text style={{ fontFamily: Fonts.fiolexGirl, fontSize: 16 }}>
                                Password
                            </Text>
                        </Body>
                    </ListItem>

                    <ListItem onPress={this.logout}>
                        <Body>
                            <Text style={{ fontFamily: Fonts.fiolexGirl, fontSize: 16 }}>
                                Log out
                            </Text>
                        </Body>
                    </ListItem>
                </Content>
            </Container >
        )
    }
}
export default UserView
