import React from 'react'
import { createBottomTabNavigator } from 'react-navigation-tabs'
import Ionicons from "react-native-vector-icons/Ionicons"

import { Colors, Fonts } from '../styles/App'

import NoteStack from './NoteStack'
import OnThisDayStack from './OnThisDayStack'
import LoveCountStack from './LoveCountStack'


const AppBottomTabNavigator = createBottomTabNavigator(
    {
        OnThisDay : { screen: OnThisDayStack },
        Notes: { screen: NoteStack },
        LoveCount : { screen: LoveCountStack }
    },
    {
        initialRouteName: 'Notes',
        defaultNavigationOptions: ({ navigation }) => ({
            tabBarIcon: ({ focused, tintColor }) => {
                const { routeName } = navigation.state
                
                if (routeName === 'OnThisDay') {
                    iconName = 'md-notifications'
                } else if (routeName === 'Notes') {
                    iconName = 'md-paper'
                }
                else if (routeName === 'LoveCount') {
                    iconName = 'md-pulse'
                }
                return <Ionicons name={iconName} size={25} color={tintColor} />
            },

        }),
        tabBarOptions: {
            activeTintColor: Colors.mainColor,
            inactiveTintColor: Colors.greyColor,
            shadowOpacity: 0,
            elevation: 0,
            style: {
                borderColor: Colors.mainColor,
                borderTopWidth: 0.5,
            },
            labelStyle:{
                fontFamily: Fonts.fiolexGirl,
                fontSize:13,
            }
        }
    }
)

export default AppBottomTabNavigator