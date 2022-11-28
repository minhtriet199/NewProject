import React, { useEffect, useState } from 'react';
import { Text, View, StyleSheet, ScrollView, Image, TouchableWithoutFeedback, Dimensions, TouchableHighlight, TouchableOpacity } from 'react-native';
import Header from '../../Component/homeHeader';
import {Api_Url} from '../../api/CallApi';
import callApi from '../../api/CallApi';
import H3 from '../../Component/h3';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import { useNavigation } from '@react-navigation/native';


function Home(props) {
    const [Products, setProducts] = useState([]);
    const navigation = useNavigation();
    useEffect(() => {
        callApi('api/product','GET',null)
        .then(function(response){       
            setProducts(response.data);
        })
    }, []);

    return (
        <View>
            <Header />
            <ScrollView style={styles.body}>
                <View style={styles.bannerContainer}>
                    <Image  source={require('../../assets/banner.png')} style={styles.banner} />
                </View>
                <View style={styles.Box}>
                    <View style={{marginHorizontal:15,flexDirection:'row',justifyContent:'space-between',alignItems:'flex-end'}}>
                        <View>
                            <H3 text='Top Sellers'/>
                        </View>
                        <TouchableWithoutFeedback>
                            <Text style={{color:'blue',fontSize:18}}>
                                See All
                            </Text>
                        </TouchableWithoutFeedback>
                    </View>
                    <ScrollView horizontal={true} showsHorizontalScrollIndicator={false} style={{marginTop:20}}>
                            {Products.map((item) => {
                                return(
                                    <TouchableOpacity style={styles.productCard}
                                        onPress={() =>
                                            navigation.navigate('ProductDetail', {
                                                itemId: item.id,
                                                title: item.product_name,
                                            })
                                        }
                                    >
                                        <Image
                                            style={{flex:1,height:250}}
                                            source={{uri:Api_Url + item.thumb }}
                                        />
                                        <View style={styles.productTitle}>
                                            <Text style={{fontWeight:'bold',fontSize:20, color:'white'}}>{item.product_name}</Text>
                                            <View style={{flexDirection:'row',alignItems:'flex-start'}}>
                                                <Text style={{fontWeight:'bold',fontSize:18, color:'white',}} >{item.price}đ</Text>
                                            </View>
                                        </View>
                                        
                                    </TouchableOpacity  >
                                );
                            })}        
                    </ScrollView>  
                </View>
                <View style={styles.Box}>
                    <ScrollView horizontal={true} showsHorizontalScrollIndicator={false} style={{marginTop:20,marginHorizontal:15}}>
                        <View style={styles.pill}>
                            <Text style={{fontWeight:'bold'}}>FEATURED</Text>
                        </View>
                        <View style={styles.pill}>
                            <Text style={{fontWeight:'bold'}}>New</Text>
                        </View>
                        <View style={styles.pill}>
                            <Text style={{fontWeight:'bold'}}>HOT</Text>
                        </View>
                        <View style={styles.pill}>
                            <Text style={{fontWeight:'bold'}}>PRICE   </Text>
                            <FontAwesome name="arrow-up" size={15}/> 
                        </View>
                        <View style={styles.pill}>
                            <Text style={{fontWeight:'bold'}}>PRICE   </Text>
                            <FontAwesome name="arrow-down" size={15}/> 
                        </View>
                        <View style={styles.pill}>
                            <Text style={{fontWeight:'bold'}}>ALL</Text>
                        </View>
                    </ScrollView>
                    </View>
                    <View style={styles.ProductContaier}>
                        {Products.map((item) => {
                            return(
                                <View style={styles.productCard}>
                                    <Image
                                        style={{flex:1,height:250}}
                                        source={{uri:Api_Url + item.thumb }}
                                    />
                                    <View style={styles.productTitle}>
                                        <Text style={{fontWeight:'bold',fontSize:20, color:'white'}}>{item.product_name}</Text>
                                        <View style={{flexDirection:'row',alignItems:'flex-start'}}>
                                            <Text style={{fontWeight:'bold',fontSize:18, color:'white',}} >{item.price}đ</Text>
                                        </View>
                                    </View>
                                    
                                </View>
                            );
                        })}        
                    </View>
                
            </ScrollView>
        </View>
    );
}
const {width} = Dimensions.get('screen');
const styles = StyleSheet.create({
    body:{
        marginTop:80,
    },
    bannerContainer:{
        width:'100%',
        alignItems:'center',
        justifyContent:'center',
    },
    banner:{
        width:'95%',
        height:180,
        borderRadius:15,
        elevation:12,
    },
    Box:{
        backgroundColor:'white',
        paddingVertical:10,
        marginTop:20,
    },
    productCard:{
        width:width/2.15,
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
    pill:{
        flexDirection:'row',
        alignItems:'center',
        paddingHorizontal:15,
        paddingVertical:5,
        backgroundColor:'white',
        borderColor:'light-grey',
        marginHorizontal:5,
        borderWidth:1,
        borderRadius:30,
    },
    ProductContaier:{
        marginTop:20,
        marginVertical:20,
        flexDirection: 'row',
        justifyContent:'space-between',
        flexWrap: 'wrap',
    }
})

export default Home;