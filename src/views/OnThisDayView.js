import React, { Component } from 'react'
import {
    Container,
    Content,
    Card,
    CardItem,
    Left,
    Thumbnail,
    Body,
    Text,
    Right,
    List,
    ListItem
} from 'native-base'
import { Image, TouchableHighlight } from 'react-native'

import { Fonts } from '../styles/App'


class OnThisDayView extends Component {
    render() {
        return (
            <Container>
                <Content padder>
                    <TouchableHighlight underlayColor='ưhite' onPress={() => this.props.navigation.navigate('ShowNotes')}>
                        <Card pointerEvents='none' >
                            <CardItem style={{ backgroundColor: '#ff4081', flexDirection: 'row' }}>
                                <Left style={{ flex: 1 }}>
                                    <Thumbnail style={{ width: 50, height: 50 }} circular source={require('../assets/icons/boy_couple2.png')} />
                                </Left>
                                <Body style={{ flex: 4, marginLeft: 5 }}>
                                    <Text style={{ fontFamily: Fonts.rixLoveFool, fontSize: 18, color: 'white' }}>My love - The Song we ...</Text>
                                    <Text note style={{ fontFamily: Fonts.rixLoveFool, fontSize: 12, color: 'white' }}>An empty street, an empty . .</Text>
                                </Body>
                                <Right style={{ flex: 1 }}>
                                    <Text note style={{ fontFamily: Fonts.rixLoveFool, color: 'white', alignSelf: 'center' }}>Jan 1</Text>
                                    <Text note style={{ fontFamily: Fonts.rixLoveFool, color: 'white', alignSelf: 'center', marginTop: -2 }}>2018</Text>
                                </Right>
                            </CardItem>

                            <CardItem cardBody style={{ backgroundColor: '#ff4081' }} >
                                <Image source={require('../assets/images/couple.jpg')} style={{ height: 200, width: null, flex: 1, margin: 5 }} />
                            </CardItem>

                            <CardItem style={{ backgroundColor: '#ff4081' }}>
                                <Body>
                                    <Text style={{ alignSelf: 'center', fontFamily: Fonts.fiolexGirl, fontSize: 20, color: 'white' }}> A year ago today </Text>
                                </Body>
                            </CardItem>
                        </Card>
                    </TouchableHighlight>

                    <List style={{ marginTop: 20 }}>

                        <ListItem itemDivider>
                            <Text style={{ fontFamily: Fonts.fiolexGirl, fontSize: 20 }}> Events </Text>
                        </ListItem>

                        <ListItem avatar onPress={() => this.props.navigation.navigate('ShowNotes')}>
                            <Left>
                                <Thumbnail style={{ width: 50, height: 50 }} square source={require('../assets/images/travel3.jpg')} />
                            </Left>
                            <Body>
                                <Text style={{ fontFamily: Fonts.fiolexGirl, fontSize: 18 }}>Title</Text>
                                <Text note style={{ fontFamily: Fonts.fiolexGirl }}>Tell me what you thinking  . . . </Text>
                            </Body>
                            <Right>
                                <Text note style={{ fontFamily: Fonts.fiolexGirl, fontSize: 15 }}>Tomorow</Text>
                            </Right>
                        </ListItem>

                        <ListItem avatar onPress={() => this.props.navigation.navigate('ShowNotes')}>
                            <Left>
                                <Thumbnail style={{ width: 50, height: 50 }} square source={require('../assets/images/travel1.jpg')} />
                            </Left>
                            <Body>
                                <Text style={{ fontFamily: Fonts.fiolexGirl, fontSize: 18 }}>Title</Text>
                                <Text note style={{ fontFamily: Fonts.fiolexGirl }}>Tell me what you thinking  . . . </Text>
                            </Body>
                            <Right>
                                <Text note style={{ fontFamily: Fonts.fiolexGirl, fontSize: 15 }}>Sat, Jan 5</Text>
                            </Right>
                        </ListItem>
                    </List>
                </Content>
            </Container>
        )
    }
}
export default OnThisDayView
