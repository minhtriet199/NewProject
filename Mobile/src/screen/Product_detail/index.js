import React,{useState,useEffect, useRef, useCallback} from 'react';
import { Text, View,StyleSheet,Image, TouchableOpacity, Button, Dimensions, ScrollView } from 'react-native';
import { useDispatch } from 'react-redux';
import {increase,decrease} from '../../utils';
import {addToCart} from '../../redux/Cart'
import callApi,{Api_Url} from '../../api/CallApi';
import H3 from '../../Component/h3';
import H4 from '../../Component/h4';
import BottomSheet,{BottomSheetView} from '@gorhom/bottom-sheet';

const {width,height} = Dimensions.get('screen');
function ProductDetail({route,props}) {
    const [data, setData] = useState([]);
    const [Quantity,setQuantity] = useState(1);
    const id = route.params.itemId;
    const dispatch = useDispatch();
    
    useEffect(() => {
        callApi('api/product/show/'+ JSON.stringify(id),'GET',null)
        .then(function (response){
          setData(response.data)
        })
    }, []);


    const bottomSheetRef = useRef(null);
    const snapPoints = ['50%'];
    const openModal = () =>{
        bottomSheetRef.current.present();
    }

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
                        <H4 text={data.price + 'đ'}/>
                    </View>
                    <View style={styles.description}>
                        <TouchableOpacity
                            onPress={() => openModal()}
                            style={{marginTop:15}}
                        >
                            <Text>
                                Show Size Chart
                            </Text>
                        </TouchableOpacity>
                    </View>
                    <View style={styles.sizeSelect}>
                        <ScrollView horizontal={true} showsHorizontalScrollIndicator={false} >
                            <TouchableOpacity style={[styles.pill,styles.active]}>
                                <Text style={[styles.active,{fontWeight:'bold'}]}>S</Text>
                            </TouchableOpacity>
                            <TouchableOpacity style={styles.pill}>
                                <Text style={{fontWeight:'bold'}}>M</Text>
                            </TouchableOpacity>
                            <TouchableOpacity style={styles.pill}>
                                <Text style={{fontWeight:'bold'}}>L</Text>
                            </TouchableOpacity>
                            <TouchableOpacity style={styles.pill}>
                                <Text style={{fontWeight:'bold'}}>XL</Text>
                            </TouchableOpacity>
                            <TouchableOpacity style={styles.pill}>
                                <Text style={{fontWeight:'bold'}}>XXL</Text>
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
            <BottomSheet
                ref={bottomSheetRef}
                snapPoints={snapPoints}
                enablePanDownToClose={true}
                index={0}
            >
                <BottomSheetView style={{flex:1,alignItems:'center'}}>
                    <Image 
                        style={{width:width/1.5,height:300}}
                        source={{uri:'http://192.168.1.240:8000/storage/image/size.png'}}
                    />
                </BottomSheetView>
            </BottomSheet>
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