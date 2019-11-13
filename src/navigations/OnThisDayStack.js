import { createStackNavigator } from 'react-navigation'

import OnThisDayContainer from '../containers/OnThisDayContainer'
import ShowNoteContainer from '../containers/ShowNoteContainer'


const OnThisDayStack = createStackNavigator({
    OnThisDay: { screen: OnThisDayContainer},
    ShowNotes: { screen: ShowNoteContainer }
})

OnThisDayStack.navigationOptions = ({ navigation }) => {
    let tabBarVisible = true
    if (navigation.state.index > 0) {
      tabBarVisible = false
    }
    return {
      tabBarVisible
    }
}

export default OnThisDayStack