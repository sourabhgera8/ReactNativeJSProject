import React, {useEffect, useState} from 'react';

import {StyleSheet, Text, View, TouchableOpacity} from 'react-native';

const PercentageBar = ({
  navigation,
  percentage,
  height,
  backgroundColor,
  completedColor,
  currentTimer
}) => {
  const [getPercentage, setPercentage] = useState(percentage);
  const [getheight, setHeight] = useState(height);
  const [getBackgroundColor, setBackgroundColor] = useState(backgroundColor);
  const [getCompletedColor, setCompletedColor] = useState(completedColor);

  useEffect(() => {

    let timer1 = setInterval( () => {
        setPercentage((v) => v + 1);
    }, 1)

    console.log("K____________ PercentageBar ", getPercentage);

    return () => {
        if(getPercentage === 100){
            clearInterval(timer1)
        }
    }
}, [])


//   useEffect( () =>{
//         console.log("K____________ PercentageBar ", percentage);

//   })


  return (
    <View>
      <View style={{justifyContent: 'center'}}>
        <View
          style={{
            
            width: '100%',
            height: getheight,
            marginVertical: 10,
            borderRadius: 5,
            borderColor: getBackgroundColor,
            borderWidth: 1,
          }}
        />
        <View
          style={{
            width: getPercentage ? getPercentage : 0,
            maxWidth: '100%',
            height: getheight,
            marginVertical: 10,
            borderRadius: 5,
            backgroundColor: getCompletedColor,
            position: 'absolute',
            bottom:20
          }}
        />
        <View
          style={{
            width: getPercentage ? getPercentage : 0,
            maxWidth: '100%',
            height: getheight,
            bottom:10
          }}>
          <Text style={{textAlign: 'right'}}>{"Hi "+getPercentage}</Text>
        </View>
      </View>
    </View>
  );
};
export default PercentageBar;