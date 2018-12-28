import React, { Component } from 'react';
import { StyleSheet, FlatList, Text, View } from 'react-native';
import PropTypes from "prop-types";
import MessageRow from "./messageRow";

export default class MessageList extends Component {
    constructor() {
        super();

        this.renderItem = ({ item }) => {
            return <MessageRow message={item} />
        }

        this.emptyList = () => {
            return (
                <Text style={styles.placeholder}>
                    Hello
                </Text>
            )
        }

        this.itemLayout = (data, index) => (
            { length: 50, offset: 50 * index, index }
        )
    }

    refresh = () => {
        const self = this
        setTimeout(() => { self.refs.flatList.scrollToEnd(), 200 });
    }

    componentDidMount() {
        this.refresh();
    }

    // componentDidMount() {
    //     const self = this
    //     setTimeout(function () {
    //         self.flatList.scrollToEnd()
    //     }, 2000)
    // }

    // componentDidUpdate() {
    //     if (this.props.data.length) {
    //         this.flatList.scrollToIndex({animated: true, index: 0});
    //     }
    // }

    render() {
        const data = this.props.data
        return (
            <View style={styles.container}>
                <FlatList
                    ref={"flatList"}
                    data={data}
                    keyExtractor={(item, index) => index}
                    renderItem={this.renderItem}
                    getItemLayout={this.itemLayout}
                    ListEmptyComponent={this.emptyList}
                />
            </View>
        )
    }
}

MessageList.propTypes = {
    data: PropTypes.array.isRequired,
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        flexDirection: 'column'
    }
});
