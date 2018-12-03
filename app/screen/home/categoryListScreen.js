import React, {Component} from 'react';
import {View} from 'react-native';
import CategoryListView from '../../components/listView/categoryListView';
import {generalStyle} from "../../resources/stylesheet/stylesheet";

export default class CategoryList extends Component {

    render() {
        return (
            <View style={generalStyle.container}>
                <CategoryListView onPress={() => this.props.navigation.navigate('TeacherList')}/>
            </View>
        )
    }
}
