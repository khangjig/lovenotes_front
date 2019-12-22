import React, { Component } from 'react'
import { Container, Thumbnail, Icon } from 'native-base'
import { Text, Image, TouchableOpacity, View, ActivityIndicator, TextInput, Button } from 'react-native'
import { Col, Row, Grid } from "react-native-easy-grid"
import { Dialog, Portal, Provider } from 'react-native-paper'
import ImagePicker from 'react-native-image-picker'
import moment from 'moment'

import { convertDate } from '../helpers/ConvertData'
import { Fonts, Colors } from '../styles/App'

const options = {
    title: 'Select Image',
    storageOptions: {
        skipBackup: true,
        path: 'images',
    },
}

class CountView extends Component {

    constructor(props) {
        super(props)
        this.state = {
            visibleDialogChangeUserName: false,
            visibleDialogChangeNamePartner: false,
            userName: null,
            partnerName: null
        }
    }

    getNumberFromTwoDay = (day1, day2) => {
        dayOne = new Date(moment(day1).format('YYYY/MM/DD'))
        dayTwo = new Date(moment(day2).format('YYYY/MM/DD'))

        return (dayTwo.getTime() - dayOne.getTime()) / (1000 * 3600 * 24)
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

    chooseImageUser = () => {
        ImagePicker.showImagePicker(options, async (response) => {

            if (response.didCancel) {
                console.log('User cancelled image picker')
            } else if (response.error) {
                console.log('ImagePicker Error: ', response.error)
            } else if (response.customButton) {
                console.log('User tapped custom button: ', response.customButton)
            } else {
                this.props.changeAvatar(response)
            }
        })
    }

    chooseImagePartner = () => {
        ImagePicker.showImagePicker(options, async (response) => {

            if (response.didCancel) {
                console.log('User cancelled image picker')
            } else if (response.error) {
                console.log('ImagePicker Error: ', response.error)
            } else if (response.customButton) {
                console.log('User tapped custom button: ', response.customButton)
            } else {
                this.props.changeAvatarPartner(response)
            }
        })
    }

    showDialogChangeUserName = () => {
        this.setState({
            visibleDialogChangeUserName: true,
            userName: this.props.userInfo.name
        })
    }

    hideDialogChangeUserName = () => {
        this.setState({
            visibleDialogChangeUserName: false
        })
    }

    submitDialogChangeUserName = () => {
        this.setState({
            visibleDialogChangeUserName: false
        })
        this.props.changeUsername(this.state.userName)
    }

    onChangeUserName = (e) => {
        this.setState({
            userName: e
        })
    }

    showDialogChangeNamePartner = () => {
        this.setState({
            visibleDialogChangeNamePartner: true,
            partnerName: this.props.namePartner
        })
    }

    hideDialogChangeNamePartner = () => {
        this.setState({
            visibleDialogChangeNamePartner: false
        })
    }

    submitDialogChangeNamePartner = () => {
        this.setState({
            visibleDialogChangeNamePartner: false
        })
        this.props.changeNamePartner(this.state.partnerName)
    }

    onChangeNamePartner = (e) => {
        this.setState({
            partnerName: e
        })
    }

    render() {
        return (
            <Provider>
                <Container>
                    <Portal>
                        <Dialog
                            visible={this.state.visibleDialogChangeUserName}
                            onDismiss={this.hideDialogChangeUserName}>
                            <Dialog.Content>
                                <TextInput style={{ borderBottomColor: Colors.mainColor, borderBottomWidth: 1, fontFamily: Fonts.rixLoveFool, fontSize: 20 }}
                                    value={this.state.userName}
                                    placeholder='type your name'
                                    onChangeText={this.onChangeUserName} />
                            </Dialog.Content>
                            <Dialog.Actions>
                                <Button title='Done' onPress={this.submitDialogChangeUserName} color={Colors.mainColor} style={{ fontFamily: Fonts.rixLoveFool }} />
                            </Dialog.Actions>
                        </Dialog>
                        <Dialog
                            visible={this.state.visibleDialogChangeNamePartner}
                            onDismiss={this.hideDialogChangeNamePartner}>
                            <Dialog.Content>
                                <TextInput style={{ borderBottomColor: Colors.mainColor, borderBottomWidth: 1, fontFamily: Fonts.rixLoveFool, fontSize: 20 }}
                                    value={this.state.partnerName}
                                    placeholder='type your partner name'
                                    onChangeText={this.onChangeNamePartner} />
                            </Dialog.Content>
                            <Dialog.Actions>
                                <Button title='Done' onPress={this.submitDialogChangeNamePartner} color={Colors.mainColor} style={{ fontFamily: Fonts.rixLoveFool }} />
                            </Dialog.Actions>
                        </Dialog>
                    </Portal>
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
                                <Image source={require('../assets/icons/bg_heart3.png')} style={{ alignSelf: 'center', position: 'absolute', resizeMode: 'cover' }} />
                            </Row>

                            <Row size={1} >
                                <Col>
                                    <Row >
                                    </Row>
                                    <Row>
                                        <Col>
                                            <Text style={{ color: '#ff1b00', fontSize: 20, fontFamily: Fonts.fiolexGirl, alignSelf: 'center', marginTop: -22 }}>
                                                {convertDate(this.props.userInfo.loveDate)} - {convertDate(Date.now())}
                                            </Text>
                                        </Col>
                                    </Row>
                                </Col>
                            </Row>

                            <Row size={11}>
                                <Col size={11}>
                                    <Row size={3}>
                                        <Col>
                                            <TouchableOpacity onPress={this.chooseImageUser}>
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
                                            <Text onPress={this.showDialogChangeUserName} style={{ color: 'grey', fontSize: 20, fontFamily: Fonts.fiolexGirl, alignSelf: 'center', flex: 1 }}>
                                                {this.props.userInfo.name}
                                            </Text>
                                        </Col>
                                    </Row>
                                </Col>
                                <Col size={5}>
                                    <Image source={require('../assets/icons/beatingheart.gif')} style={{ alignSelf: 'center', height: 60, width: 60, marginTop: 80 }} />
                                </Col>
                                <Col size={11}>
                                    {
                                        this.props.userInfo.partnerId === 0 ?
                                            <>
                                                <Row size={3}>
                                                    <Col>
                                                        <TouchableOpacity onPress={this.chooseImagePartner}>
                                                            {
                                                                this.props.isLoadingGetAvatarPartner ?
                                                                    <View style={{ width: 70, height: 70, alignSelf: 'center', justifyContent: 'center' }}>
                                                                        <ActivityIndicator size="small" color={Colors.mainColor} />
                                                                    </View>
                                                                    :
                                                                    <Thumbnail large circular source={{ uri: 'data:image/png;base64,' + this.props.avatarPartner }} style={{ alignSelf: 'center', marginTop: 30, width: 100, height: 100 }} />
                                                            }
                                                        </TouchableOpacity>
                                                    </Col>
                                                </Row>
                                                <Row size={1}>
                                                    <Col>
                                                        <Text onPress={this.showDialogChangeNamePartner} style={{ color: 'grey', fontSize: 20, fontFamily: Fonts.fiolexGirl, alignSelf: 'center', flex: 1 }}>
                                                            {this.props.namePartner}
                                                        </Text>
                                                    </Col>
                                                </Row>
                                            </> :
                                            <>
                                                <Row size={3}>
                                                    <Col>
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
                                            </>
                                    }
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
            </Provider>
        )
    }
}
export default CountView
