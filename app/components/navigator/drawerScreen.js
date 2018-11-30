import React, {Component} from 'react';
import {DrawerActions, NavigationActions} from 'react-navigation';
import PropTypes from 'prop-types';
import {ScrollView, StyleSheet, Text, View, TouchableHighlight, TouchableNativeFeedback} from 'react-native';
import {ColorTheme} from "../../constants";
import FontAwesome5 from "react-native-vector-icons/FontAwesome5";
import Entypo from "react-native-vector-icons/Entypo";
import AvatarBox from "../sharedComponent/avatarBox";
import Ionicons from "react-native-vector-icons/Ionicons";
import MaterialIcons from "react-native-vector-icons/MaterialIcons";

class DrawerScreen extends Component {
    navigateToScreen = (route) => () => {
        const navigateAction = NavigationActions.navigate({
            routeName: route
        });
        this.props.navigation.dispatch(navigateAction);
        this.props.navigation.dispatch(DrawerActions.closeDrawer())
    }

    render() {
        return (
            <View style={styles.container}>
                <ScrollView>
                    <View style={styles.profile}>
                        <AvatarBox
                            image={'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQroyBjhQKLm-zNuBf4W4ODa2iqPWVprXzjkKvr3bjKSn-EutwRlg'}
                            sizeAvatar={80}
                            sizeIsOnline={15}
                            marginTop={0}/>
                        <Text style={{fontSize: 20, color: ColorTheme.TEXT_COLOR, fontWeight: 'bold', marginTop: 10}}>Phạm
                            Thành Công</Text>
                    </View>
                    <View style={styles.directional}>

                        <TouchableNativeFeedback useForeground={true}
                                                 background={TouchableNativeFeedback.Ripple('rgba(240, 240, 240, 0.1)', false)}
                                                 onPress={this.navigateToScreen('Home')}>
                            <View style={styles.itemView}>
                                <FontAwesome5 name={'home'} size={18} color={'#fff'} style={styles.icon}/>
                                <Text style={styles.itemDrawer}>Home</Text>
                            </View>
                        </TouchableNativeFeedback>


                        <TouchableNativeFeedback useForeground={true}
                                                 background={TouchableNativeFeedback.Ripple('rgba(240, 240, 240, 0.1)', false)}
                                                 onPress={this.navigateToScreen('Chat')}>
                            <View style={styles.itemView}>
                                <Entypo name={'chat'} size={18} color={'#fff'} style={styles.icon}/>
                                <Text style={styles.itemDrawer}>Chat</Text>
                            </View>
                        </TouchableNativeFeedback>


                        <TouchableNativeFeedback useForeground={true}
                                                 background={TouchableNativeFeedback.Ripple('rgba(240, 240, 240, 0.1)', false)}>
                            <View style={styles.itemView}>
                                <FontAwesome5 name={'bell'} size={18} color={'#fff'} style={styles.icon}/>
                                <Text style={styles.itemDrawer}>Notification</Text>
                            </View>
                        </TouchableNativeFeedback>

                        <TouchableNativeFeedback useForeground={true}
                                                 background={TouchableNativeFeedback.Ripple('rgba(240, 240, 240, 0.1)', false)}
                                                 onPress={this.navigateToScreen('Profile')}>
                            <View style={styles.itemView}>
                                <FontAwesome5 name={'user'} size={18} color={'#fff'} style={styles.icon}/>
                                <Text style={styles.itemDrawer}>Profile</Text>
                            </View>
                        </TouchableNativeFeedback>

                    </View>

                    <View style={styles.more}>
                        <TouchableNativeFeedback useForeground={true}
                                                 background={TouchableNativeFeedback.Ripple('rgba(240, 240, 240, 0.1)', false)}>
                            <View style={styles.itemView}>
                                <Ionicons name={'md-settings'} size={18} color={'#fff'} style={styles.icon}/>
                                <Text style={styles.itemDrawer}>Settings</Text>
                            </View>
                        </TouchableNativeFeedback>
                        <TouchableNativeFeedback useForeground={true}
                                                 background={TouchableNativeFeedback.Ripple('rgba(240, 240, 240, 0.1)', false)}>
                            <View style={styles.itemView}>
                                <MaterialIcons name={'live-help'} size={18} color={'#fff'} style={styles.icon}/>
                                <Text style={styles.itemDrawer}>Help</Text>
                            </View>
                        </TouchableNativeFeedback>
                        <TouchableNativeFeedback useForeground={true}
                                                 background={TouchableNativeFeedback.Ripple('rgba(240, 240, 240, 0.1)', false)}>
                            <View style={styles.itemView}>
                                <Entypo name={'info-with-circle'} size={18} color={'#fff'} style={styles.icon}/>
                                <Text style={styles.itemDrawer}>About Natural E-Learning</Text>
                            </View>
                        </TouchableNativeFeedback>
                    </View>
                </ScrollView>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: ColorTheme.BAR_COLOR
    },
    profile: {
        borderBottomWidth: 1,
        borderBottomColor: '#5d5d5d',
        padding: 10,
        flex: 1,
        alignItems: 'center'
    },
    directional: {
        borderBottomWidth: 1,
        borderBottomColor: '#5d5d5d',
        paddingTop: 10,
        paddingBottom: 10
    },
    itemView: {
        flex: 1,
        flexDirection: 'row',
        padding: 10,
    },
    icon: {
        flex: 1 / 6,
        paddingRight: 10,
        paddingLeft: 10
    },
    itemDrawer: {
        flex: 5 / 6,
        color: ColorTheme.TEXT_COLOR,
        fontSize: 15,
    },
    more: {
        paddingTop: 10,
        paddingBottom: 10
    }
})

DrawerScreen.propTypes = {
    navigation: PropTypes.object
};

export default DrawerScreen;
