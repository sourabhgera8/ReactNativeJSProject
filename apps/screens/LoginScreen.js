import React, { useState } from 'react';
import { View,Text, TextInput,Button, TouchableOpacity} from 'react-native';
import { getItem, setItem} from '../utils/localStorage';


export default function LoginScreen({ route, navigation }) {

    const[emailId, setEmailId] = useState('')
    const[password, setPassword] = useState('')


    const loginHandleClick = async() => {

        if(emailId == ''){
            alert("email id is blank")
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

        </View>
    );
}