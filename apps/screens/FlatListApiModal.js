import React, { useEffect, useState } from 'react';
import { View, Text, Image, ScrollView, FlatList,
  StyleSheet,Modal,Pressable, TouchableOpacity } from 'react-native';
import axios from 'axios';


export default function FlatListApiModal({ route, navigation }) {

  const[data , setData] = useState([]);
  const [modalVisible, setModalVisible] = useState(false);
  const [item, setItem] = useState({});


  useEffect(() => {
      initApi();
  }, [])

  const initApi = () => {
    const url = "https://jsonplaceholder.typicode.com/users";

    axios.get(url)
      .then(function (response) {
        console.log("S____________________ response ", response);
        setData(response.data)
      })
      .catch(function (error) {
        console.log("S____________________ error ", error);
      })
      .then(function () {
        console.log("S____________________  finally  ");
      });
  }

  const onItemClick = (item) => {
    // alert("" + item.name);
      setItem(item)
      setModalVisible(true)
  }

  const renderItem = ({ index, item }) => (

    <TouchableOpacity key={item.key} style={{ flex: 1, marginHorizontal: 10, marginBottom: 10, flexDirection: 'row', backgroundColor: 'white' }}
       onPress={  ()=> {}  }  

       onPress={ () => {onItemClick(item)} } 
    >

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

    </TouchableOpacity>
  );

  return (
    <View style={{ marginBottom: 40 }}>
      
      <Text style={{ textAlign: 'center', fontSize: 28, marginBottom: 10, backgroundColor: '#ebebeb' }}>
        {"ram ram ji with modal"}
      </Text>
      
      <FlatList
        data={data}
        renderItem={renderItem}
        keyExtractor={item => item.id}
      />

      <View style={styles.centeredView}>
        <Modal
          animationType="slide"
          transparent={true}
          visible={modalVisible}
          onRequestClose={() => {
            Alert.alert("Modal has been closed.");
            setModalVisible(!modalVisible);
          }}
        >
          <View style={{flexDirection: 'row', marginTop: 230, justifyContent:'center', alignItems:'center', backgroundColor:'#e9e9e9' , height: 200, width: '90%',  marginLeft: 20, borderRadius:25  }}>

              <View style={{margin: 10, justifyContent: 'center', alignItems: 'center',  }}  >
                <Image
                  style={styles.userImageModal}
                  resizeMode="contain"
                  source={require('../assets/user_dummy_pic.png')}
                />
              </View>


            <View style={styles.modalView}>
              <Text style={styles.modalText}>Hello World!</Text>
              <Text style={styles.modalText}>{item.name}</Text>
              <Text style={styles.modalText}>{item.username}</Text>
              <Text style={styles.modalText}>{item.email}</Text>
              
              
              <Pressable
                style={[styles.button, styles.buttonClose]}
                onPress={() => setModalVisible(!modalVisible)}
              >
                <Text style={styles.textStyle}>Hide Modal</Text>
              </Pressable>
            </View>


          </View>
        </Modal>
       
      </View>

    </View>
  );
}
const styles = StyleSheet.create({
  centeredView: {
    // flex: 1,
    marginLeft:15,
    flexDirection:'row',
    // height:'100%',
    width: '94%',
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "white",
    marginTop: 22,
    borderRadius: 20,
  },
  modalView: {
    // margin: 20,
    // backgroundColor: "white",
    flex:1,
    // width: '96%',
    // borderRadius: 20,
    // padding: 35,
    // alignItems: "center",
    // shadowColor: "#000",
    // shadowOffset: {
    //   width: 0,
    //   height: 2
    // },
    // shadowOpacity: 0.25,
    // shadowRadius: 4,
    // elevation: 5
  },
  button: {
    borderRadius: 20,
    padding: 10,
    elevation: 2
  },
  buttonOpen: {
    // backgroundColor: "#F194FF",
  },
  buttonClose: {
    backgroundColor: "#2196F3",
    width:'80%'
  },
  textStyle: {
    color: "white",
    fontWeight: "bold",
    textAlign: "center",
  },
  modalText: {
    marginBottom: 7,
  },
  userImageModal:{
    width: 80, height: 70, borderWidth: 1, borderColor:'green', alignItems: 'center', marginRight:10
  }
});
