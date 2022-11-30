import React from 'react';
import { Image, Text, View, StyleSheet, Dimensions, TouchableOpacity } from 'react-native';
import {Api_Url} from '../api/CallApi';
import { useNavigation } from '@react-navigation/native';

const {width,height} = Dimensions.get('screen');
const ProductCard = (props) => {
    const navigation = useNavigation();
    return (
        <TouchableOpacity 
            key={props.i} 
            style={styles.productCard}
            onPress={() =>
                navigation.navigate('ProductDetail', {
                    itemId: props.id,
                    title: props.name,
                })
            }
        >
            <Image
                style={{flex:1,height:250}}
                source={{uri:Api_Url + props.thumb }}
            />
            <View style={styles.productTitle}>
                <Text style={{fontWeight:'bold',fontSize:20, color:'white'}}>{props.name}</Text>
                <View style={{flexDirection:'row',alignItems:'flex-start'}}>
                    <Text style={{fontWeight:'bold',fontSize:18, color:'white',}} >{props.price.toFixed(3)} đ</Text>
                </View>
            </View>
            
        </TouchableOpacity>
    );
}
const styles = StyleSheet.create({
    productCard:{
        width:width/2.15,
        height:320,
        marginHorizontal:5,
        marginBottom:15,
        overflow:'hidden',
        borderRadius:5,
        elevation:6
    },
    productTitle:{
        width:'100%',
        paddingHorizontal:15,
        paddingVertical:5,
        backgroundColor:'#202026',
    },
})

module.exports = ProductCard;