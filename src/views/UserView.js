import React, { Component } from 'react'
import {
    Container,
    Content,
    ListItem,
    DatePicker,
    Body,
    Right,
    Switch,
    Text,
    Card,
    CardItem,
    Thumbnail,
} from 'native-base'
import { ToastAndroid } from 'react-native'

import { Fonts, Colors } from '../styles/App'


class UserView extends Component {

    constructor(props) {
        super(props);
        this.state = { chosenDate: new Date() };
        this.setDate = this.setDate.bind(this);
    }

    setDate(newDate) {
        this.setState({ chosenDate: newDate });
    }

    show_Toast = () => {
        ToastAndroid.showWithGravity(
            'Sucssed',
            ToastAndroid.SHORT,
            ToastAndroid.CENTER,
        );
    }
    render() {
        return (
            <Container>
                <Content>
                    <Card pointerEvents='none' >
                        <CardItem style={{ alignSelf: 'center', justifyContent: 'center' }}>
                            <Thumbnail large square source={require('../assets/icons/boy_couple2.png')} />
                        </CardItem>

                        <CardItem>
                            <Body>
                                <Text style={{ alignSelf: 'center', fontFamily: Fonts.fiolexGirl, fontSize: 20, color: '#ff4081' }}> Lê Dương Khang </Text>
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
                            defaultDate={new Date(2018, 4, 4)}
                            minimumDate={new Date(2018, 1, 1)}
                            maximumDate={new Date(2018, 12, 31)}
                            locale={"en"}
                            timeZoneOffsetInMinutes={undefined}
                            modalTransparent={false}
                            animationType={"fade"}
                            androidMode={"default"}
                            textStyle={{ color: "#ff4081" }}
                            placeHolderTextStyle={{ color: "#ff4081" }}
                            onDateChange={this.setDate}
                        />

                    </ListItem>

                    <ListItem>
                        <Body>
                            <Text style={{ fontFamily: Fonts.fiolexGirl, fontSize: 16 }}>
                                Turn On Notifications
                            </Text>
                        </Body>
                        <Right>
                            <Switch thumbColor='#ff4081' trackColor={('#ff4081', 'grey')} />
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
                </Content>
            </Container >
        )
    }
}
export default UserView
