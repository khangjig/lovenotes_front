import { createStackNavigator } from 'react-navigation'

import NoteContainer from '../containers/NoteContainer'
import NoteWrittingContainer from '../containers/NoteWrittingContainer'
import ShowNoteContainer from '../containers/ShowNoteContainer'
import UserContainer from '../containers/UserContainer'

import { Fonts, Colors } from '../styles/App'


const NoteStack = createStackNavigator(
  {
    Notes: { screen: NoteContainer },
    NotesWrittings: { screen: NoteWrittingContainer },
    ShowNotes: { screen: ShowNoteContainer },
    Users: { screen: UserContainer }
  },
  {
    // initialRouteName: 'Notes',
    // defaultNavigationOptions: {
    //   headerTintColor: '#fff',
    //   headerStyle: {
    //     backgroundColor: 'white',
    //     shadowOpacity: 0,
    //     elevation: 0,
    //     borderBottomWidth: 0.7,
    //     borderColor: Colors.mainColor,
    //   },
    //   headerTitleStyle: {
    //     textAlign: 'center',
    //     flex: 1,
    //     fontFamily: Fonts.rixLoveFool,
    //     fontWeight: '300',
    //     color: Colors.mainColor,
    //     fontWeight: undefined,
    //     fontSize: 30,
    //   },
    //   navigationOptions: {
    //     tabBarLabel: 'Home!',
    //   },
    // }
  }
)

NoteStack.navigationOptions = ({ navigation }) => {
  let tabBarVisible = true
  if (navigation.state.index > 0) {
    tabBarVisible = false
  }
  return {
    tabBarVisible,
  }
}

export default NoteStack