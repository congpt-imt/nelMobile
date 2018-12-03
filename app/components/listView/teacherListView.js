import React, {Component} from "react";
import {DataProvider, LayoutProvider, RecyclerListView} from "recyclerlistview";
import {Constants} from "../../constants";
import {TeacherService} from "../../services/api/teacherService";
import TeacherBox from "../sharedComponent/teacherBox";
import {Alert} from "react-native";
import {Text} from "react-native-elements";


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
                        dim.height = 100;
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
        };

        this.inProgressNetworkReq = false;
    }

    componentWillMount() {
        this.fetchMoreData();
    }

    componentWillReceiveProps = nextProps => {
        alert(JSON.stringify(nextProps));
    }

    fetchMoreData() {
        if (!this.inProgressNetworkReq) {

            this.inProgressNetworkReq = true;
            TeacherService.getTeachers((data) => {
                this.setState({
                    dataProvider: this.state.dataProvider.cloneWithRows(data),
                });
                // alert(JSON.stringify(data[0].nelUserInformationDTO.nelRatingDTO));
                this.inProgressNetworkReq = false;
            }, (data) => {
                alert(JSON.stringify(data));
            });
        }
    }

    render() {

        return <RecyclerListView
            style={{flex: 1}}
            layoutProvider={this.state.layoutProvider}
            dataProvider={this.state.dataProvider}
            rowRenderer={(type, data) => {
                // const {nelUserInformationDTO: {nelRatingDTO: {rate}}} = data
                if (data !== undefined) {
                    alert(JSON.stringify(data));
                }

                return <TeacherBox
                        image={data.image}
                        teacher_name={data.username}
                        nelProfile={data.nelProfile}
                        // stars={data.nelUserInformationDTO.nelRatingDTO.id}
                        onPress={() => this.props.navigation.navigate('TeacherProfile')}
                    />
            }}
        />;
    }
}
