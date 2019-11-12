import { createStackNavigator } from 'react-navigation'

import NoteContainer from '../containers/NoteContainer'
import NoteWrittingContainer from '../containers/NoteWrittingContainer'
import ShowNoteContainer from '../containers/ShowNoteContainer'
import UserContainer from '../containers/UserContainer'


const NoteStack = createStackNavigator({
    Notes: { screen: NoteContainer },
    NotesWrittings: { screen: NoteWrittingContainer },
    ShowNotes: { screen: ShowNoteContainer},
    Users: { screen: UserContainer}
})

NoteStack.navigationOptions = ({ navigation }) => {
    let tabBarVisible = true
    if (navigation.state.index > 0) {
      tabBarVisible = false
    }
  
    return {
      tabBarVisible
    }
}

export default NoteStack