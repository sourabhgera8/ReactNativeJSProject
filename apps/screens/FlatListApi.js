import React, { useEffect, useState } from 'react';
import { View, Text, Image, ScrollView, FlatList } from 'react-native';
import axios from 'axios';


export default function FlatListApi({ route, navigation }) {

  const[data , setData] = useState([]);

  useEffect(() => {
      initApi();
  }, [])

  const initApi = () => {
    const url = "https://jsonplaceholder.typicode.com/users";

    axios.get(url)
      .then(function (response) {
        // handle success
        console.log("S____________________ response ", response);

        setData(response.data)
      })
      .catch(function (error) {
        // handle error
        console.log("S____________________ error ", error);
      })
      .then(function () {
        console.log("S____________________  then ");
        // always executed
      });
  }


  const renderItem = ({ index, item }) => (

    <View key={item.key} style={{ flex: 1, marginHorizontal: 10, marginBottom: 10, flexDirection: 'row', backgroundColor: 'white' }}>

       <View style={{ marginHorizontal: 10, margin: 10, justifyContent: 'center', alignItems: 'center', }}  >
        <Image
          style={{ width: 50, height: 50, alignItems: 'center' }}
          resizeMode="contain"
          source={require('../assets/user_dummy_pic.png')}
        />
      </View>

      <View style={{ flex: 1, marginTop: 10,}}>
        <Text style={{ fontSize: 16, }}>{item.name}</Text>
        <Text style={{ fontSize: 12, }}>{item.username}</Text>
        <Text style={{ fontSize: 12, }}>{item.email}</Text>      
        <Text style={{ fontSize: 12, marginBottom:10 }}>{item.website}</Text>
      </View>

    </View>
  );

  return (
    <View style={{ marginBottom: 40 }}>
      
      <Text style={{ textAlign: 'center', fontSize: 18, marginBottom: 10, backgroundColor: '#ebebeb' }}>
        {"ram ram kripa karo jai ganesh ji jai saraswati mata"}
      </Text>
      
      <FlatList
        data={data}
        renderItem={renderItem}
        keyExtractor={item => item.id}
      />
    </View>
  );
}