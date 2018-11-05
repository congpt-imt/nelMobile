import React, {Component} from 'react';
import {View} from 'react-native';
import CategoryListView from '../../components/recyclerListView/categoryListView';
import {generalStyle} from "../../resources/stylesheet/stylesheet";

export default class Home extends Component {

    render() {
        return (
            <View style={generalStyle.container}>
                <CategoryListView onPress={() => this.props.navigation.navigate('List_Teacher')}/>
            </View>
        )
    }
}
