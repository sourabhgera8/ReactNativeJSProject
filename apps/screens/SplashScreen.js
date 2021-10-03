import React, { useEffect, useState } from 'react';
import { View, Text, Image, ScrollView, FlatList } from 'react-native';
import { getItem } from '../utils/localStorage';

export default function SplashScreen({ route, navigation }) {
  useEffect(async () => {
    let isAlreadyLogin = await getDataFromAsyncStorage();
    setTimeout(() => {
      if (isAlreadyLogin == "true") {
        navigation.navigate('ContactsList')
      } else {
        navigation.navigate('LoginScreen')
      }
    }, 2500)
  }, [])
  const getDataFromAsyncStorage = () => {
    return getItem('isLoggedIn');
  }
  return (
    <ScrollView>
      <Text style={{ textAlign: 'center' }}>
        {"Sita ram Maheshwari"}
      </Text>
      <Text style={{ marginTop: 10, marginBottom: 20, textAlign: 'center', fontWeight: 'bold', fontSize: 30 }}>
        {"Jai shri ram ji"}
      </Text>


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