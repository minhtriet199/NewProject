import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import {useSelector} from 'react-redux';
import { createStackNavigator } from '@react-navigation/stack';
import SignIn from '../screen/Auth/SignIn';
import SignUp from '../screen/Auth/SignUp';
import ProductDetail from '../screen/Product_detail';
import TabNavigation from './TabNavigation';
import CartButton from '../Component/CartButton';
import { View } from 'react-native';
import Search from '../screen/Search';

function AuthNavigation(props) {
    const Stack=createStackNavigator();
    const isLogin = useSelector((state) => state.Auth.isLogin);

    return (
        <NavigationContainer>
            {isLogin ? 
                (
                    <Stack.Navigator>
                        <Stack.Screen name="TabNavigation" component={TabNavigation}
                            options={{  headerShown: false, }}
                        />
                        <Stack.Screen name="ProductDetail" component={ProductDetail} 
                            options={({ route }) => ({ 
                                    title: route.params.title,
                                    headerRight: () => (
                                        <View style={{marginRight:20}}>
                                            <CartButton />
                                        </View>
                                    ),
                                })
                            }

                        />
                        <Stack.Screen name="Search" component={Search}
                            options={{  headerShown: false, }}
                        />
                    </Stack.Navigator>
                ):( 
                    <Stack.Navigator>
                        <Stack.Screen name="SignIn" component={SignIn}
                            options={{  headerShown: false, }}
                        />
                        <Stack.Screen name="SignUp" component={SignUp}
                        />
                    </Stack.Navigator> 
                )
            }
            
        </NavigationContainer>
    );
}

export default AuthNavigation;