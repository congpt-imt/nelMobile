import React, {Component} from 'react';
import {View, StyleSheet} from 'react-native';
import CategoryListView from '../../components/recyclerListView/categoryListView';

export default class Home extends Component {

    render() {
        return (
            <View style={styles.container}>
                <CategoryListView onPress={() => this.props.navigation.navigate('List_Teacher')}/>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#1B1A20',
    },
    category_box: {
        flex: 1,
        margin: 10
    }
})
