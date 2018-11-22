import React, {Component} from 'react';
import {StyleSheet, View, Text, Image, ScrollView} from 'react-native';
import StarRating from 'react-native-star-rating';
import Ionicons from 'react-native-vector-icons/Ionicons';
import AvatarBox from "../../components/sharedComponent/avatarBox";
import {TeacherService} from '../../services/api/teacherService';
import {ColorTheme} from "../../constants";

export default class TeacherProfile extends Component {
    constructor() {
        super();
        this.state = {
            teacher: TeacherService.getTeacher()
        };
    }

    render() {
        return (
            <View style={styles.container}>
                <ScrollView contentContainerStyle={{flexGrow: 1, justifyContent: 'center'}}>
                    <View style={styles.avatar}>
                        <AvatarBox
                            image={this.state.teacher.image}
                            sizeAvatar={120}
                            sizeIsOnline={30}
                            marginTop={10}
                        />
                    </View>
                    {/*<View style={styles.basic_information}>*/}
                        {/*<Text>{this.state.teacher.name}</Text>*/}
                    {/*</View>*/}

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
    avatar: {
        height: 140,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: 'transparent'
    },
    basic_information: {

    },
    details: {},
    rating: {}
});
