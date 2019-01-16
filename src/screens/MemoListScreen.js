import React from 'react';
import { StyleSheet, View } from 'react-native';
import firebase from 'firebase';

import MemoList from '../components/MemoList';
import CircleButton from '../elements/CircleButton';

// this.props.navigation.navigate('MemoEdit');
class MemoListScreen extends React.Component {
    handlePress() {
        const db = firebase.firestore();
        db.settings({ timestampsInSnapshots: true });
        db.collection('memos').add({
            body: 'test memo',
            createdOn: '2019-01-16',
        })
        .then((docRef) => {
/////////////////ここから再開
        })
        .catch((error) => {

        });
    }
    render() {
        return (
            <View style={styles.container}>
                <MemoList navigation={this.props.navigation} />
                <CircleButton name="plus" onPress={this.handlePress.bind(this)} />
            </View>
        );
    }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    width: "100%",
    backgroundColor: '#FFFDF6',
  },
});

export default MemoListScreen;