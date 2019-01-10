import React, { Component } from 'react';
import { StyleSheet, FlatList, Text, View } from 'react-native';
import { KeyboardAwareFlatList } from 'react-native-keyboard-aware-scroll-view'
import PropTypes from "prop-types";
import MessageRow from "./messageRow";
import { Constants } from "../../constants"

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
            { length: 100, offset: 100 * index, index }
        )
    }

    refresh = () => {
        const self = this
        setTimeout(() => { self.refs.flatList.scrollToEnd()});
    }

    componentDidMount = () => {
        this.refresh();
    }

    render() {
        const data = this.props.data
        return (
            <View style={styles.container}>
                <FlatList
                    style={{ height: Constants.SIZE_WINDOW.height - 150, padding: 10 }}
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
