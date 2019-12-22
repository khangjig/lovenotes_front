import React, { Component } from 'react'
import { Alert, View, ActivityIndicator } from 'react-native'
import { Container, Right, Left, Icon, Text, List, ListItem, Body, Thumbnail, Fab, Content } from 'native-base'

import { convertContent, convertTitle, convertDate } from '../helpers/ConvertData'
import { Fonts, Colors } from '../styles/App'


class NoteView extends Component {

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
                <Content>
                    {
                        this.props.isLoadingGetListNote ?
                            <View style={{ padding: '50%', alignSelf: 'center', justifyContent: 'center' }}>
                                <ActivityIndicator size="small" color={Colors.mainColor} />
                            </View>
                            :
                            <List>
                                {
                                    this.props.listNote.map(e => {
                                        return e.userId == this.props.userId ?
                                            <View key={e.id}>
                                                <ListItem avatar
                                                    onLongPress={() => this.deleteNote(e.id)}
                                                    onPress={() => this.props.navigation.navigate('ShowNotes', { itemId: e.id, otherParam: convertTitle(e.title) })}>
                                                    <Left>
                                                        <View style={{ width: 52, height: 52, borderWidth: 1, borderColor: 'rgb(52, 225, 235)', padding: 1, alignContent: 'center', justifyContent: 'center' }}>
                                                            <Thumbnail style={{ width: 50, height: 50, alignSelf: 'center' }} square source={{ uri: 'data:image/png;base64,' + e.firstImage }} />
                                                        </View>
                                                    </Left>
                                                    <Body>
                                                        <Text style={{ fontFamily: Fonts.fiolexGirl, fontSize: 18 }}>{convertTitle(e.title)}</Text>
                                                        <Text note style={{ fontFamily: Fonts.fiolexGirl }}>{convertContent(e.content)} </Text>
                                                    </Body>
                                                    <Right>
                                                        <Text note style={{ fontFamily: Fonts.fiolexGirl, fontSize: 15 }}>{convertDate(e.anniversary)}</Text>
                                                    </Right>
                                                </ListItem>
                                            </View> :
                                            <View key={e.id}>
                                                <ListItem avatar
                                                    onLongPress={() => this.deleteNote(e.id)}
                                                    onPress={() => this.props.navigation.navigate('ShowNotes', { itemId: e.id, otherParam: convertTitle(e.title) })}>
                                                    <Left>
                                                        <View style={{ width: 52, height: 52, borderWidth: 1, borderColor: Colors.mainColor, padding: 1, alignContent: 'center', justifyContent: 'center' }}>
                                                            <Thumbnail style={{ width: 50, height: 50, alignSelf: 'center' }} square source={{ uri: 'data:image/png;base64,' + e.firstImage }} />
                                                        </View>
                                                    </Left>
                                                    <Body>
                                                        <Text style={{ fontFamily: Fonts.fiolexGirl, fontSize: 18 }}>{convertTitle(e.title)}</Text>
                                                        <Text note style={{ fontFamily: Fonts.fiolexGirl }}>{convertContent(e.content)} </Text>
                                                    </Body>
                                                    <Right>
                                                        <Text note style={{ fontFamily: Fonts.fiolexGirl, fontSize: 15 }}>{convertDate(e.anniversary)}</Text>
                                                    </Right>
                                                </ListItem>
                                            </View>
                                    }
                                    )
                                }
                            </List>
                    }

                </Content>
                <Fab direction="up"
                    position="bottomRight"
                    onPress={() => this.props.navigation.navigate('NotesWrittings')}
                    style={{ backgroundColor: Colors.mainColor }}>
                    <Icon name="md-add" />
                </Fab>
            </Container >
        )
    }
}
export default NoteView
