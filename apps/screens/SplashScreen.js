import React, { useEffect, useState } from 'react';
import { View,Text, Image, ScrollView, FlatList } from 'react-native';

export default function SplashScreen({ route, navigation }) {

     useEffect( () =>{
        setTimeout(() => {
            navigation.navigate('LoginScreen');
          }, 500);
     }, [])

    return (
        <ScrollView>
            <Text style={{textAlign:'center'}}>
                {"Sita ram Maheshwari"}
            </Text>
            <Text style={{ marginTop:10, marginBottom:20 ,textAlign: 'center', fontWeight: 'bold',fontSize:30}}>
                {"Jai shri ram ji"}
            </Text>
           

          

            <View style={{ justifyContent: 'center', alignItems: 'center', }}  >
                <Image
                    style={{ width: 300, height: 450, alignItems: 'center' }}
                    resizeMode="contain"
                    source={require('../assets/sitaramphoto.jpg')}
                />
            </View>
            <View style={{ justifyContent: 'center', alignItems: 'center', }}  >
                <Image
                    style={{ width: 300, height: 450, alignItems: 'center' }}
                    resizeMode="contain"
                    source={require('../assets/sitaramphoto.jpg')}
                />
            </View>


        </ScrollView>
    );
}