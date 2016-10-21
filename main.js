import Exponent from 'exponent';

import React from 'react';

import {
  StyleSheet,
  View,
} from 'react-native';

import TaskList from './TaskList';

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center',
    },
});

class PluralTodo extends React.Component {

    constructor(props, context) {
        super(props, context);
        this.state = {
            todos: [
                {
                    task: 'Learn Mharsa Native',
                },
            ],
        };
    }
    render() {
        return (
          <View style={styles.container}>
            <TaskList
                todos = {this.state.todos}
            />
            </View>
          );
    }

}

Exponent.registerRootComponent(PluralTodo);
