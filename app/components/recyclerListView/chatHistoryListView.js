import React, {Component} from "react";
import {RecyclerListView, DataProvider, LayoutProvider} from "recyclerlistview";
import {Constants} from "../../constants";
import {TeacherService} from "../../services/api/teacherService";
import ChatBox from "../darkComponent/chatBox";

const ViewTypes = {
    FULL: 0,
    HALF: 1
}

export default class ChatHistoryListView extends Component {
    constructor(args) {
        super(args);

        let layoutProvider = new LayoutProvider(
            index => {
                if (index) {
                    return ViewTypes.FULL;
                }
            },
            (type, dim) => {
                switch (type) {
                    case ViewTypes.FULL:
                        dim.width = Constants.SIZE_WINDOW.width;
                        dim.height = Constants.SIZE_WINDOW.height / 5.5;
                        break;
                    default:
                        dim.width = 0;
                        dim.height = 0;
                }
            }
        );

        this.state = {
            layoutProvider: layoutProvider,
            dataProvider: new DataProvider((r1, r2) => {
                return r1 !== r2;
            }),
            data: [],
            count: 0,
        };

        this.inProgressNetworkReq = false;
    }

    componentWillMount() {
        this.fetchMoreData();
    }

    fetchMoreData() {
        if (!this.inProgressNetworkReq) {

            this.inProgressNetworkReq = true;
            const data = TeacherService.getTeachers(this.state.count, 20);
            this.inProgressNetworkReq = false;
            this.setState({
                dataProvider: this.state.dataProvider.cloneWithRows(
                    this.state.data.concat(data)
                ),
                images: this.state.data.concat(data),
                count: this.state.count + 20,
            });
        }
    }

    _rowRenderer() {
        return <ChatBox/>
    }

    render() {
        const {onPress} = this.props;

        return <RecyclerListView
            style={{flex: 1}}
            layoutProvider={this.state.layoutProvider}
            dataProvider={this.state.dataProvider}
            rowRenderer={this._rowRenderer}
        />;
    }
}
