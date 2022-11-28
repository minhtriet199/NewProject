import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import React from 'react';
import Icon from 'react-native-vector-icons/Fontisto';
import DrawerNavigation from '../DrawerNavigation';
import Settings from '../../screen/Settings';

const Tab= createBottomTabNavigator();

const TabNavigation = () => {
    return (
        <Tab.Navigator>
            <Tab.Screen name="DrawerNavigation" component={DrawerNavigation} 
                options={{
                    tabBarIcon: ({focused}) => (
                        <Icon
                            name="home" type="Fontisto"
                            size={20}
                            color={focused ? '#5e72e4' : 'black'}
                        />
                    ),
                    headerShown: false,
                    tabBarShowLabel: false,
                }}
            />
            <Tab.Screen name="Settings" component={Settings} 
                options={{
                    tabBarIcon: ({focused}) => (
                        <Icon
                            name="player-settings" type="Fontisto"
                            size={20}
                            color={focused ? '#5e72e4' : 'black'}
                        />
                    ),
                    headerShown: false,
                    tabBarShowLabel: false,
                }}
            />
        </Tab.Navigator>
    );
}

export default TabNavigation;