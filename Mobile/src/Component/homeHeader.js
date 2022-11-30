import React, { useEffect } from 'react';
import { TouchableWithoutFeedback, View, StyleSheet, StatusBar,Text,Image } from 'react-native';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import { useNavigation } from '@react-navigation/native';
import CartButton from '../Component/CartButton';

const Header = (props) => {
    const navigation = useNavigation();

    return (
        <View style={styles.nav}>   
            <TouchableWithoutFeedback
                onPress={() =>{
                    navigation.openDrawer();
                }}
            >
                <Image  
                    source={require('../assets/menu_icon.png')}
                    style={{width:40,height:40}}
                />
            </TouchableWithoutFeedback>
          
            <TouchableWithoutFeedback
                onPress={() =>{
                    navigation.navigate('Search');
                }}
            >
                <View style={styles.searchBar}>
                    <Text>Search</Text>
                    <FontAwesome name="search" size={25} color='#515051'  style={styles.inputIcon}/>  
                </View>
            </TouchableWithoutFeedback>
            
            <CartButton />
        </View>
    );
}
const styles = StyleSheet.create({
    nav:{
        paddingTop: Platform.OS === 'android' ? StatusBar.currentHeight : 0,
        width:'100%',
        backgroundColor:'white',
        paddingHorizontal:15,
        paddingVertical:10,
        marginBottom:10,
        flexDirection:'row',
        alignItems:'center',
        justifyContent:'space-between',
        elevation:20
    },
    title:{
        fontWeight:'bold',
        fontSize:25,
        marginLeft:30
    },
    searchBar:{
        width:250,
        height:35,
        backgroundColor:'#f5f5f5',
        borderRadius:25,    
        flexDirection:'row',
        justifyContent:'space-between',
        alignItems:'center',
        paddingHorizontal:15,
    },
    cartAmount:{
        position:'absolute',
        backgroundColor:'red',
        zIndex:1,
        paddingHorizontal:5,
        justifyContent:'center',
        alignItems:'center',
        borderRadius:10,
        fontSize:12,
        color:'white',
        fontWeight:'bold',
    }
})
module.exports = Header;

