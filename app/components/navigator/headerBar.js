import React, {Component} from 'react'
import {StyleSheet, TextInput, TouchableWithoutFeedback, View} from 'react-native'
import {ColorTheme, Constants} from "../../constants";
import FontAwesome5 from "react-native-vector-icons/FontAwesome5";
import Entypo from "react-native-vector-icons/Entypo";

export default class HeaderBar extends Component {
    render() {
        const {navigation} = this.props;

        return (
            <View style={styles.container}>
                <View style={styles.drawer_container}>
                    <View style={styles.drawer_button}>
                        <TouchableWithoutFeedback onPress={() => {
                            if (navigation.state.isDrawerOpen) {
                                navigation.closeDrawer();
                            } else {
                                navigation.openDrawer();
                            }
                        }}>
                            <FontAwesome5 name={'list'} size={20} color={'#fff'}/>
                        </TouchableWithoutFeedback>
                    </View>
                    <TextInput
                        style={styles.text_input}
                        placeholder={'Search...'}
                        placeholderTextColor={'gray'}
                    />
                </View>

                <View style={styles.directional}>
                    <FontAwesome5 name={'home'} size={24} color={'#fff'} style={styles.icon_home}/>
                    <Entypo name={'chat'} size={24} color={'#fff'} style={styles.icon_bell}/>
                    <FontAwesome5 name={'bell'} size={24} color={'#fff'} style={styles.icon_bell}/>
                </View>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        flexDirection: 'row',
        backgroundColor: ColorTheme.BAR_COLOR
    },
    drawer_container: {
        flex: 1,
        flexDirection: 'row'
    },
    drawer_button: {
        width: 70,
        margin: 4,
        marginRight: 0,
        alignItems: 'center',
        justifyContent: 'center',
        borderColor: 'gray',
        borderRightWidth: 0,
        borderRadius: 5,
        borderTopRightRadius: 0,
        borderBottomRightRadius: 0,
        borderWidth: 1,
    },
    text_input: {
        flex: 1,
        margin: 4,
        marginRight: Constants.SIZE_WINDOW.width/12,
        marginLeft: 0,
        borderColor: 'gray',
        borderLeftWidth: 0,
        borderRadius: 5,
        borderTopLeftRadius: 0,
        borderBottomLeftRadius: 0,
        borderWidth: 1,
        color: ColorTheme.TEXT_COLOR,
        fontSize: 15
    },
    directional: {
        flex: 1/2,
        marginBottom: 14,
        flexDirection: 'row',
        alignItems: 'center',
    },
    icon_home: {
        flex: 1,
        marginTop: 15,
    },
    icon_bell: {
        flex: 1,
        marginTop: 18,
    }
});
