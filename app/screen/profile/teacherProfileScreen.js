import React, { Component } from 'react';
import { StyleSheet, View, Text, Image, ScrollView } from 'react-native';
import StarRating from 'react-native-star-rating';
import Ionicons from 'react-native-vector-icons/Ionicons';
import AvatarBox from "../../components/sharedComponent/avatarBox";
import { TeacherService } from '../../services/api/teacherService';
import { ColorTheme } from "../../constants";
import { stringify } from 'querystring';
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';

export default class TeacherProfile extends Component {
    constructor(props) {
        super(props);
        this.state = {
            data: [],
            error: null,
        };

    }

    componentWillMount() {
        this.fetchData();
    }

    fetchData() {
        const teacherID = 2;
        TeacherService.getTeacherById(teacherID, (result) => {
            this.setState({
                data: result.data[0]
            });
        }, (result) => {
            this.setState({ error: result });
        });
    }

    render() {
        return (
            <View style={styles.container}>
                <ScrollView contentContainerStyle={{ flexGrow: 1, justifyContent: 'center' }}>
                    <View style={styles.header}>
                        <AvatarBox
                            image={this.state.data.imageUrl}
                            sizeAvatar={80}
                            sizeIsOnline={15}
                            marginTop={0} />
                        <Text style={styles.name}>{this.state.data.username}</Text>

                        <View style={{ flexDirection: 'column' }}>
                            <View style={styles.row}>
                                <FontAwesome5 name={'birthday-cake'} size={12} color={'#fff'} />
                                <Text style={styles.info}>{this.state.data.birthday}</Text>
                            </View>

                            <View style={styles.row}>
                                <FontAwesome5 name={'transgender'} size={12} color={'#fff'} />
                                <Text style={styles.info}>{this.state.data.gender}</Text>
                            </View>

                            <View style={styles.row}>
                                <FontAwesome5 name={'envelope'} size={12} color={'#fff'} />
                                <Text style={styles.info}>{this.state.data.email}</Text>
                            </View>
                        </View>
                    </View>
                    <View style={styles.body}>
                        <View style={styles.row}>
                            <FontAwesome5 name={'briefcase'} size={16} color={'#fff'} />
                            <Text style={styles.h1}>EXPERIENCE</Text>
                        </View>
                        <Text style={styles.content}>{this.state.data.experience}</Text>

                        <View style={styles.row}>
                            <FontAwesome5 name={'graduation-cap'} size={16} color={'#fff'} />
                            <Text style={styles.h1}>DESCRIPTION</Text>
                        </View>
                        <Text style={styles.content}>{this.state.data.description}</Text>
                    </View>
                </ScrollView>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
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
        justifyContent: 'flex-end',
    },
});
