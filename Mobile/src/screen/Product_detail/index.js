import React,{useState,useEffect, useRef} from 'react';
import { Text, View,StyleSheet,Image, TouchableOpacity, Button, Dimensions, ScrollView } from 'react-native';
import { useDispatch, useSelector } from 'react-redux';
import {increase,decrease} from '../../utils';
import {addToCart} from '../../redux/Cart'
import callApi,{Api_Url} from '../../api/CallApi';
import H3 from '../../Component/h3';
import H4 from '../../Component/h4';

const {width,height} = Dimensions.get('screen');
function ProductDetail({route,props}) {
    const [data, setData] = useState([]);
    const [selected,setSelected] = useState(1);
    const [Quantity,setQuantity] = useState(1);
    const [Price,setPrice] = useState(0);
    const id = route.params.itemId;
    const dispatch = useDispatch();
    
    useEffect(() => {
        callApi('api/product/show/'+ JSON.stringify(id),'GET',null)
        .then(function (response){
          setData(response.data)
          setPrice(response.data.price.toFixed(3))
        })
    }, []);

    return (
        <View style={styles.container}>
            <ScrollView style={{marginBottom:55}}>
                <View style={{justifyContent:'center',alignItems:'center'}}>
                    <Image 
                        style={{width:width,height:height/1.5}}
                        source={{uri:Api_Url + data.thumb }}
                    />
                </View>
                
                <View style={styles.ProductInfo}>
                    <View style={styles.basicInfo}>
                        <H3 text={data.product_name}/>
                        <H4 text={Price + ' đ'}/>
                    </View>
                    <View style={styles.sizeSelect}>
                        <ScrollView horizontal={true} showsHorizontalScrollIndicator={false} >
                            <TouchableOpacity 
                                onPress={() => setSelected(1)}
                                style={[styles.pill,
                                    selected === 1? styles.active : ''
                                ]}
                            >
                                <Text style={[{fontWeight:'bold'},selected === 1 ? styles.activeFont : '']}>S</Text>
                            </TouchableOpacity>
                            <TouchableOpacity 
                                 onPress={() => setSelected(2)}
                                 style={[styles.pill,
                                     selected === 2? styles.active : ''
                                 ]}
                            >
                                <Text style={[{fontWeight:'bold'},selected === 2 ? styles.activeFont : '']}>M</Text>
                            </TouchableOpacity>
                            <TouchableOpacity 
                                onPress={() => setSelected(3)}
                                style={[styles.pill,
                                    selected === 3? styles.active : ''
                                ]}
                            >
                                <Text style={[{fontWeight:'bold'},selected === 3 ? styles.activeFont : '']}>L</Text>
                            </TouchableOpacity>
                            <TouchableOpacity 
                                onPress={() => setSelected(4)}
                                style={[styles.pill,
                                    selected === 4 ? styles.active : ''
                                ]}
                            >
                                <Text style={[{fontWeight:'bold'},selected === 4 ? styles.activeFont : '']}>XL</Text>
                            </TouchableOpacity>
                            <TouchableOpacity 
                                onPress={() => setSelected(5)}
                                style={[styles.pill,
                                    selected === 5 ? styles.active : ''
                                ]}
                            >
                                <Text style={[{fontWeight:'bold'},selected === 5 ? styles.activeFont : '']}>XXL</Text>
                            </TouchableOpacity >
                        </ScrollView>
                    </View>
                </View>
                
            </ScrollView>
            
            <View style={styles.footer}>
                <View style={styles.ProductInfo}>
                    <View style={{flexDirection:'row',justifyContent:'space-between',alignItems:'center'}}>
                        <View style={styles.amount}>
                            <TouchableOpacity 
                                style={styles.amountButton}
                                onPress={() => decrease(Quantity,setQuantity)}
                            >
                                <Text style={[styles.text,{fontSize:20}]}> - </Text>
                            </TouchableOpacity>
                            <Text style={{marginHorizontal:15,fontSize:20}}>{Quantity}</Text>
                            <TouchableOpacity 
                                style={styles.amountButton}
                                onPress={() => increase(Quantity,setQuantity)}
                            >
                                <Text style={[styles.text,{fontSize:20}]}> + </Text>
                            </TouchableOpacity>
                        </View>
                        <View style={{width:'50%'}}>
                            <Button 
                                title="Add To Cart"
                                color='#5432d1'
                                borderRadius="15"
                                onPress={() =>
                                    dispatch(addToCart({
                                        id,Quantity
                                    }))
                                }
                            />
                        </View>
                    </View>
                </View> 
            </View>
        </View>

    );
}

const styles = StyleSheet.create({
    container:{
        height:'100%'
    },
    ProductInfo:{
        paddingHorizontal:25,
        paddingVertical:10,
        backgroundColor:'white',
    },
    amount:{
        flexDirection:'row',
        alignItems:'center'
    },
    amountButton:{
        height:30,
        width:30,
        justifyContent:'center',
        alignItems:'center',
        backgroundColor:'#f5f5f5'
    },
    pill:{
        flexDirection:'row',
        alignItems:'center',
        paddingHorizontal:15,
        paddingVertical:5,
        backgroundColor:'white',
        borderColor:'light-grey',
        marginHorizontal:5,
        marginTop:20,
        borderWidth:1,
        borderRadius:30,
    },
    active:{
        backgroundColor:'black',
    },
    activeFont:{
        color:'white',
    },
    footer:{
        width:width,
        zIndex:1,
        position:'absolute',
        bottom:0,
        left:0,
        right:0,
    }
})

export default ProductDetail;