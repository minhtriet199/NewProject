import React, { useEffect, useState } from 'react';
import { FlatList, Text, View, StyleSheet } from 'react-native';
import { useSelector } from 'react-redux';
import callApi from '../../api/CallApi';
import ProductCard from '../../Component/ProductCard';

function Cart({route,props}) {
    const carts = useSelector((state) =>state.Cart.Carts);
    const [Products,setProducts] = useState([]);

    useEffect(() => {
        {carts.map((item) =>{
            callApi('api/product/show/'+ JSON.stringify(item.id),'GET',null)
            .then(function (response){
                const product ={
                    id:response.data.id,
                    name:response.data.product_name,
                    price:response.data.price,
                    thumb:response.data.thumb,
                    quantity:item.quantity,
                }
                Products.push(product);
            })
        })}
        console.log(Products);
    }, []);

    return (
        
      
        <View >
            {Products == '' ?
                <Text>Empty</Text>:
                <FlatList 
                    data={Products}
                    renderItem={({ item }) => (
                        <View>
                            <ProductCard id={item.id} name={item.name} thumb={item.thumb} price={item.price} i={item.id}/>
                            <Text>{item.quantity}</Text>
                        </View>
                    )}
                    keyExtractor={(item) => item.id}
                /> 
            }
        </View>
    );
}
export default Cart;