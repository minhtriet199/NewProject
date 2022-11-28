import React from 'react';
import { Text, View } from 'react-native';

function Catagory({ route,props}) {
    return (
        <View>
            <Text>{route.params.id}</Text>
        </View>
    );
}

export default Catagory;