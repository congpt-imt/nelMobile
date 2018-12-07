import React, { Component } from 'react';
import { NavigationActions } from 'react-navigation';
import { StyleSheet, Text, View, Alert } from 'react-native';
import { ColorTheme, Constants } from "../../constants";
import { UserService } from "../../services/api/userService";
import AvatarBox from "../../components/sharedComponent/avatarBox";
import ButtonCustom from "../../components/sharedComponent/buttonCustom";
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';

export default class Profile extends Component {
    constructor(props) {
        super(props);

        this.state = {
            data: UserService.getProfile(),
        };
    }

    componentWillMount() {
        this.fetchMoreData();
    }

    fetchMoreData() {
        
    }

    navigateToScreen = (route) => () => {
        const navigateAction = NavigationActions.navigate({
            routeName: route
        });
        this.props.navigation.dispatch(navigateAction);
    }

    render() {
        return (
            <View style={styles.container}>
                <View style={styles.header}>
                    <AvatarBox
                        image={'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRetduIy4qTlGphdeh67IHF7hJgSq3ifDRf_pURPlMpbbXhbxk6'}
                        sizeAvatar={80}
                        sizeIsOnline={15}
                        marginTop={0} />
                    <Text style={styles.name}>{this.state.data.name.toString()}</Text>

                    <View style={{ flexDirection: 'column' }}>
                        <View style={styles.row}>
                            <FontAwesome5 name={'birthday-cake'} size={12} color={'#fff'} />
                            <Text style={styles.info}>{this.state.data.birthday.toString()}</Text>
                        </View>

                        <View style={styles.row}>
                            <FontAwesome5 name={'home'} size={12} color={'#fff'} />
                            <Text style={styles.info}>{this.state.data.address.toString()}</Text>
                        </View>

                        <View style={styles.row}>
                            <FontAwesome5 name={'phone'} size={12} color={'#fff'} />
                            <Text style={styles.info}>{this.state.data.phone.toString()}</Text>
                        </View>

                        <View style={styles.row}>
                            <FontAwesome5 name={'envelope'} size={12} color={'#fff'} />
                            <Text style={styles.info}>{this.state.data.email.toString()}</Text>
                        </View>
                    </View>
                </View>
                <View style={styles.body}>
                    <View style={styles.row}>
                        <FontAwesome5 name={'briefcase'} size={16} color={'#fff'} />
                        <Text style={styles.h1}>WORK</Text>
                    </View>
                    <Text style={styles.content}>{this.state.data.work.toString()}</Text>

                    <View style={styles.row}>
                        <FontAwesome5 name={'graduation-cap'} size={16} color={'#fff'} />
                        <Text style={styles.h1}>EDUCATION</Text>
                    </View>
                    <Text style={styles.content}>{this.state.data.education.toString()}</Text>
                </View>

                <View style={styles.btn_Update}>
                    <ButtonCustom onPress={this.navigateToScreen('Update')} title={'UPDATE PROFILE'} />
                </View>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        flexDirection: 'column',
        margin: 10,
        marginBottom: 0,
        backgroundColor: ColorTheme.BACKGROUND_COLOR,
    },
    row: {
        flexDirection: 'row',
        marginTop: 3,
    },
    header: {
        flexDirection: 'column',
        margin: 5,
        backgroundColor: ColorTheme.BACKGROUND_COLOR,
        alignItems: 'center',
    },
    name: {
        fontSize: 20,
        color: ColorTheme.TEXT_COLOR,
        fontWeight: 'bold',
        marginTop: 10,
        marginBottom: 10,
    },
    info: {
        fontSize: 12,
        color: ColorTheme.TEXT_COLOR,
        // marginTop: 3,
        marginLeft: 5,
    },
    h1: {
        marginLeft: 5,
        fontSize: 16,
        fontWeight: 'bold',
        color: ColorTheme.TEXT_COLOR,
    },
    body: {
        margin: 20,
        flexDirection: 'column',
    },
    content: {
        fontSize: 13,
        color: ColorTheme.TEXT_COLOR,
    },
    btn_Update: {
        flex: 1,
        height: 40,
        justifyContent:'flex-end',
    },
})
