import React, { Component } from 'react'
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
    View,
} from 'native-base'

import { Fonts, Colors } from '../styles/App'


class NoteView extends Component {

    render() {
        return (
            <Container>
                <List>
                    <ListItem avatar onPress={() => this.props.navigation.navigate('ShowNotes')}>
                        <Left>
                            <Thumbnail large square source={require('../assets/images/seflfy.png')} />
                        </Left>
                        <Body>
                            <Text style={{ fontFamily: Fonts.fiolexGirl, fontSize: 18 }}>Title</Text>
                            <Text note style={{ fontFamily: Fonts.fiolexGirl }}>Tell me what you thinking  . . . </Text>
                        </Body>
                        <Right>
                            <Text note style={{ fontFamily: Fonts.fiolexGirl, fontSize: 15 }}>Jan 1, 2019</Text>
                        </Right>
                    </ListItem>

                    <ListItem avatar onPress={() => this.props.navigation.navigate('ShowNotes')}>
                        <Left>
                            <Thumbnail large square source={require('../assets/images/travel2.jpg')} />
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
