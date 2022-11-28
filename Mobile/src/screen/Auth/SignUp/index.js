import React, { useState } from 'react';
import { View,StyleSheet, Text, Dimensions, TextInput, TouchableWithoutFeedback, Keyboard,TouchableOpacity, Button, ScrollView } from 'react-native';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import Zocial from 'react-native-vector-icons/Zocial';
import Logo from '../../../Component/logo';
import callApi from '../../../api/CallApi';
import { useNavigation } from '@react-navigation/native';

function SignUp(props) {
    const reg = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
    const [hidePass,setHidePass] = useState(true);
    const [email,setemail] = useState(null);
    const [username,setusername] = useState(null);
    const [password,setpassword] = useState(null);
    const [error,seterror] = useState(null);
    const navigation = useNavigation();

    const HandleSignUp = () =>{
        if(email == null || password == null || username == null) return seterror('You need to fill all the field below');
        if(!reg.test(email)) return seterror('Invalid Email');
        const data={
            name:username,
            email:email,
            password:password,
        }
        callApi('api/signup','POST',data)
        .then(function(response){
            if (response.data.success === true){
                navigation.navigate('SignIn');
            }else{
                seterror('Error');
            }
       })
    }

    return (
        <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
            <View>
                <ScrollView style={{height:'100%',  backgroundColor:'white',}}>
                    <View style={styles.main}>
                        <Logo />
                        <View style={styles.container}>
                            {error == null ? '' : 
                                <Text style={styles.textError}>{error}</Text> 
                            } 
                            <View style={styles.inputField}>
                                <View style={styles.inputSection}>  
                                    <Zocial name='email' size={20}/>
                                    <TextInput 
                                        placeholder='Email' style={styles.input}
                                        value={email}
                                        onChangeText={text => setemail(text)} 
                                    />
                                </View>
                                <View style={styles.inputSection}>  
                                    <FontAwesome name='user' size={20}/>
                                    <TextInput 
                                        placeholder='Username' style={styles.input}
                                        value={username}
                                        onChangeText={text => setusername(text)} 
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
                                    
                                    <TouchableOpacity onPress={ ()=>setHidePass(!hidePass) } >
                                        {hidePass == true ? <FontAwesome name='eye' size={20}/> : 
                                        <FontAwesome name='eye-slash' size={20}/> }
                                    </TouchableOpacity>
                                </View>
                                <View style={{marginVertical:15}}>
                                    <Button 
                                        title='Sign Up'
                                        onPress={()=>
                                            HandleSignUp()
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
                                    <Text>SignUp with Apple</Text>
                                </TouchableOpacity>
                                <TouchableOpacity style={styles.loginOption}>
                                    <FontAwesome name="facebook" size={25} style={{marginRight:15,}}/>
                                    <Text>SignUp with facebook</Text>
                                </TouchableOpacity>
                                <TouchableOpacity style={styles.loginOption}>
                                    <FontAwesome name="google" size={25} style={{marginRight:15,}}/>
                                    <Text>SignUp with google</Text>
                                </TouchableOpacity>
                            </View>
                        </View>
                    </View>
                    
                </ScrollView>
                <View style={styles.footer}>
                        <Text>Already have an account ? </Text>
                        <TouchableOpacity 
                            onPress={() => { 
                                navigation.navigate('SignIn')
                            }} 
                        >
                            <Text style={{color:'blue'}}>SignIn</Text>
                        </TouchableOpacity>
                </View>
            </View>
           
        </TouchableWithoutFeedback>
    );
}
const {height} = Dimensions.get('screen');
const styles = StyleSheet.create({
    main:{
        marginTop:20,
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
    textError:{
        color:'red'
    }
})

export default SignUp;