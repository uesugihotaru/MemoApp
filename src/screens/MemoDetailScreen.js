import React from 'react';
import { StyleSheet, View, Text } from 'react-native';
import CircleButton from '../elements/CircleButton';

class MemoDetailScreen extends React.Component {
    render() {
        return <View style={styles.container}>
            <View>
              <View style={styles.memoHeader}>
                <View>
                  <Text style={styles.memoHeaderTitle}>メモ6</Text>
                  <Text style={styles.memoHeaderDate}>2019/01/02</Text>
                </View>
              </View>
            </View>

            <View style={styles.memoContent}>
              <Text>ここに本文が入ります。</Text>
            </View>

            <CircleButton color="white" style={styles.editButton}>+</CircleButton>
          </View>;
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        width: '100%',
    },
    memoHeader: {
        height: 100,
        backgroundColor: '#17313C',
        justifyContent: 'center',
        padding: 10,
    },
    memoHeaderTitle: {
        fontSize: 20,
        fontWeight: 'bold',
        color: '#fff',
        marginBottom: 4,
    },
    memoHeaderDate: {
        fontSize: 12,
        color: '#fff',
    },
    memoContent: {
        paddingTop: 30,
        paddingLeft: 20,
        paddingRight: 20,
        paddingBottom: 20,
        backgroundColor: '#ddd',
        flex: 1,
    },
    editButton: {
        top: 80,
    },
});

export default MemoDetailScreen;