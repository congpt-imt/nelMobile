import React, {Component} from 'react';
import {View, StyleSheet, ScrollView} from 'react-native';
import CategoryBox from '../../components/darkComponent/categoryBox';

export default class HomeScreen extends Component {

    constructor(props) {
        super(props);

        this.state = {
            //Lets initialize results with the same struct we expect to receive from the api
            results: {
                data: []
            }
        };
        //Using ES6 we need to bind methods to access 'this'
        this.fetchData = this.fetchData.bind(this);
    }

    componentDidMount() {
        this.fetchData();
    }

    fetchData() {
        // fetch('../../categories')
        //     .then((response) => response.json())
        //     .then((responseData) => {
        //         this.setState({
        //             results: responseData
        //         });
        //     })
        //     .done();
        let data = require('../../categories');
        this.setState({
            results: data
        });
    }


    render() {
        let contents = this.state.results.data.map((item) => {
            return (
                <View style={ styles.category_box }>
                    <CategoryBox category_name={item.name}/>
                </View>
            );
        });

        return (
            <View style={styles.container}>
                <ScrollView>
                {/*<View style={styles.category_box}>*/}
                    {/*<CategoryBox category_name={'Test_1'}/>*/}
                {/*</View>*/}
                {/*<View style={styles.category_box}>*/}
                    {/*<CategoryBox category_name={'Test_2'}/>*/}
                {/*</View>*/}
                { contents }
                </ScrollView>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        // flexDirection: 'row',
        backgroundColor: '#1B1A20',
    },
    category_box: {
        flex: 1,
        margin: 10
    }
})
