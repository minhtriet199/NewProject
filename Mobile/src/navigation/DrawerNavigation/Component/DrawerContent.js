import { DrawerContentScrollView, DrawerItem, DrawerItemList } from '@react-navigation/drawer';
import Ionicons from 'react-native-vector-icons/Ionicons';
import React, { useEffect, useState } from 'react';
import { useDispatch } from 'react-redux';
import callApi from '../../../api/CallApi';


const DrawerContent = (props) => {
   const dispatch = useDispatch();
    return (
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
    );
}
module.exports = DrawerContent;
// export default DrawerContent;