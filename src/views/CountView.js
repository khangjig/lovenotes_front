import React, { Component } from 'react'
import { Container, Thumbnail, Icon } from 'native-base'
import { Text, Image, TouchableOpacity, View, ActivityIndicator } from 'react-native'
import { Col, Row, Grid } from "react-native-easy-grid"
import moment from 'moment'

import { Fonts, Colors } from '../styles/App'


class CountView extends Component {

    getNumberFromTwoDay = (day1, day2) => {
        dayOne = new Date(moment(day1).format('YYYY/MM/DD'))
        dayTwo = new Date(moment(day2).format('YYYY/MM/DD'))

        return (dayTwo.getTime() - dayOne.getTime()) / (1000 * 3600 * 24)
    }

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

    levelOfLove = (day1, day2) => {
        let days = this.getNumberFromTwoDay(day1, day2)

        if (days > 1000)
            return 'Truly Love'
        else if (days > 500)
            return 'Intense Love'
        else if (days > 30)
            return 'Loving... '
        else if (days <= 30)
            return 'Beginning'

        return null
    }

    render() {
        console.log(this.props)
        return (
            <Container>
                <Grid>
                    <Col>
                        <Row size={17} >
                            <Col>
                                <Row size={6}>
                                    <Col>
                                        <Row >
                                        </Row>
                                        <Row>
                                            <Col size={1}>
                                            </Col>
                                            <Col size={2}>
                                                <Text style={{ color: '#ff1b00', fontSize: 40, fontFamily: Fonts.fiolexGirl, alignSelf: 'center', flex: 1 }}>
                                                    {this.levelOfLove(this.props.userInfo.loveDate, Date.now())}
                                                </Text>
                                            </Col>
                                            <Col size={1}>
                                            </Col>
                                        </Row>
                                    </Col>
                                </Row>

                                <Row size={3} >
                                    <Col>
                                        <Row >
                                        </Row>
                                        <Row>
                                            <Col>
                                            </Col>
                                            <Col>
                                                <Text style={{ color: '#333ffd', fontSize: 45, fontFamily: Fonts.fiolexGirl, alignSelf: 'center', marginTop: -30 }}>
                                                    {this.getNumberFromTwoDay(this.props.userInfo.loveDate, Date.now())}
                                                </Text>
                                            </Col>
                                            <Col>
                                            </Col>
                                        </Row>
                                    </Col>
                                </Row>

                                <Row size={8} >
                                    <Col>
                                        <Row >
                                        </Row>
                                        <Row>
                                            <Col>
                                            </Col>
                                            <Col>
                                                <Text style={{ color: '#ff1b00', fontSize: 30, fontFamily: Fonts.fiolexGirl, alignSelf: 'center', flex: 1, marginTop: -60 }}>Days</Text>
                                            </Col>
                                            <Col>
                                            </Col>
                                        </Row>
                                    </Col>
                                </Row>
                            </Col>
                            <Image source={require('../assets/icons/bg_heart3.png')} style={{ alignSelf: 'center', marginTop: -25, marginLeft: 6, position: 'absolute' }} />
                        </Row>

                        <Row size={1} >
                            <Col>
                                <Row >
                                </Row>
                                <Row>
                                    <Col>
                                        <Text style={{ color: '#ff1b00', fontSize: 20, fontFamily: Fonts.fiolexGirl, alignSelf: 'center', marginTop: -22 }}>
                                            {this.convertDate(this.props.userInfo.loveDate)} - {this.convertDate(Date.now())}
                                        </Text>
                                    </Col>
                                </Row>
                            </Col>
                        </Row>

                        <Row size={11}>
                            <Col size={11}>
                                <Row size={3}>
                                    <Col>
                                        <TouchableOpacity onPress={() => console.log("ASDSASDASDSADASD")}>
                                            {
                                                this.props.isLoadingGetAvatar ?
                                                    <View style={{ width: 70, height: 70, alignSelf: 'center', justifyContent: 'center' }}>
                                                        <ActivityIndicator size="small" color={Colors.mainColor} />
                                                    </View>
                                                    :
                                                    <Thumbnail large circular source={{ uri: 'data:image/png;base64,' + this.props.avatarUser }} style={{ alignSelf: 'center', marginTop: 30, width: 100, height: 100 }} />
                                            }
                                        </TouchableOpacity>
                                    </Col>
                                </Row>
                                <Row size={1}>
                                    <Col>
                                        <Text onPress={() => console.log("ASDSASDASDSADASD")} style={{ color: 'grey', fontSize: 20, fontFamily: Fonts.fiolexGirl, alignSelf: 'center', flex: 1 }}>
                                            {this.props.userInfo.name}
                                        </Text>
                                    </Col>
                                </Row>
                            </Col>
                            <Col size={5}>
                                <Image source={require('../assets/icons/beatingheart.gif')} style={{ alignSelf: 'center', height: 60, width: 60, marginTop: 80 }} />
                            </Col>
                            <Col size={11}>
                                <Row size={3}>
                                    <Col>
                                        {/* <Thumbnail large source={require('../assets/icons/girl_couple2.png')} style={{ alignSelf: 'center', marginTop: 30, width: 100, height: 100 }} /> */}
                                        {
                                            this.props.isLoadingGetAvatarPartner ?
                                                <View style={{ width: 70, height: 70, alignSelf: 'center', justifyContent: 'center' }}>
                                                    <ActivityIndicator size="small" color={Colors.mainColor} />
                                                </View>
                                                :
                                                <Thumbnail large circular source={{ uri: 'data:image/png;base64,' + this.props.avatarPartner }} style={{ alignSelf: 'center', marginTop: 30, width: 100, height: 100 }} />
                                        }
                                    </Col>
                                </Row>
                                <Row size={1}>
                                    <Col>
                                        <Text style={{ color: 'grey', fontSize: 20, fontFamily: Fonts.fiolexGirl, alignSelf: 'center', flex: 1 }}>
                                            {this.props.namePartner}
                                        </Text>
                                    </Col>
                                </Row>
                            </Col>
                        </Row>
                    </Col>
                </Grid>

                <Grid style={{ position: 'absolute' }}>
                    <Col>
                        <Row>
                            <TouchableOpacity style={{ height: 100, width: 100, backgroundColor: '#25a6f2', alignSelf: 'center', marginTop: 220, borderBottomRightRadius: 100, borderTopRightRadius: 100, marginLeft: -50 }}>
                                <Icon name="share" style={{ marginLeft: 41, marginTop: 34, alignSelf: 'center', color: 'white' }} />
                            </TouchableOpacity>
                        </Row>
                    </Col >
                    <Col></Col>
                </Grid>
            </Container>
        )
    }
}
export default CountView
