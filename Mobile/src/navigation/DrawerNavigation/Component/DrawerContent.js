import { DrawerContentScrollView, DrawerItem, DrawerItemList } from '@react-navigation/drawer';
import Ionicons from 'react-native-vector-icons/Ionicons';
import React from 'react';
import { useDispatch } from 'react-redux';
import { SafeAreaView,StatusBar } from 'react-native';
import Logo from '../../../Component/logo';


const DrawerContent = (props) => {
   const dispatch = useDispatch();
    return (
        <SafeAreaView style={{flex: 1,paddingTop: Platform.OS === "android" ? StatusBar.currentHeight : 0}}>
            <Logo />
            <DrawerContentScrollView {...props}>
                <DrawerItemList {...props} />
            
                <DrawerItem
                    label="SignOut"
                    icon={({ focused,color,size }) =>{
                        return (
                            <Ionicons name='exit-outline' size={20}/>
                        )
                    }}  
                    onPress={()=>
                        dispatch({type:'LOGOUT'})
                    }
                />
            </DrawerContentScrollView>
        </SafeAreaView>
       
    );
}
module.exports = DrawerContent;
// export default DrawerContent;