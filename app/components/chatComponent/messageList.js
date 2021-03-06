import React, { Component } from 'react';
import { StyleSheet, FlatList, Text, View } from 'react-native';
import MessageRow from "./messageRow";
import { Constants } from "../../constants"
import { ChatService } from "../../services/api/chatService";

export default class MessageList extends Component {
    constructor(props) {
        super(props);
        const user = require('../../json_tmp/userProfile');
        this.state = {
            id: user.id,
            isLoading: false,
            numberOfPage: 0,
            messagesHistory: []
        }

        this.renderItem = ({ item }) => {
            return (
                <MessageRow message={item} />
            )
        };

        this.emptyList = () => {
            return (
                <Text style={styles.placeholder}>
                    Hello
                </Text>
            )
        }

        this.itemLayout = (data, index) => (
            { length: 120, offset: 120 * index, index }
        )
    }

    newMessage = () => {
        if (this.props.data != null) {
            let temp = this.state.messagesHistory;
            temp.unshift(this.props.data);
            this.setState(() => ({
                messagesHistory: temp,
            }));
        }
    }

    componentWillMount() {
        this.fetchMoreData();
    }

    fetchMoreData = () => {
        let idFrom = this.state.id;
        let idTo = this.props.otherId;
        ChatService.getMessagesHistory(idFrom, idTo, this.state.numberOfPage, (data) => {
            if (data.length == 0) return;
            var temp = this.state.messagesHistory;
            for (var i = 0; i < data.length; i++) {
                let message = {
                    "text": data[i].content,
                    "image": data[i].id == this.state.id ? "" : this.props.otherImage,
                    "time": data[i].create_at,
                    "isCurrentUser": data[i].fromId == this.state.id ? true : false,
                }
                temp.push(message);
            }

            this.setState((previousState) => ({
                messagesHistory: temp,
                numberOfPage: previousState.numberOfPage + 1,
            }));
        });
    }

    loadMore = () => {
        this.fetchMoreData();
    }

    render() {
        return (
            <View style={styles.container}>
                <FlatList
                    inverted
                    ref={"flatList"}
                    refreshing={this.state.isLoading}
                    //onRefresh={this.loadMore}
                    onEndReached={this.loadMore}
                    data={this.state.messagesHistory}
                    keyExtractor={(item, index) => index}
                    renderItem={this.renderItem}
                    getItemLayout={this.itemLayout}
                    ListEmptyComponent={this.emptyList}
                    style={{ height: Constants.SIZE_WINDOW.height - 150, padding: 10 }}
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
