import React, { useEffect, useState, useRef } from 'react';
import { StyleSheet, Text, View, TouchableOpacity } from 'react-native';
import PercentageBar from './PercentageBar';

export default function Dashboard({ navigation }) {
    const[progress , setProgress] = useState(10);
    // const timer = useRef(null); // we can save timer in useRef and pass it to child
    // timer.current = setInterval(() => setProgress((v) => v + 1), 1000);


   

    

    const onSelectSwitch = index => {
        alert('Selected index: ' + index);
    };

    return (
        <View style={{ alignItems: 'center' }}>
            <Text style={{ fontSize: 25, margin: 20, textAlign: 'center' }}>
                React native progress bar
            </Text>
            <View style={{ width: '80%', justifyContent: 'center' }}>
                <PercentageBar
                    height={20}
                    backgroundColor={'blue'}
                    completedColor={'yellow'}
                    // percentage={'65%'}
                    // percentage={progress+'%'}
                    percentage={progress} 
                />
            </View>
        </View>
    );
}