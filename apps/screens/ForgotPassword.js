import React, { useState } from 'react';
import { View,Text, TextInput,Button } from 'react-native';


export default function ForgotPassword({ route, navigation }) {

    const[emailId, setEmailId] = useState('')

    const handleClick = () => {

        if (emailId == '') {
            alert("email id is blank")
        } else {
            alert("server call")
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

            
            

            
           

            <View style={{ marginHorizontal: 40, marginVertical: 5 }}>
                <Button style={{ flex: 1, marginTop: 10, marginBottom: 10, }}
                    title="Submit"
                    // onPress={() => navigation.navigate('RegisterScreen')}
                    // onPress={() => alert(currentPassword +" np " + newPassword+"  cofp "+confirmPassword)}
                    onPress={handleClick}
                />
            </View>

         </View>
    );
}