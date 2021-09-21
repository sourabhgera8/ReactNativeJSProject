import React, { useEffect, useState } from 'react';
import { View,Text, Image, ScrollView, FlatList } from 'react-native';

import contacts from './contacts'

export default function ContactsList({ route, navigation }) {


      const renderItem = ({index, item }) => (

        <View key={item.key} style={{ flex:1, marginHorizontal:10, marginBottom:10, flexDirection:'row', backgroundColor: 'white' }}>

          <View style={{marginHorizontal:10, margin :10,  justifyContent: 'center', alignItems: 'center', }}  >
            <Image
              style={{ width: 50, height: 50, alignItems: 'center' }}
              resizeMode="contain"
              source={require('../assets/user_dummy_pic.png')}
            />
          </View>
          

          <View style={{ flex:1, marginTop:10,  }}>
            <Text style={{ fontSize: 16, }}>{item.name}</Text>
            <Text style={{ fontSize: 12, }}>{item.mobile}</Text>
          </View>
          
        </View>
       
      );

    return (
        <View style={{marginBottom: 40}}>
            <Text style={{textAlign:'center', fontSize:18, marginBottom:10,backgroundColor: '#ebebeb'}}>
                {"Sita ram Maheshwari"} {"Jai shri ram ji"} {"contacts"}
            </Text>
            <FlatList
                data={contacts}
                renderItem={renderItem}
                keyExtractor={item => item.id}
            />
       </View>
    );
}