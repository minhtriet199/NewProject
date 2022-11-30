import { useNavigation } from '@react-navigation/native';
import React, { useEffect, useState } from 'react';
import { TextInput, View, StyleSheet, TouchableOpacity, SafeAreaView, StatusBar, ScrollView, Image, Text, Dimensions } from 'react-native';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import Ionicons from 'react-native-vector-icons/Ionicons';
import callApi,{Api_Url} from '../../api/CallApi';
import CartButton from '../../Component/CartButton';

function Search(item) {
    const [Search,setSearch] = useState(null);
    const [Products,setProducts] = useState([]);
    const navigation = useNavigation();

    const SearchProduct = (text) =>{
        setSearch(text);
        callApi('api/product/search/'+text,'GET',null)
        .then(function(response){       
            setProducts(response.data);
        })
    }
    return (
        
        <SafeAreaView style={{backgroundColor:'white',paddingTop: Platform.OS === "android" ? StatusBar.currentHeight : 0}}>
            <View style={styles.header}>
                <View >
                    <TouchableOpacity
                        onPress={()=>{
                            navigation.pop();
                        }}
                    >
                        <Ionicons name='arrow-back' size={30} />
                    </TouchableOpacity>
                </View>
                <View style={styles.inputField}>
                    <TextInput
                        placeholder='Search'
                        width='70%'
                        value={Search}
                        onChangeText={(text) => {
                            SearchProduct(text)
                        }}
                    />
                    <FontAwesome name="search" size={20} color='#515051'  style={styles.inputIcon}/>  
                </View>
                <CartButton />
            </View>
            <ScrollView>
                {Products.map((item) => {
                    return(
                        <TouchableOpacity 
                            key={item.i} 
                            style={styles.productCard}
                            onPress={() =>
                                navigation.navigate('ProductDetail', {
                                    itemId: item.id,
                                    title: item.name,
                                })
                            }
                        >
                            <Image
                                style={{width:'30%',height:'100%'}}
                                source={{uri:Api_Url + item.thumb }}
                            />
                            <View style={styles.productTitle}>
                                <Text style={{fontWeight:'bold',fontSize:20}}>{item.product_name}</Text>
                                <Text style={{fontWeight:'bold',fontSize:18}} >{item.price}.000 đ</Text>
                            </View>
                            
                        </TouchableOpacity>
                    );
                })} 
            </ScrollView>
          
        </SafeAreaView>
    );
}
const {width} =Dimensions.get('screen');
const styles = StyleSheet.create({
    header:{
        width:'100%',
        backgroundColor:'white',
        flexDirection:'row',
        alignItems:'center',
        paddingVertical:10,
        paddingHorizontal:10,
        justifyContent:'space-between',
    },
    inputField:{
        backgroundColor:'#f5f5f5',
        paddingHorizontal:20,
        paddingVertical:10,
        flexDirection:'row',
        justifyContent:'space-between',
        alignItems:'center',
    },
    productCard:{
        width:width,
        height:150,
        marginHorizontal:15,
        marginVertical:10,
        marginBottom:15,
        flexDirection:'row',
        overflow:'hidden',
    },
    productTitle:{
        width:'100%',
        paddingHorizontal:15,
        paddingVertical:5,
    },
})

export default Search;