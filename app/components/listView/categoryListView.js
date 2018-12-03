import React, {Component} from "react";
import CategoryBox from "../sharedComponent/categoryBox";
import {CategoryService} from "../../services/api/categoryService";
import {Constants} from "../../constants";
import {FlatList} from "react-native";

export default class CategoryListView extends Component {
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

    componentDidMount() {
        this.fetchMoreData();
    }

    fetchMoreData() {
        if (!this.inProgressNetworkReq) {
            this.inProgressNetworkReq = true;
            this.setState({ isLoading: true });
            CategoryService.getCategories((data) => {
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
                columnWrapperStyle={{marginTop: 5}}
                horizontal={false}
                numColumns={2}
                renderItem={({item}) => (
                    <CategoryBox
                    category_id={item.id}
                    image={item.image}
                    category_name={item.name}
                    width={Constants.SIZE_WINDOW.width / 3 - 20}
                    height={Constants.SIZE_WINDOW.width / 3 - 20}
                    onPress={onPress}/>
                )}
            />
        );

    }
}
