import React, {Component} from "react";
import {RecyclerListView, DataProvider, LayoutProvider} from "recyclerlistview";
import CategoryBox from "../sharedComponent/categoryBox";
import {CategoryService} from "../../services/api/categoryService";
import {Constants} from "../../constants";
import {Alert} from "react-native";
import {Text} from "react-native-elements";

export default class CategoryListView extends Component {
    constructor(props) {
        super(props);

        let layoutProvider = new LayoutProvider(
            index => {
                if (index) {
                    return Constants.VIEW_TYPE_HALF;
                }
            },
            (type, dim) => {
                switch (type) {
                    case Constants.VIEW_TYPE_HALF:
                        dim.width = Constants.SIZE_WINDOW.width / 2;
                        dim.height = Constants.SIZE_WINDOW.width / 2;
                        break;
                    case Constants.VIEW_TYPE_FULL:
                        dim.width = Constants.SIZE_WINDOW.width;
                        dim.height = Constants.SIZE_WINDOW.width / 2;
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
            CategoryService.getCategories((data) => {
                this.setState({
                    dataProvider: this.state.dataProvider.cloneWithRows(data),
                });

                this.inProgressNetworkReq = false;
            }, (data) => {
                Alert.alert(data.toString());
            });
        }
    }

    render() {
        const {onPress} = this.props;

        return <RecyclerListView
            style={{flex: 1}}
            // contentContainerStyle={{ margin: 4 }}
            layoutProvider={this.state.layoutProvider}
            dataProvider={this.state.dataProvider}
            rowRenderer={(type, data) => {
                switch (type) {
                    case Constants.VIEW_TYPE_HALF:
                        return <CategoryBox
                            image={data.image}
                            category_name={data.name}
                            width={(Constants.SIZE_WINDOW.width - 10) / 3}
                            height={(Constants.SIZE_WINDOW.width - 10) / 3}
                            onPress={onPress}/>;
                        break;
                    case Constants.VIEW_TYPE_FULL:
                        return <CategoryBox
                            image={data.image}
                            category_name={data.name}
                            width={(Constants.SIZE_WINDOW.width - 5)}
                            height={(Constants.SIZE_WINDOW.width - 10) / 2}
                            onPress={onPress}/>;
                        break;
                }
            }}
        />;

        // return <Text>{this.state.data.name}</Text>
    }
}
