import {StyleSheet} from 'react-native'
import {ColorTheme} from "../../constants";

export const generalStyle = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: ColorTheme.BACKGROUND_COLOR
    },
    container_row: {
        flex: 1,
        flexDirection: 'row',
        backgroundColor: ColorTheme.BACKGROUND_COLOR
    },

})
