import React, {Component} from 'react';
import {View, StyleSheet, ScrollView} from 'react-native';
import CategoryBox from '../../components/darkComponent/categoryBox';

export default class Home extends Component {

    constructor(props) {
        super(props);

        this.state = {
            results: {
                data: []
            }
        };

        this.fetchData = this.fetchData.bind(this);
    }

    componentDidMount() {
        this.fetchData();
    }

    fetchData() {
        let data = require('../../categories');
        this.setState({
            results: data
        });
    }


    render() {
        let contents = this.state.results.data.map((item) => {
            return (
                <View style={styles.category_box}>
                    <CategoryBox category_name={item.name}/>
                </View>
            );
        });

        return (
            <View style={styles.container}>
                <ScrollView>
                    {contents}
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
