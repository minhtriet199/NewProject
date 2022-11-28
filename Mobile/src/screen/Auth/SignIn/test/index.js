import React from 'react';
import { Text,StyleSheet, View, Dimensions, Keyboard, TextInput, KeyboardAvoidingView, Button, StatusBar, TouchableWithoutFeedback, Pressable, TouchableOpacity } from 'react-native';
import FontAwesome from 'react-native-vector-icons/FontAwesome';

const { height } = Dimensions.get("screen");

function SignIn(props) {
    return ( 
        <View style={{backgroundColor:'#7972e6',height:height}}>
            <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
                <View style={styles.container}>
                    <View style={styles.header}>
                        <Text style={styles.title}>Sign-In</Text>
                    </View>
                    <KeyboardAvoidingView>
                        <View style={styles.body}>
                            <View style={styles.card}>
                                <View style={styles.inputField}>
                                    <FontAwesome name="user" size={20} style={{marginRight:15}} />
                                    <TextInput placeholder='Email' style={styles.input}/>
                                </View>
                                <View style={styles.inputField}>
                                    <FontAwesome name="lock" size={20} style={{marginRight:15}} />
                                    <TextInput placeholder='Password' style={styles.input}/>
                                </View>
                                <View  style={{marginTop:20}}>
                                    <Button
                                        title='Sign In'
                                        color={'#7972e6'}
                                    />
                                </View>
                                <View style={{flexDirection:'row',marginTop:15,justifyContent:'center'}}>
                                    <Text>Don't have and account ?</Text>
                                    <Pressable>
                                        <Text style={{color:'red'}}> Sign up</Text>
                                    </Pressable>
                                </View>
                            
                            </View>
                            <View style={{flexDirection: 'row', alignItems: 'center',marginVertical:15}}>
                                <View style={{flex: 1, height: 2, backgroundColor: 'white'}} />
                                    <Text style={{ marginHorizontal:15,textAlign: 'center',color:'white',fontWeight:'bold'}}>OR</Text>
                                <View style={{flex: 1, height: 2, backgroundColor: 'white'}} />
                            </View>
                            <View style={styles.card}>
                                <TouchableOpacity style={styles.loginOption}>
                                    <FontAwesome name="apple" size={20} style={{marginRight:15,}}/>
                                    <Text>Login with Apple</Text>
                                </TouchableOpacity>
                                <TouchableOpacity style={styles.loginOption}>
                                    <FontAwesome name="facebook" size={20} style={{marginRight:15,}}/>
                                    <Text>Login with facebook</Text>
                                </TouchableOpacity>
                                <TouchableOpacity style={styles.loginOption}>
                                    <FontAwesome name="google" size={20} style={{marginRight:15,}}/>
                                    <Text>Login with google</Text>
                                </TouchableOpacity>
                            </View>
                        </View>
                    </KeyboardAvoidingView>
                </View>
            </TouchableWithoutFeedback>  
        </View>  
    );
}

const styles = StyleSheet.create({
    container:{
        marginTop:height/10,
        marginHorizontal:20,
    },
    header:{
        marginBottom:30,
    },
    title:{
        fontSize:50,
        fontWeight:'bold',
        color:'white',
    },
    card:{
        backgroundColor:'white',
        paddingHorizontal:20,
        paddingTop:15,
        paddingBottom:30,
        borderRadius:5,
        elevation:12,
    },
    inputField:{
        borderColor:'#6657c6',
        borderBottomWidth:2,
        marginVertical:15,
        flexDirection:'row',
        alignItems:'center'
    },
    input:{
        width:'100%',
        fontSize:20,
        paddingVertical:5,
    },
    text:{
        color:'#808080',
        paddingBottom:15,
    },
    loginOption:{
        flexDirection:'row',
        paddingVertical:15,
        paddingHorizontal:15,
        marginVertical:5,
        borderWidth:1,
        borderColor:'black',
        borderRadius:30,
    }
})
export default SignIn;