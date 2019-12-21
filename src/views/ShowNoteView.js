import React, { Component } from 'react'
import { Text, TouchableOpacity, Image, View, ActivityIndicator, ScrollView } from 'react-native'
import { Container, Card, Icon, Thumbnail, Body, Content, CardItem, DeckSwiper, Left } from 'native-base'
import { Col, Row, Grid } from "react-native-easy-grid"

import { Fonts, Colors } from '../styles/App'
import { convertTitle, convertDate } from '../helpers/ConvertData'


class ShowNoteView extends Component {

    setNotification = () => {
        console.log('setted!')
    }

    render() {
        return (
            <Container>
                <CardItem>
                    <Grid>
                        <Row>
                            <Col size={1}>
                                <Thumbnail source={require('../assets/icons/boy_couple2.png')} />
                            </Col>
                            <Col size={4} style={{ paddingLeft: 10 }}>
                                {
                                    !this.props.isLoadingGetNoteInfo ?
                                        <View>
                                            <Text style={{ fontFamily: Fonts.rixLoveFool, fontSize: 18 }}>{convertTitle(this.props.noteInfo.title)}</Text>
                                            <Text note style={{ fontFamily: Fonts.rixLoveFool }}>{convertDate(this.props.noteInfo.anniversary)}</Text>
                                        </View>
                                        : null
                                }
                            </Col>
                            <Col size={1}>
                                <Row style={{ alignSelf: 'center' }}>
                                    <TouchableOpacity style={{ textAlign: 'center', marginTop: 10, marginLeft: 15 }}
                                        onPress={this.setNotification}>
                                        <Icon name="md-notifications" style={{ color: Colors.mainColor }} />
                                    </TouchableOpacity>
                                </Row>
                            </Col>
                        </Row>
                    </Grid>
                </CardItem>
                {
                    !this.props.isLoadingGetNoteImages ?
                        <View style={{ marginTop: 50 }}>
                            <DeckSwiper
                                dataSource={this.props.listNoteImages}
                                renderItem={item =>
                                    <Card>
                                        <CardItem cardBody>
                                            <Image
                                                style={{ height: 300, flex: 1, resizeMode: "center" }}
                                                source={{ uri: 'data:image/png;base64,' + item.image }}
                                            />
                                        </CardItem>
                                    </Card>
                                }
                            />
                        </View> :
                        <View style={{ padding: '50%', alignSelf: 'center', justifyContent: 'center' }}>
                            <ActivityIndicator size="small" color={Colors.mainColor} />
                        </View>

                }
                <ScrollView style={{ marginTop: 300 }}>
                    <CardItem >
                        <Body >
                            {
                                !this.props.isLoadingGetNoteInfo ?
                                    <Text style={{ fontFamily: Fonts.rixLoveFool, marginTop: 5, textAlign: 'center', alignSelf: 'center' }}>
                                        {this.props.noteInfo.content}
                                    </Text>
                                    : null
                            }
                        </Body>
                    </CardItem>
                </ScrollView>
            </Container>
        )
    }
}
export default ShowNoteView
