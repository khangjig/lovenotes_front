import { createStackNavigator } from 'react-navigation'

import SignInContainer from '../containers/SignInContainer'
import RegisterContainer from '../containers/RegisterContainer'


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

export default SignInStack