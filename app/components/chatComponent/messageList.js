import React, {Component} from 'react';
import {StyleSheet, FlatList, Text, ScrollView} from 'react-native';
import PropTypes from "prop-types";
import MessageRow from "./messageRow";

export default class MessageList extends Component {
    constructor() {
        super();

        this.renderItem = ({item}) => {
            return <MessageRow message={item}/>
        }

        this.emptyList = () => {
            return (
                <Text style={styles.placeholder}>
                    Hello
                </Text>
            )
        }

        this.itemLayout = (data, index) => (
            {length: 50, offset: 50 * index, index}
        )
    }

    // componentDidMount() {
    //     const self = this
    //     setTimeout(function () {
    //         self.flatList.scrollToEnd()
    //     }, 2000)
    // }
    //
    // componentDidUpdate() {
    //     if (this.props.data.length) {
    //         this.flatList.scrollToIndex({animated: true, index: 0});
    //     }
    // }

    render() {
        const data = this.props.data
        return (
            <FlatList
                ref={(ref) => this.flatList = ref}
                data={data}
                keyExtractor={(item, index) => index}
                renderItem={this.renderItem}
                getItemLayout={this.itemLayout}
                ListEmptyComponent={this.emptyList}
                />
        )
    }
}

MessageList.propTypes = {
    data: PropTypes.array.isRequired,
}

const styles = StyleSheet.create({
    flatlistContainerStyle: {
        flexGrow: 1,
        justifyContent: 'center'
    },
    container: {
        display: 'flex',
        flex: 1,
        flexDirection: 'column',
    },
    placeholder: {
        fontSize: 16,
        color: 'grey',
        textAlign: 'center'
    }
});
