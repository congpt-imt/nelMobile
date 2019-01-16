import React, { Component } from 'react';
import { StyleSheet, FlatList, Text, View } from 'react-native';
import { KeyboardAwareFlatList } from 'react-native-keyboard-aware-scroll-view'
import PropTypes from "prop-types";
import MessageRow from "./messageRow";
import { Constants } from "../../constants"
import { ChatService } from "../../services/api/chatService";

export default class MessageList extends Component {
    constructor(props) {
        super(props);
        this.state = {
            id: 1,
            isLoading: false,
            pageNumber: 0,
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

    refresh = () => {
        const self = this
        setTimeout(() => { self.refs.flatList.scrollToEnd() });
        //setTimeout(() => {self.refs.flatList.scrollToOffset({x: 0, y: 0, animated: true})});  
    }

    componentWillMount() {
        this.fetchMoreData(this.state.pageNumber);
    }

    fetchMoreData(pageNumber) {
        let idFrom = 1;
        let idTo = 2;
        ChatService.getMessagesHistory(idFrom, idTo, pageNumber, (data) => {
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
            //alert(JSON.stringify(temp));
            this.setState((prevState) => {
                return {
                    messagesHistory: temp,
                };
            });
        });
        this.refresh();
    }

    componentDidMount = () => {
        this.refresh();
    }

    loadMore = () => {
        this.setState = { isLoading: true };
        var temp = this.state.pageNumber + 1;
        alert(temp);
        this.setState = { pageNumber: temp};
        this.fetchMoreData(this.state.pageNumber);
        this.setState = { isLoading: false };
    }

    render() {
        const data = this.props.data
        return (
            <View style={styles.container}>
                <FlatList
                    //inverted
                    refreshing={this.state.isLoading}
                    onRefresh={this.loadMore}
                    style={{ height: Constants.SIZE_WINDOW.height - 150, padding: 10 }}
                    ref={"flatList"}
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
