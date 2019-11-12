import React, { Component } from 'react'
import{ TouchableOpacity } from 'react-native'

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

class NoteView extends Component {

    static navigationOptions = ({ navigation }) => {
        return {
        title: 'Notes',

        headerTitleStyle: {
            textAlign: 'center',
            flex: 1,
            fontFamily: 'rix_love_fool',
            fontWeight: '300',
            color: '#ff4081',
            fontWeight: undefined,
            fontSize: 30,
        },
        headerStyle: {
            backgroundColor: 'white',
            shadowOpacity: 0,
            elevation: 0,
            borderBottomWidth: 0.7,
            borderColor: '#ff4081',
        },
        headerLeft:<Left/>,
        
        headerRight: <TouchableOpacity
        onPress={ () => navigation.navigate('Users') }
            style={{
                backgroundColor: 'transparent',
                alignSelf: 'center',
                marginRight: 18,
                shadowColor: 0,
                elevation: 0,
            }}>
            <Icon name="md-person" style={{ color: '#ff4081' }} />
        </TouchableOpacity>
        }
    }
    
    render() {
        return (
            <Container>
                <List>
                    <ListItem avatar onPress={() => this.props.navigation.navigate('ShowNotes')}>
                        <Left>
                            <Thumbnail large square source={require('../assets/images/seflfy.png')} />
                        </Left>
                        <Body>
                            <Text style={{ fontFamily: 'fiolex_girl', fontSize:18}}>Title</Text>
                            <Text note style={{ fontFamily: 'fiolex_girl' }}>Tell me what you thinking  . . . </Text>
                        </Body>
                        <Right>
                            <Text note style={{ fontFamily: 'fiolex_girl', fontSize:15 }}>Jan 1, 2019</Text>
                        </Right>
                    </ListItem>

                    <ListItem avatar onPress={() => this.props.navigation.navigate('ShowNotes')}>
                        <Left>
                            <Thumbnail large square source={require('../assets/images/travel2.jpg')} />
                        </Left>
                        <Body>
                            <Text style={{ fontFamily: 'fiolex_girl', fontSize:18 }}> Title</Text>
                            <Text note style={{ fontFamily: 'fiolex_girl' }}> Tell me what you thinking  . . . </Text>
                        </Body>
                        <Right>
                            <Text note style={{ fontFamily: 'fiolex_girl', fontSize:15 }}> Jan 1, 2019</Text>
                        </Right>
                    </ListItem>
                </List>
                <View style={{ flex: 1 }}>
                    <Fab direction="up"
                        position="bottomRight"
                        onPress={() => this.props.navigation.navigate('NotesWrittings')}
                        style={{ backgroundColor: '#ff4081' }}>
                        <Icon name="md-add" />
                    </Fab>
                </View>
            </Container>
        )
    }
}
export default NoteView
