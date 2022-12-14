const { Text,StyleSheet, View, TouchableWithoutFeedback } = require("react-native");
import { useNavigation } from '@react-navigation/native';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import { useSelector } from 'react-redux';

const CartButton = (props) => {
    const cart = useSelector((state) =>state.Cart.Carts);
    // console.log(cart);
    const navigation = useNavigation();
    const getTotal = () => {
        let totalQuantity = 0
        // cart.map((item) => {
        //   totalQuantity += item.quantity
        // })
        totalQuantity = cart.length;
        return { totalQuantity}
    }
    return (
        <TouchableWithoutFeedback 
            onPress={()=>{
                navigation.navigate('Cart');
            }}
        >
            <View style={{alignItems:'flex-end'}}> 
                <FontAwesome name="shopping-cart" size={25} color='#515051' style={{marginRight:10}}/>  
                <Text style={styles.cartAmount}>{getTotal().totalQuantity}</Text>
            </View>
        </TouchableWithoutFeedback>
       
    );
}

const styles = StyleSheet.create({
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

module.exports = CartButton;