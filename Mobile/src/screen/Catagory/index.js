import React, { useEffect, useState } from 'react';
import { Text, View, StyleSheet, FlatList } from 'react-native';
import Header from '../../Component/homeHeader';
import H3 from '../../Component/h3';
import ProductCard from '../../Component/ProductCard';
import callApi from '../../api/CallApi';

function Catagory({ route,props}) {
    const id = route.params.id;
    const [Products, setProducts] = useState([]);
    const [Catagory,setCatagory] = useState([]);
    useEffect(() => {
        callApi('api/catagory/'+ JSON.stringify(id),'GET',null)
        .then(function(response){       
            setProducts(response.data.product);
            setCatagory(response.data.catagory);
        })
    }, []);

    return (
        <View style={styles.container}>
            <Header />
            {/* <View style={styles.ProductContaier}>
                {Products.map((item) => {
                    return(
                        <ProductCard id={item.id} name={item.product_name} thumb={item.thumb} price={item.price} i={item.id}/>
                    );
                })}      
            </View> */}
            
             <FlatList 
                data={Products}
                contentContainerStyle={styles.ProductContaier}
                renderItem={({ item }) => <ProductCard id={item.id} name={item.product_name} thumb={item.thumb} price={item.price} i={item.id}/>}
                keyExtractor={(item) => item.id}
            />
        </View>
    );
}
const styles = StyleSheet.create({
    ProductContaier:{
        marginTop:20,
        marginVertical:20,
        flexDirection: 'row',
        justifyContent:'space-between',
        flexWrap: 'wrap',
    }
})

export default Catagory;