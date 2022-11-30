import React, { useEffect, useState } from 'react';
import { Text, View, StyleSheet, ScrollView, Image, TouchableWithoutFeedback, Dimensions, TouchableHighlight, TouchableOpacity } from 'react-native';
import Header from '../../Component/homeHeader';
import callApi from '../../api/CallApi';
import H3 from '../../Component/h3';
import ProductCard from '../../Component/ProductCard';
import FontAwesome from 'react-native-vector-icons/FontAwesome';


function Home(props) {
    const [Products, setProducts] = useState([]);
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
                        {Products.map((item,i) => {
                            return(
                                <ProductCard id={item.id} name={item.product_name} thumb={item.thumb} price={item.price} i={i} />
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
                    {Products.map((item,i) => {
                        return(
                            <ProductCard id={item.id} name={item.product_name} thumb={item.thumb} price={item.price} i={i} />
                        );
                    })}        
                </View>
                
            </ScrollView>
        </View>
    );
}
const {width} = Dimensions.get('screen');
const styles = StyleSheet.create({
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