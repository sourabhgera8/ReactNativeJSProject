import React, { useEffect, useState } from 'react';
import { View,Text, Image, ScrollView, FlatList } from 'react-native';

import users from './userList'

export default function FlatListDemo({ route, navigation }) {


      const renderItem = ({index, item }) => (

        <View style={{ width:'96%',  flexDirection:'row',  backgroundColor: 'grey', margin:5}}>

          <View style={{marginLeft:10,  justifyContent: 'center', alignItems: 'center', }}  >
            <Image
              style={{ width: 100, height: 150, alignItems: 'center' }}
              resizeMode="contain"
              source={require('../assets/sitaramphoto.jpg')}
            />
          </View>


          <View style={{ flex:1, margin: 8, marginBottom: 10 }}>
            <Text style={{ fontSize: 10, padding: 10 }}>{item.id}</Text>
            <Text style={{ fontSize: 16, padding: 10 }}>{item.title}</Text>
            <Text style={{ fontSize: 12, padding: 10 }}>{item.body}</Text>
          </View>
        </View>
       
      );

    return (
        <View style={{marginBottom: 20}}>
            <Text style={{textAlign:'center', fontSize:18}}>
                {"Sita ram Maheshwari"} {"Jai shri ram ji"}
            </Text>
            <FlatList
                data={users}
                renderItem={renderItem}
                keyExtractor={item => item.id}
            />
       </View>
    );
}