import React, { Component } from 'react'
import { Container, Content, Card, CardItem, Left, Thumbnail, Body, Text, Right, List, ListItem } from 'native-base'
import { Image, TouchableHighlight, View, ActivityIndicator } from 'react-native'
import moment from 'moment'

import { Fonts, Colors } from '../styles/App'
import { convertContent, convertTitle, convertDate } from '../helpers/ConvertData'


class OnThisDayView extends Component {

    getDayAndMonth = (date) => {
        var date = new Date(moment(date).format('YYYY/MM/DD'))
        var monthNames = [
            "Jan", "Feb", "Mar",
            "Apr", "May", "Jun", "Jul",
            "Aug", "Sep", "Oct",
            "Nov", "Dec"
        ]

        var day = date.getDate()
        var monthIndex = date.getMonth()

        return monthNames[monthIndex] + ' ' + day
    }

    getYear = (date) => {
        var date = new Date(moment(date).format('YYYY/MM/DD'))
        var year = date.getFullYear()

        return year
    }

    getNumberYears = (date) => {
        var date = new Date(moment(date).format('YYYY/MM/DD'))
        var year = date.getFullYear()

        var num = new Date().getFullYear() - year
        if (num === 1)
            return 'A year ago today'
        else
            return num + ' years ago today'
    }

    render() {
        return (
            <Container>
                <Content padder>
                    {
                        this.props.isLoadingGetNoteOnThisDay ?
                            <View style={{ padding: '50%', alignSelf: 'center', justifyContent: 'center' }}>
                                <ActivityIndicator size="small" color={Colors.mainColor} />
                            </View>
                            :
                            <View>
                                {
                                    this.props.listNoteOnThisDay.length > 0 ?
                                        this.props.listNoteOnThisDay.map(e =>
                                            <TouchableHighlight key={e.id} underlayColor='white' onPress={() => this.props.navigation.navigate('ShowNotes', { itemId: e.id, otherParam: convertTitle(e.title) })}>
                                                <Card pointerEvents='none' >
                                                    <CardItem style={{ backgroundColor: Colors.mainColor, flexDirection: 'row' }}>
                                                        <Left style={{ flex: 1 }}>
                                                            <Thumbnail style={{ width: 50, height: 50 }} circular source={require('../assets/icons/boy_couple2.png')} />
                                                        </Left>
                                                        <Body style={{ flex: 4, marginLeft: 5 }}>
                                                            <Text style={{ fontFamily: Fonts.rixLoveFool, fontSize: 18, color: 'white' }}>{convertTitle(e.title)}</Text>
                                                            <Text note style={{ fontFamily: Fonts.rixLoveFool, fontSize: 12, color: 'white' }}>{convertContent(e.content)}</Text>
                                                        </Body>
                                                        <Right style={{ flex: 1 }}>
                                                            <Text note style={{ fontFamily: Fonts.rixLoveFool, color: 'white', alignSelf: 'center' }}>{this.getDayAndMonth(e.anniversary)}</Text>
                                                            <Text note style={{ fontFamily: Fonts.rixLoveFool, color: 'white', alignSelf: 'center', marginTop: -2 }}>{this.getYear(e.anniversary)}</Text>
                                                        </Right>
                                                    </CardItem>
                                                    {
                                                        e.firstImage !== null ?
                                                            <CardItem cardBody style={{ backgroundColor: Colors.mainColor }} >
                                                                <Image source={{ uri: 'data:image/png;base64,' + e.firstImage }} style={{ height: 200, width: null, flex: 1, margin: 5 }} />
                                                            </CardItem> : null
                                                    }
                                                    <CardItem style={{ backgroundColor: Colors.mainColor }}>
                                                        <Body>
                                                            <Text style={{ alignSelf: 'center', fontFamily: Fonts.fiolexGirl, fontSize: 20, color: 'white' }}>{this.getNumberYears(e.anniversary)}</Text>
                                                        </Body>
                                                    </CardItem>
                                                </Card>
                                            </TouchableHighlight>
                                        ) : null
                                }
                            </View>
                    }

                    <List style={{ marginTop: 20 }}>

                        <ListItem itemDivider>
                            <Text style={{ fontFamily: Fonts.fiolexGirl, fontSize: 20 }}> Events </Text>
                        </ListItem>

                        <View>
                            {
                                this.props.isLoadingGetNoteByWeek ?
                                    <View style={{ padding: '50%', alignSelf: 'center', justifyContent: 'center' }}>
                                        <ActivityIndicator size="small" color={Colors.mainColor} />
                                    </View>
                                    :
                                    <View>
                                        {
                                            this.props.listNoteByWeek.length > 0 ?
                                                this.props.listNoteByWeek.map(e =>
                                                    <ListItem key={e.id} avatar onPress={() => this.props.navigation.navigate('ShowNotes', { itemId: e.id, otherParam: convertTitle(e.title) })}>
                                                        <Left>
                                                            <Thumbnail style={{ width: 50, height: 50 }} square source={require('../assets/images/travel3.jpg')} />
                                                        </Left>
                                                        <Body>
                                                            <Text style={{ fontFamily: Fonts.fiolexGirl, fontSize: 18 }}>{convertTitle(e.title)}</Text>
                                                            <Text note style={{ fontFamily: Fonts.fiolexGirl }}>{convertTitle(e.content)}</Text>
                                                        </Body>
                                                        <Right>
                                                            <Text note style={{ fontFamily: Fonts.fiolexGirl, fontSize: 15 }}>{convertDate(e.anniversary)}</Text>
                                                        </Right>
                                                    </ListItem>
                                                )
                                                :
                                                <Text style={{ textAlign: 'center', marginTop: 10, fontFamily: Fonts.fiolexGirl, color: Colors.greyColor }}>
                                                    No Events
                                                </Text>
                                        }
                                    </View>
                            }
                        </View>
                    </List>
                </Content>
            </Container>
        )
    }
}
export default OnThisDayView
