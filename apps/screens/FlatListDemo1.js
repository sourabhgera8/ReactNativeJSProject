import React, { useEffect, useState } from 'react';
import { View,Text, Image, ScrollView, FlatList } from 'react-native';

import users from './userList'

export default function FlatListDemo1({ route, navigation }) {

  const DATA = [
                  { "name": "Sita Ram ji" , "title": "Likha tha ram to pathar bhi tar gaye"},
                  { "name": "Keshav" , "title": "Ram ram"},
                  { "name": "Sourabh" , "title": "Ram ram bina jab laptop nahi chalta to duniya kaise chaleygi" },
                  { "name": "Ram ji" },                 
               ];


      const renderItem = ({index, item }) => (

        <View style={{ width:'96%',  flexDirection:'row',  backgroundColor: 'grey', margin:5}}>

          <View style={{marginLeft:10,zIndex:4,  justifyContent: 'center', alignItems: 'center', }}  >
            <Image
              style={{ width: 100, height: 80, alignItems: 'center', zIndex:4 }}
              resizeMode="contain"
              source={require('../assets/sitaramphoto.jpg')}
            />
          </View>


          <View style={{ flex:1, margin: 8, marginBottom: 10 }}>
            <Text style={{ fontSize: 45, padding: 10 }}>{item.name}</Text>
            <Text style={{ fontSize: 22, padding: 10 }}>{item.title}</Text>
          </View>
        </View>
       
      );

    return (
        <View style={{marginBottom: 30}}>
            <Text style={{textAlign:'center', fontSize:18}}>
                {"Sita ram Maheshwari"} {"Jai shri ram ji"}
            </Text>
            <FlatList
                data={DATA}
                renderItem={renderItem}
                keyExtractor={item => item.id}
            />
       </View>
    );
}