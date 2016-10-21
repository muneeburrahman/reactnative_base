/**
 * Created by muneeburrahman on 10/20/16.
 */
import React, { Component } from 'react';

import {
    // AppRegistry,
    StyleSheet,
    Text,
    View,
    ListView,
} from 'react-native';

const styles = StyleSheet.create({
    container: {
        paddingTop: 40,
    },
});

export default class TaskList extends Component {

    constructor(props, context) {
        super(props, context);

        this.state = {

        };
    }
    render() {
        return (
        <View style={styles.container}>
        <Text> This is tasklist</Text>
        <ListView
            dataSource={this.state.dataSource}

        />
        </View>
      );
    }


}


module.exports = TaskList;
