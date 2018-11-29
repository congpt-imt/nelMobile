import React, {Component} from 'react'
import {StyleSheet, TextInput, TouchableOpacity, View} from 'react-native'
import {ColorTheme, Constants} from "../../constants";
import FontAwesome5 from "react-native-vector-icons/FontAwesome5";

export default class HeaderBar extends Component {
    render() {
        const {navigation} = this.props;
        // const parent = navigation.dangerouslyGetParent();
        // const isDrawerOpen = parent && parent.state && parent.state.isDrawerOpen;
        return (
            <View style={styles.container}>
                <View style={styles.drawer_container}>
                    <View style={styles.drawer_button}>
                        <TouchableOpacity onPress={() => {
                            if (isDrawerOpen) {
                                navigation.closeDrawer();
                            } else {
                                navigation.openDrawer();
                            }}}>
                            <FontAwesome5 name={'list'} size={20} color={'#fff'}/>
                        </TouchableOpacity>
                    </View>
                    <TextInput
                        style={styles.text_input}
                        placeholder={'Search...'}
                        placeholderTextColor={'gray'}
                    />
                </View>

                <View style={styles.directional}>
                    <FontAwesome5 name={'home'} size={24} color={'#fff'} style={styles.icon}/>
                    <FontAwesome5 name={'users'} size={24} color={'#fff'} style={styles.icon}/>
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
        width: 50,
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
        width: Constants.SIZE_WINDOW.height / 4,
        margin: 4,
        marginLeft: 0,
        borderColor: 'gray',
        borderLeftWidth: 0,
        borderRadius: 5,
        borderTopLeftRadius: 0,
        borderBottomLeftRadius: 0,
        borderWidth: 1,
        paddingLeft: 15,
        color: ColorTheme.TEXT_COLOR,
        fontSize: 15
    },
    directional: {
        flex: 1 / 1.5,
        marginLeft: 8,
        flexDirection: 'row',
    },
    icon: {
        flex: 1,
        marginTop: 15,
    },
    icon_bell: {
        flex: 1,
        marginTop: 18,
    }
});
