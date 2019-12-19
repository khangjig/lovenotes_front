import React, { Component } from 'react'
import { Alert, View, ActivityIndicator } from 'react-native'
import { Container, Right, Left, Icon, Text, List, ListItem, Body, Thumbnail, Fab } from 'native-base'
import moment from 'moment'

import { Fonts, Colors } from '../styles/App'


class NoteView extends Component {

    convertDate = (date) => {
        var date = new Date(moment(date).format('YYYY/MM/DD'))
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
        return str.substring(0, 20) + ' . . .'
    }

    convertContent = (str) => {
        return str.substring(0, 28) + ' . . .'
    }

    deleteNote = (id) => {
        Alert.alert(
            'Alert' + id,
            'Do you want detele it ?',
            [
                {
                    text: 'Cancel',
                    onPress: () => console.log('Cancel Pressed'),
                    style: 'cancel',
                },
                { text: 'OK', onPress: () => this.props.deleteNote(id) },
            ],
            { cancelable: false },
        )
    }

    render() {
        return (
            <Container>
                {
                    this.props.isLoadingGetListNote ?
                        <View style={{ padding: '50%', alignSelf: 'center', justifyContent: 'center' }}>
                            <ActivityIndicator size="small" color={Colors.mainColor} />
                        </View>
                        :
                        <List>
                            {
                                this.props.listNote.map(e =>
                                    <View key={e.id}>
                                        <ListItem avatar
                                            onLongPress={() => this.deleteNote(e.id)}
                                            onPress={() => this.props.navigation.navigate('ShowNotes', { itemId: e.id, otherParam: this.convertTitle(e.title) })}>
                                            <Left>
                                                <View style={{ width: 52, height: 52, borderWidth: 1, borderColor: Colors.mainColor, padding: 1, alignContent: 'center', justifyContent: 'center' }}>
                                                    <Thumbnail style={{ width: 50, height: 50, alignSelf: 'center' }} square source={{ uri: 'data:image/png;base64,' + e.firstImage }} />
                                                </View>
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
                        </List>
                }

                <View style={{ flex: 1 }}>
                    <Fab direction="up"
                        position="bottomRight"
                        onPress={() => this.props.navigation.navigate('NotesWrittings')}
                        style={{ backgroundColor: Colors.mainColor }}>
                        <Icon name="md-add" />
                    </Fab>
                </View>
            </Container >
        )
    }
}
export default NoteView
