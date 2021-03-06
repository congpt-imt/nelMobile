import React, {Component} from 'react';
import {View} from 'react-native';
import {generalStyle} from "../../resources/stylesheet/stylesheet";
import ChatHistoryListView from "../../components/listView/chatHistoryListView";

export default class ChatHistory extends Component {

    render() {
        return (
            <View style={generalStyle.container}>
                <ChatHistoryListView onPress={this.props.navigation}/>
            </View>
        )
    }
}
