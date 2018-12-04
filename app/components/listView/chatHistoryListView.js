import React, {Component} from "react";
import ChatBox from "../sharedComponent/chatBox";
import {FlatList} from 'react-native'
import {ChatService} from "../../services/api/chatService";

export default class ChatHistoryListView extends Component {
    constructor(props) {
        super(props);

        this.state = {
            data: [],
            isLoading: false,
            page: 1,
            error: null,
        };

        this.inProgressNetworkReq = false;
    }

    componentWillMount() {
        this.fetchMoreData();
    }

    fetchMoreData() {
        if (!this.inProgressNetworkReq) {

            this.inProgressNetworkReq = true;
            const data = ChatService.getChatHistory();
            this.inProgressNetworkReq = false;
            let temp = this.state.data
            temp = temp.concat(data)
            this.setState({
                data: temp,
                isLoading: false
            });
        }
    }

    render() {
        const {onPress} = this.props;

        return (
            <FlatList
                data={this.state.data}
                renderItem={({item}) => (
                    <ChatBox
                        onPress={onPress}
                        image={item.image}
                        name={item.name}
                    />
                )}
            />
        );
    }
}
