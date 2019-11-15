import React, { Component } from 'react'
import {
    Alert, View, Button
} from 'react-native'
import {
    Container,
    Right,
    Left,
    Icon,
    Text,
    List,
    ListItem,
    Body,
    Thumbnail,
    Fab,
} from 'native-base'

import { Fonts, Colors } from '../styles/App'

const data = [
    {
        id: 1,
        title: "Nothing gonna change my love for you",
        content: "i cant sleep, i just cant breath. in your shawdow...",
        date: '8/12/1997',
        image: '../assets/images/travel2.jpg'
    }
]

class NoteView extends Component {
    convertDate = (date) => {
        var date = new Date(date)
        var monthNames = [
            "Jan", "Feb", "Mar",
            "Apr", "May", "Jun", "Jul",
            "Aug", "Sep", "Oct",
            "Nov", "Dec"
        ]

        var day = date.getDate()
        var monthIndex = date.getMonth()
        var year = date.getFullYear()

        return monthNames[monthIndex] + ' ' + day + ', ' + year
    }

    convertTitle = (str) => {
        return str.substring(0, 24) + ' . . .'
    }

    convertContent = (str) => {
        return str.substring(0, 34) + ' . . .'
    }

    showAlert = (e) => {
        Alert.alert(
            'Alert' + e,
            'Do you want detele it ?',
            [
                {
                    text: 'Cancel',
                    onPress: () => console.log('Cancel Pressed'),
                    style: 'cancel',
                },
                { text: 'OK', onPress: () => console.log('OK Pressed') },
            ],
            { cancelable: false },
        )
    }

    render() {
        return (
            <Container>
                <List>
                    {
                        data.map(e =>
                            <View key={e.id}>
                                <ListItem avatar onLongPress={() => this.showAlert(e.id)} onPress={() => this.props.navigation.navigate('ShowNotes', { itemId: e.id, otherParam: '12' })}>
                                    <Left>
                                        <Thumbnail style={{ width: 50, height: 50 }} square source={{ uri: e.image }} />
                                    </Left>
                                    <Body>
                                        <Text style={{ fontFamily: Fonts.fiolexGirl, fontSize: 18 }}>{this.convertTitle(e.title)}</Text>
                                        <Text note style={{ fontFamily: Fonts.fiolexGirl }}>{this.convertContent(e.content)} </Text>
                                    </Body>
                                    <Right>
                                        <Text note style={{ fontFamily: Fonts.fiolexGirl, fontSize: 15 }}>{this.convertDate(e.date)}</Text>
                                    </Right>
                                </ListItem>
                            </View>
                        )
                    }


                    <ListItem avatar onPress={() => this.props.navigation.navigate('ShowNotes')}>
                        <Left>
                            <Thumbnail style={{ width: 50, height: 50 }} square source={require('../assets/images/travel2.jpg')} />
                        </Left>
                        <Body>
                            <Text style={{ fontFamily: Fonts.fiolexGirl, fontSize: 18 }}> Title</Text>
                            <Text note style={{ fontFamily: Fonts.fiolexGirl }}> Tell me what you thinking  . . . </Text>
                        </Body>
                        <Right>
                            <Text note style={{ fontFamily: Fonts.fiolexGirl, fontSize: 15 }}> Jan 1, 2019</Text>
                        </Right>
                    </ListItem>
                </List>

                <View style={{ flex: 1 }}>
                    <Fab direction="up"
                        position="bottomRight"
                        onPress={() => this.props.navigation.navigate('NotesWrittings')}
                        style={{ backgroundColor: Colors.mainColor }}>
                        <Icon name="md-add" />
                    </Fab>
                </View>
            </Container>
        )
    }
}
export default NoteView
