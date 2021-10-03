import React, { useState } from 'react';
import { View,Text, TextInput,Button, TouchableOpacity} from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';


export default function LoginScreen1({ route, navigation }) {

    const[emailId, setEmailId] = useState('')
    const[password, setPassword] = useState('')

    const handleClickForgot = () => {
        navigation.navigate('ForgotPassword')
    }
    const handleClickContactList = () => {
        navigation.navigate('ContactsList')
    }
    const handleClickServerData = () => {
        navigation.navigate('FlatListApi')
    }
    const handleClickWithmodal = () => {
        navigation.navigate('FlatListApiModal')
    }

    const loginHandleClick = async() => {

        if(emailId == ''){
            alert("email id is blank")
        } else if(password == ''){
            alert("password is blank")
        } else{
            
            await AsyncStorage.setItem('isLoggedIn', JSON.stringify(true))

            navigation.navigate('ContactsList');          
        }
    }


    return(
         <View style={{marginTop:40}}>
            
             <View style={{ marginBottom: 20, marginHorizontal: 40 }}>
                <Text>{'Email Id'}</Text>
                <TextInput
                    style={{ width: '100%', borderBottomWidth: 1, borderBottomColor: 'grey', height: 40, }}
                    autoCapitalize="none"
                    returnKeyType="next"
                    maxLength={50}
                    placeholder={'like  abc@gmail.com'}
                    onChangeText={text => setEmailId(text)}
                    value={emailId}
                    defaultValue={emailId}
                    secureTextEntry={false}
                />
            </View>

            
             <View style={{ marginBottom: 20, marginHorizontal: 40 }}>
                <Text>{'Passwod '}</Text>
                <TextInput
                    style={{ width: '100%', borderBottomWidth: 1, borderBottomColor: 'grey', height: 40, }}
                    autoCapitalize="none"
                    returnKeyType="next"
                    maxLength={50}
                    placeholder={'like  1234@123'}
                    onChangeText={text => setPassword(text)}
                    value={password}
                    defaultValue={password}
                    secureTextEntry={false}
                />
            </View>

            
           

            <View style={{ marginHorizontal: 40, marginVertical: 5 }}>
                <Button style={{ flex: 1, marginTop: 10, marginBottom: 10, }}
                    title="Submit"
                    onPress={loginHandleClick}
                />
            </View>

            {/* <TouchableOpacity 
                style={{marginTop:25}}
                onPress={handleClickForgot}
            >
                <Text style={{fontSize:25 , textAlign:'center',  textDecorationLine: 'underline',}}>
                    {'Forgot Password'}</Text>
            </TouchableOpacity>

            <TouchableOpacity 
                style={{marginTop:25}}
                onPress={handleClickContactList}
            >
                <Text style={{fontSize:25 , textAlign:'center',  textDecorationLine: 'underline',}}>
                    {'ContactList Dummy data'}</Text>
            </TouchableOpacity>

            <TouchableOpacity 
                style={{marginTop:25}}
                onPress={handleClickServerData}
            >
                <Text style={{fontSize:25 , textAlign:'center',  textDecorationLine: 'underline',}}>
                    {'Api Server Data using axios'}</Text>
            </TouchableOpacity>

            <TouchableOpacity 
                style={{marginTop:25}}
                onPress={handleClickWithmodal}
            >
                <Text style={{fontSize:25 , textAlign:'center',  textDecorationLine: 'underline',}}>
                    {'Falt List With Modal'}</Text>
            </TouchableOpacity> */}

         </View>
    );
}