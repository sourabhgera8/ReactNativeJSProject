import React, { useEffect, useState } from 'react';
import { View, Text, Image, ScrollView, FlatList } from 'react-native';
import { Picker } from '@react-native-picker/picker';
import RadioForm, { RadioButton, RadioButtonInput, RadioButtonLabel } from 'react-native-simple-radio-button';

const radioProps = [
	{ label: 'Yes', value: false },
	{ label: 'No', value: true }
];

export default function DropDownScreen({ route, navigation }) {

  const [gendeAarray, setGenderArray] = useState([
    { "Value": "1", "Text": "Male" },
    { "Value": "2", "Text": "Female" },
    { "Value": "3", "Text": "Transparent" }

  ]);
  const [gender, setGender] = useState(0);
  const [genderError, setGenderError] = useState('');
	const [isCheckOrder, setIsCheckOrder] = useState(true);

  const onClickGender = (itemValue, itemIndex) => {
    setGender(itemValue);
    if (itemValue === 0) {
      setGenderError("Please Choose Gender")
    } else {
      setGenderError(null)
    }
  }
 

  return (
    <ScrollView>
      <Text style={{ textAlign: 'center' }}>
        {"Sita ram Maheshwari Jai Shree Ram ji "}
      </Text>
      <Text style={{ marginTop: 10, marginBottom: 20, textAlign: 'center', fontWeight: 'bold', fontSize: 30 }}>
        {"Jai shri ram ji"}
      </Text>


      <View style={{ justifyContent: 'center', alignItems: 'center', }}  >
        <Image
          style={{ width: 300, height: 400, alignItems: 'center' }}
          resizeMode="contain"
          source={require('../assets/sitaramphoto.jpg')}
        />
      </View>

      <Text style={{ marginLeft:10, }}>
        {"Do you Present at same address"}
      </Text>

      <View style={{ width: '93%', marginLeft: 10, paddingVertical:10, backgroundColor:'grey' }}>
        <RadioForm
          // buttonColor={colors.gray50}
          // buttonColor="#0c5a4e"
          buttonColor="red"
          buttonSize={12}
          radioStyle={{ marginLeft: 5, }}
          // selectedButtonColor="#000000"
          selectedButtonColor="#FFFFFF"  // 19 150 119
          radio_props={radioProps}
          // initial={0}
          animation={false}
          formHorizontal={true}
          onPress={(value) => setIsCheckOrder(!value)}
        />

      </View>

      <View style={{ flex: 1, width:'96%', borderWidth: 0.5, borderRadius: 5, paddingLeft: 5, marginHorizontal: 5, marginVertical: 5, }}>

        <Picker
          selectedValue={gender}
          // itemStyle={{ textAlign: 'left', fontSize: 16 }}
          // placeholderTextColor={colors.gray50}
          itemStyle={{ height: 50, fontSize: 16 }}
          style={{ flex: 1, height: 50, paddingHorizontal: 10 }}
          onValueChange={(itemValue, itemIndex) => { onClickGender(itemValue, itemIndex) }}
        >
          <Picker.Item label={'Please Choose Gender'} value={0} />

          {gendeAarray && gendeAarray.map((item) => {
            return (
              <Picker.Item key={item.Value} label={item.Text} value={item.Value} />
            )
          }
          )}
        </Picker>

      </View>

       {!!genderError && (
          <Text style={{color:'red', marginLeft:5, fontSize:16}}>
            {genderError}
          </Text>
        )} 






      
    </ScrollView>
  );
}