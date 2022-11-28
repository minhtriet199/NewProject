import { createDrawerNavigator } from '@react-navigation/drawer';
import React, { useEffect, useState } from 'react';
import Home from '../../screen/Home';
import Catagory from '../../screen/Catagory';
import DrawerContent from './Component/DrawerContent';
import callApi from '../../api/CallApi' ;
import { useNavigation } from '@react-navigation/native';

const Drawer = createDrawerNavigator();

const DrawerNavigation = () => {
    const [Catagorys, setCatagorys] = useState([]);

    useEffect(() => {
        callApi('api/catagory','GET',null)
        .then(function(response){       
            setCatagorys(response.data);
        })
    }, []);

    return (
        <Drawer.Navigator useLegacyImplementation initialRouteName="Home"
            screenOptions={{
                drawerActiveBackgroundColor: '#5e72e4',
                drawerActiveTintColor:'white',
                itemStyle: { padding: 0 },
                // drawerPosition:'right'
            }}
            drawerContent={(props) => <DrawerContent {...props} />}
        >
            <Drawer.Screen name='Home' component={Home}
                options={{
                    headerShown:false,
                }}
            />
           {Catagorys.map((item) => {
                return(
                    <Drawer.Screen name={item.name} component={Catagory}
                        initialParams={{ id: item.id }}
                        options={{
                            headerShown:false,
                        }}
                    />
                );
            })}  
        </Drawer.Navigator>
    );
}

export default DrawerNavigation;