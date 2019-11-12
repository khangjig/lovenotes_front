import { createStackNavigator } from 'react-navigation'

import CountContainer from '../containers/CountContainer'


const LoveCountStack = createStackNavigator({
    Count: { screen: CountContainer }
})

LoveCountStack.navigationOptions = ({ navigation }) => {
    let tabBarVisible = true
    if (navigation.state.index > 0) {
      tabBarVisible = false
    }
  
    return {
      tabBarVisible
    }
}

export default LoveCountStack