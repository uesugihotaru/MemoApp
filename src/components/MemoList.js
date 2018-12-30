import React from 'react';
import { StyleSheet, View, Text } from 'react-native';

class MemoList extends React.Component {
    render() {
        return (
            <View style={styles.memoList}>
                <View style={styles.memoListItem}>
                    <Text style={styles.memoTitle}>メモ１</Text>
                    <Text style={styles.memoDate}>2018/12/25</Text>
                </View>

                <View style={styles.memoListItem}>
                    <Text style={styles.memoTitle}>メモ２</Text>
                    <Text style={styles.memoDate}>2018/12/25</Text>
                </View>

                <View style={styles.memoListItem}>
                    <Text style={styles.memoTitle}>メモ３</Text>
                    <Text style={styles.memoDate}>2018/12/25</Text>
                </View>

                <View style={styles.memoListItem}>
                    <Text style={styles.memoTitle}>メモ４</Text>
                    <Text style={styles.memoDate}>2018/12/25</Text>
                </View>

                <View style={styles.memoListItem}>
                    <Text style={styles.memoTitle}>メモ５</Text>
                    <Text style={styles.memoDate}>2018/12/25</Text>
                </View>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    memoList: {
        width: '100%',
        flex: 1,
    },
    memoListItem: {
        padding: 16,
        borderBottomWidth: 1,
        borderBottomColor: '#ddd',
    },
    memoTitle: {
        fontSize: 18,
    },
    memoDate: {
        fontSize: 12,
        color: '#a2a2a2',
    },
});

export default MemoList;