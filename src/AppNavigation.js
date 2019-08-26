import React from 'react'
import { createStackNavigator, createAppContainer, createSwitchNavigator } from 'react-navigation'
import { Transition } from 'react-native-reanimated'
import createAnimatedSwitchNavigator from 'react-navigation-animated-switch'

import SplashContainer from './containers/SplashContainer'
import GetStartedContainer from './containers/GetStartedContainer'
import SignInContainer from './containers/SignInContainer'
import RegisterContainer from './containers/RegisterContainer'
import DemoContainer from './containers/DemoContainer'
import DemoContainer2 from './containers/DemoContainer2'

const AppStack = createStackNavigator(
    {
        DemoContainer: { screen: DemoContainer },
        DemoContainer2: { screen: DemoContainer2 }
    }
)

const SignInStack = createStackNavigator(
    {
        SignIn: { screen: SignInContainer },
        Register: { screen: RegisterContainer }
    },
    {
        headerMode: 'none',
        mode: 'modal'
    }
)

const AppNavigation = createAnimatedSwitchNavigator(
    {
        SplashScreen: { screen: SplashContainer },
        GetStatedScreen: { screen: GetStartedContainer },
        Login: { screen: SignInStack },
        App: { screen: AppStack }
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