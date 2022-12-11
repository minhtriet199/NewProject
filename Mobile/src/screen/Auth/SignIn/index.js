import React, { useState } from 'react';
import { View,StyleSheet, Text, Dimensions, Image, TextInput, TouchableWithoutFeedback, Keyboard, KeyboardAvoidingView, Pressable, TouchableOpacity, Button, ScrollView } from 'react-native';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import Logo from '../../../Component/logo';
import callApi from '../../../api/CallApi';
import { useDispatch } from 'react-redux';
import { useNavigation } from '@react-navigation/native';
import Toast from 'react-native-toast-message';

function SignIn(props) {
    const reg = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
    const [hidePass,setHidePass] = useState(true);
    const [email,setemail] = useState(null);
    const [password,setpassword] = useState(null);
    const [error,seterror] = useState(null);
    const dispatch = useDispatch();
    const navigation = useNavigation();


    if(error!==null){
        Toast.show({
            type: 'error',
            text1: error,
        });
    }
    const HandleSignIn = () =>{
        
        if(email == null || password == null) return seterror('You need to fill all the field below');
        if(!reg.test(email)) return seterror('Invalid Email');
        const data={
            email:email,
            password:password,
        }
        callApi('api/login','POST',data)
        .then(function(response){
            if (response.data.success === true){
                dispatch({
                    type:'LOGIN',
                    payload: {user:response.data.user.id},
                });
            }else{
                seterror('Incorrect email or password');
            }
       })
    }

    return (
        <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
            <View style={{height:'100%',  backgroundColor:'white',}}>
            <Toast 
                position='bottom'
                bottomOffset={100}
                visibilityTime={2000}
            />
                <View style={styles.main}>
                    <Logo />
                    <ScrollView>
                        <View style={styles.container}>
                            <View style={styles.inputField}>
                                <View style={styles.inputSection}>  
                                    <FontAwesome name='user' size={20}/>
                                    <TextInput 
                                        placeholder='Email' style={styles.input}
                                        value={email}
                                        onChangeText={text => setemail(text)} 
                                    />
                                </View>
                                <View style={styles.inputSection}>  
                                    <View style={{flexDirection:'row',alignItems:'center',width:'90%'}}>
                                        <FontAwesome name='lock' size={20}/>
                                        <TextInput 
                                            placeholder='Password' 
                                            style={styles.input} secureTextEntry={hidePass}
                                            value={password}
                                            onChangeText={text => setpassword(text)} 
                                        />
                                    </View>
                                    
                                    <TouchableOpacity onPress={ ()=>setHidePass(!hidePass) }  style={{height:'100%',flex:1}}>
                                        {hidePass == true ? <FontAwesome name='eye' size={20}/> : 
                                        <FontAwesome name='eye-slash' size={20}/> }
                                    </TouchableOpacity>
                                </View>
                                <TouchableOpacity style={{alignItems:'flex-end',marginVertical:5}}>
                                    <Text style={{color:'blue'}}>Forget Password?</Text>
                                </TouchableOpacity>
                                <View style={{marginVertical:15}}>
                                    <Button 
                                        title='Sign In'
                                        onPress={()=>
                                            HandleSignIn()
                                        }
                                    />
                                </View>
                            </View>
                            <View style={{flexDirection: 'row', alignItems: 'center',marginVertical:15}}>
                                <View style={{flex: 1, height: 1, backgroundColor: 'black'}} />
                                    <Text style={{ marginHorizontal:15,textAlign: 'center',color:'black',fontWeight:'bold'}}>OR</Text>
                                <View style={{flex: 1, height: 1, backgroundColor: 'black'}} />
                            </View>

                            <View style={styles.card}>
                                <TouchableOpacity style={styles.loginOption}>
                                    <FontAwesome name="apple" size={25} style={{marginRight:15,}}/>
                                    <Text>Login with Apple</Text>
                                </TouchableOpacity>
                                <TouchableOpacity style={styles.loginOption}>
                                    <FontAwesome name="facebook" size={25} style={{marginRight:15,}}/>
                                    <Text>Login with facebook</Text>
                                </TouchableOpacity>
                                <TouchableOpacity style={styles.loginOption}>
                                    <FontAwesome name="google" size={25} style={{marginRight:15,}}/>
                                    <Text>Login with google</Text>
                                </TouchableOpacity>
                            </View>
                        </View>
                    </ScrollView>
                    
                </View>
                <View style={styles.footer}>
                    <Text>Dont have an account? </Text>
                    <TouchableOpacity 
                         onPress={() => { 
                            navigation.navigate('SignUp')
                        }} 
                    >
                        <Text style={{color:'blue'}}>Sign-Up</Text>
                    </TouchableOpacity>
                </View>
            </View>
        </TouchableWithoutFeedback>
    );
}
const {height} = Dimensions.get('screen');
const styles = StyleSheet.create({
    main:{
        marginTop:height/12,
    },
    container:{
        marginHorizontal:10,
        paddingHorizontal:20,
        marginTop:10,
    },
    inputSection:{
        width:'100%',
        borderColor:'light-grey',
        marginVertical:8,
        paddingVertical:5,
        borderBottomWidth:1,
        flexDirection:'row',
        alignItems:'center',
        overflow:'hidden'
    },
    input:{
        marginLeft:15,
        width:'100%',
        fontSize:15
    },
    loginOption:{
        flexDirection:'row',
        paddingVertical:10,
        paddingHorizontal:15,
        marginVertical:5,
        borderWidth:1,
        borderColor:'black',
        borderRadius:5,
        justifyContent:'center'
    },
    footer:{
        position: 'absolute',
        left: 0,
        right: 0,
        bottom: 0,
        backgroundColor:'#f5f5f5',
        paddingVertical:15,
        justifyContent:'center',
        flexDirection:'row',
    },
})

export default SignIn;