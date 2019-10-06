import { ToastAndroid } from 'react-native'

const Toast = (props) => {
    if (props.visible) {
        ToastAndroid.showWithGravityAndOffset(
            props.message,
            ToastAndroid.SHORT,
            ToastAndroid.BOTTOM,
            25,
            50,
        )
        return null
    }
    return null
}

export default Toast