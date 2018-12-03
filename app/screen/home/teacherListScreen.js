import React, {Component} from 'react';
import {View} from 'react-native';
import {generalStyle} from "../../resources/stylesheet/stylesheet";
import TeacherListView from "../../components/listView/teacherListView";

export default class TeacherList extends Component {

    render() {
        return (
            <View style={generalStyle.container}>
                <TeacherListView onPress={() => this.props.navigation.navigate('TeacherProfile')}/>
            </View>
        )
    }
}
