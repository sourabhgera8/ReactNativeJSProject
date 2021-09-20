import React, { useState } from 'react';
import { View,Text, TextInput,Button } from 'react-native';


export default function ChangePassword({ route, navigation }) {

    const[currentPassword, setcurrentPassword] = useState('')
    const[newPassword, setNewPassword] = useState('')
    const[confirmPassword, setConfirmPassword] = useState('')

    const handleClick = () => {

        if(currentPassword === newPassword){
            alert("current and new password both are same")
        } else if(newPassword !== confirmPassword){
            alert("new pass and confirm pass are mismatch")
        } else{
            alert("server call")
        }
    }


    return(
         <View style={{marginTop:40}}>
            
             <View style={{ marginBottom: 20, marginHorizontal: 40 }}>
                <Text>{'Current Password'}</Text>
                <TextInput
                    style={{ width: '100%', borderBottomWidth: 1, borderBottomColor: 'grey', height: 40, }}
                    autoCapitalize="none"
                    returnKeyType="next"
                    maxLength={50}
                    value={currentPassword}
                    placeholder={'like  abc@gmail.com'}
                    onChangeText={text => setcurrentPassword(text)}
                    defaultValue={currentPassword}
                    secureTextEntry={false}
                />
            </View>

            
             <View style={{ marginBottom: 20, marginHorizontal: 40 }}>
                <Text>{'New  Passwod '}</Text>
                <TextInput
                    style={{ width: '100%', borderBottomWidth: 1, borderBottomColor: 'grey', height: 40, }}
                    autoCapitalize="none"
                    returnKeyType="next"
                    maxLength={50}
                    value={newPassword}
                    placeholder={'like  abc@gmail.com'}
                    onChangeText={text => setNewPassword(text)}
                    defaultValue={newPassword}
                    secureTextEntry={false}
                />
            </View>

            
             <View style={{ marginBottom: 20, marginHorizontal: 40 }}>
                <Text>{'Confirm Password'}</Text>
                <TextInput
                    style={{ width: '100%', borderBottomWidth: 1, borderBottomColor: 'grey', height: 40, }}
                    autoCapitalize="none"
                    returnKeyType="next"
                    maxLength={50}
                    placeholder={'80/120'}
                    value={confirmPassword}
                    onChangeText={text => setConfirmPassword(text)}
                    defaultValue={confirmPassword}
                    secureTextEntry={false}
                />
            </View>

            <View style={{ marginHorizontal: 40, marginVertical: 5 }}>
                <Button style={{ flex: 1, marginTop: 10, marginBottom: 10, }}
                    title="Change Password"
                    // onPress={() => navigation.navigate('RegisterScreen')}
                    // onPress={() => alert(currentPassword +" np " + newPassword+"  cofp "+confirmPassword)}
                    onPress={handleClick}
                />
            </View>

         </View>
    );
}