import React, { Component } from 'react';
import { StyleSheet, FlatList, Text, View } from 'react-native';
import MessageRow from "./messageRow";
import { Constants } from "../../constants"
import { ChatService } from "../../services/api/chatService";

var mThis;
export default class MessageList extends Component {
    constructor(props) {
        super(props);
        mThis = this;
        const user = require('../../json_tmp/userProfile');
        this.state = {
            id: user.id,
            isLoading: false,
            numberOfPage: 0,
            messagesHistory: []
        }
        
        this.renderItem = ({ item }) => {
            return <MessageRow message={item} />
        }

        this.emptyList = () => {
            return (
                <Text style={styles.placeholder}>
                    Hello
                </Text>
            )
        }

        this.itemLayout = (data, index) => (
            { length: 100, offset: 100 * index, index }
        )
    }

    newMessage = () => {
        if (this.props.data != null) {
            let temp = this.state.messagesHistory;
            temp.push(this.props.data);
            this.setState(() => ({
                messagesHistory: temp,
              }));
        }
        
    }

    componentWillMount() {
        this.fetchMoreData();
    }

    fetchMoreData = () => {
        let idFrom = 1;
        let idTo = 2;
        ChatService.getMessagesHistory(idFrom, idTo, this.state.numberOfPage, (data) => {
            if (data.length == 0) return;
            let temp = this.state.messagesHistory;
            for (var i = 0; i < data.length; i++) {
                let message = {
                    "text": data[i].content,
                    "image": data[i].id == this.state.id ? "" : temp.image,
                    "time": data[i].create_at,
                    "isCurrentUser": data[i].fromId == this.state.id ? true : false,
                }
                temp.unshift(message);
            }
            
            this.setState((previousState) => ({
                messagesHistory: temp,
                numberOfPage: previousState.numberOfPage + 1,
              }));
        });
    }

    refresh(){
        const self = this
        setTimeout(() => { self.refs.flatList.scrollToEnd({animated: true}), 200 });
    }
    
    componentDidMount = () => {
        this.refresh();
    }

    loadMore = () => {
        this.fetchMoreData();
    }

    render() {
        const data = this.props.data
        return (
            <View style={styles.container}>
                <FlatList
                    ref={"flatList"}
                    refreshing={this.state.isLoading}
                    onRefresh={this.loadMore}
                    //onEndReached={this.refresh}
                    style={{ height: Constants.SIZE_WINDOW.height - 150, padding: 10 }}
                    data={this.state.messagesHistory}
                    keyExtractor={(item, index) => index}
                    renderItem={this.renderItem}
                    getItemLayout={this.itemLayout}
                    ListEmptyComponent={this.emptyList}
                />
            </View>
        )
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        flexDirection: 'column'
    }
});
