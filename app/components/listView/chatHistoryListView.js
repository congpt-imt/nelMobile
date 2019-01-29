import React, { Component } from "react";
import ChatBox from "../sharedComponent/chatBox";
import { FlatList } from 'react-native'
import { ChatService } from "../../services/api/chatService";

export default class ChatHistoryListView extends Component {
    constructor(props) {
        super(props);
        const user = require('../../json_tmp/userProfile');
        this.state = {
            userId: user.id,
            data: [],
        };

        this.inProgressNetworkReq = false;
    }

    componentWillMount() {
        this.fetchMoreData();
    }

    fetchMoreData = () => {
        ChatService.getChatHistory(this.state.userId, (data) => {
            let temp = []; temp.push(data[0]);
            let count = 0;
            for (var i = 1; i < data.length; i++) {
                if ((temp[count].fromId != data[i].toId) || (temp[count].toId != data[i].fromId)) {
                    temp.push(data[i]);
                    count++;
                }   
            }
            this.setState({ data: temp });
        });
    }

    render() {
        const { onPress } = this.props;

        return (
            <FlatList
                data={this.state.data}
                renderItem={({ item }) => (
                    <ChatBox
                        onPress={onPress}
                        data={item}
                    />
                )}
            />
        );
    }
}
