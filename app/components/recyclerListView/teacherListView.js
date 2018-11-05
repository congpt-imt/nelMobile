import React, {Component} from "react";
import {RecyclerListView, DataProvider, LayoutProvider} from "recyclerlistview";
import {Constants} from "../../constants";
import {TeacherService} from "../../services/api/teacherService";
import TeacherBox from "../darkComponent/teacherBox";


export default class TeacherListView extends Component {
    constructor(args) {
        super(args);

        let layoutProvider = new LayoutProvider(
            index => {
                if (index) {
                    return Constants.VIEW_TYPE_FULL;
                }
            },
            (type, dim) => {
                switch (type) {
                    case Constants.VIEW_TYPE_FULL:
                        dim.width = Constants.SIZE_WINDOW.width;
                        dim.height = Constants.SIZE_WINDOW.height / 5;
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

    render() {
        return <RecyclerListView
            style={{flex: 1}}
            layoutProvider={this.state.layoutProvider}
            dataProvider={this.state.dataProvider}
            rowRenderer={(type, data) => {
                return <TeacherBox
                        image={data.image}
                        teacher_name={data.name}
                        description={data.describe}
                        onPress={() => this.props.navigation.navigate('Teacher_Profile')}
                    />
            }}
        />;
    }
}
