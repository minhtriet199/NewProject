import React from 'react';
import { ActivityIndicator, View, StyleSheet } from 'react-native';

function Loading(props) {
    return (
        <View style={{marginVertical:50}}>
            <ActivityIndicator  size="large"/>
        </View>
    );
}
const styles = StyleSheet.create({
    loading:{
        width:'100%',
        height:'100%',
    }
})

export default Loading;