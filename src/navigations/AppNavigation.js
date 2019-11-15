import React from 'react'
import { createAppContainer } from 'react-navigation'
import { Transition } from 'react-native-reanimated'
import createAnimatedSwitchNavigator from 'react-navigation-animated-switch'

import SplashContainer from '../containers/SplashContainer'
import IntroductionContainer from '../containers/IntroductionContainer'

import SignInStack from './SignInStack'
import AppBottomTabNavigator from './AppBottomTabNavigator'


const AppNavigation = createAnimatedSwitchNavigator(
    {
        SplashScreen: { screen: SplashContainer },
        GetStatedScreen: { screen: IntroductionContainer },
        Login: { screen: SignInStack },
        App: { screen: AppBottomTabNavigator }
    },
    {
        initialRouteName : 'SplashScreen'
    },
    {
        transition: (
            <Transition.Together>
                <Transition.Out
                    type="scale"
                    durationMs={400}
                    interpolation="easeIn"
                />
                <Transition.In type="fade" durationMs={500} />
            </Transition.Together>
        ),
    }
)

const AppContainer = createAppContainer(AppNavigation)

export default AppContainer