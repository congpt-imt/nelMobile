import React, {Component} from "react";
import {TeacherService} from "../../services/api/teacherService";
import TeacherBox from "../sharedComponent/teacherBox";
import {FlatList} from "react-native";

export default class TeacherListView extends Component {
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
            this.setState({isLoading: true});
            TeacherService.getTeachers((data) => {
                let temp = this.state.data
                temp = temp.concat(data)
                this.setState({
                    data: temp,
                    isLoading: false
                });
                this.inProgressNetworkReq = false;
            }, (data) => {
                this.setState({error: data});
            });
        }
    }

    render() {

        const {onPress} = this.props;
        return (
            <FlatList
                data={this.state.data}
                renderItem={({item}) => (
                    <TeacherBox
                        image={item.image}
                        teacher_name={item.teacher_name}
                        description={item.discription}
                        stars={item.star}
                        onPress={onPress}
                    />
                )}
            />
        );
    }
}
