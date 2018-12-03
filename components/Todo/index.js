import React from 'react';
import { StyleSheet, Text, TextInput, View, FlatList } from 'react-native';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { actionCreators as actions } from './actions';

class TodoList extends React.Component {

    render() {
        // JSX magic
        const {
            items,
            addItem,
        } = this.props;

        return (
            <View style={styles.container}>
                <Text>TodoList</Text>
                <TextInput
                    style={styles.input}
                    onChangeText={text => addItem(text)}
                />
                <FlatList style={styles.list}
                    data={items}
                    renderItem={({ item }) => <Text>{item}</Text>}
                />
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        padding: 24,
        backgroundColor: '#fff',
    },
    input: {

    },
    list: {

    }
});


function mapStateToProps(state) {
    const { items } = state;
    return {
        items
    };
}

function mapDispatchToProps(dispatch) {
    return {
        addItem: bindActionCreators(actions.addItem, dispatch),
    };
}

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(TodoList);

