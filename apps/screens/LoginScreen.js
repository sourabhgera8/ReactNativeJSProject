import React, { useEffect, useState } from 'react';
import { View,Text, TextInput,Button, Image} from 'react-native';
import { getItem, setItem} from '../utils/localStorage';

const validator = require('validator');

export default function LoginScreen({ route, navigation }) {

    const[emailId, setEmailId] = useState('')
    const[password, setPassword] = useState('')

    useEffect( () =>{
        const unsubscribe = navigation.addListener('focus', () => {
            setEmailId('');
            setPassword('');
          });
          return unsubscribe;
    },[navigation])


    const loginHandleClick = async() => {

        if(emailId == ''){
            alert("email id is blank")
        } else if(!validator.isEmail(emailId)){
            alert("email id is not valid")
        } else if(password == ''){
            alert("password is blank")
        } else{
            await setItem('isLoggedIn', JSON.stringify(true))
            await setItem('userId', 6914)
            navigation.navigate('ContactsList');          
        }
    }

  

    return(
         <View style={{marginTop:40}}>

            <View style={{ justifyContent: 'center', alignItems: 'center', }}  >
                <Image
                    style={{ width: 300, height: 200, alignItems: 'center' }}
                    resizeMode="contain"
                    source={require('../assets/sitaramphoto.jpg')}
                />
            </View>
            
             <View style={{marginTop:50, marginBottom: 20, marginHorizontal: 40 }}>
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
                    secureTextEntry={true}
                />
            </View>

            
           

            <View style={{ marginHorizontal: 40, marginVertical: 5 }}>
                <Button style={{ flex: 1, marginTop: 10, marginBottom: 10, }}
                    title="Submit"
                    onPress={loginHandleClick}
                />
            </View>

        </View>
    );
}