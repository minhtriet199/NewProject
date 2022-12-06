import React, { useEffect, useState } from 'react';
import { Text, View, StyleSheet, FlatList } from 'react-native';
import Header from '../../Component/homeHeader';
import Loading from '../../Component/Loading';
import ProductCard from '../../Component/ProductCard';
import callApi from '../../api/CallApi';

function Catagory({ route,props}) {
    const id = route.params.id;
    const [Products, setProducts] = useState([]);
    const [isLoading,setLoading] = useState(true);
    useEffect(() => {
        callApi('api/catagory/'+ JSON.stringify(id),'GET',null)
        .then(function(response){       
            setProducts(response.data.product);
            setLoading(false);
        })
    }, []);

    return (
        <View style={styles.container}>
            <Header />  
            {isLoading ?
                <Loading />
                :
                <FlatList 
                    data={Products}
                    renderItem={({ item }) => <ProductCard id={item.id} name={item.product_name} thumb={item.thumb} price={item.price} i={item.id}/>}
                    numColumns={2}
                />
            }
            
        </View>
    );
}
const styles = StyleSheet.create({
    ProductContaier:{
        marginTop:20,
        marginVertical:20,
        flexDirection: 'row',
        justifyContent:'space-between',
    }
})

export default Catagory;