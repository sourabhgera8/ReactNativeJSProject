import React, { useEffect, useReducer, useRef, useState } from 'react';
import { View, Text, Image, ScrollView, FlatList, Animated } from 'react-native';

export default function ProgressBar({ route, navigation }) {
    const [index, setIndex] = useState(0);

    useEffect(() => {
        const interval = setTimeout(() => {
            setIndex((index + 1) % (10 + 1));
        }, 1000)

        return () => {
            clearTimeout(interval);
        }
    }, [index])


    const Progress = ({ step, steps, height }) => {

        const [isFinish, setIsFinish] = useState(false);
        const [width, setWidth] = useState(0);
        const animatedValue = useRef(new Animated.Value(-1000)).current;
        const reactive = useRef(new Animated.Value(-1000)).current;

        useEffect(() => {
            Animated.timing(animatedValue, {
                toValue: reactive,
                duration: 300,
                useNativeDriver: true
            }).start();
        }, [])

        useEffect(() => {           
            reactive.setValue(-width + (width * step) / steps);            
        }, [step, width])


        return (
            <>

                <Text style={{
                    fontSize: 12,
                    fontWeight: '900', marginBottom: 8,
                }} >
                    {step}/{steps}
                </Text>
                <View
                    onLayout={(e) => {
                        const newWidth = e.nativeEvent.layout.width;
                        setWidth(newWidth);
                    }}
                    style={{
                        height,
                        backgroundColor: 'rgba(0,0,0,0.1)',
                        // backgroundColor: 'red',
                        borderRadius: height,
                        overflow: 'hidden'
                    }}
                >
                    <Animated.View style={{
                        height,
                        width: '100%',
                        borderRadius: height,
                        // backgroundColor: 'green',
                        backgroundColor: 'rgba(0,0,0,0.5)',
                        position: 'absolute',
                        left: 0,
                        top: 0,
                        transform: [{
                            translateX: animatedValue
                        }]
                    }}>
                    </Animated.View>
                </View>
            </>
        )

    }

    return (
        <View style={{
            flex: 1,
            backgroundColor: '#fff', justifyContent: 'center'
            , padding: 20
        }}>


            <Progress step={index} steps={10} height={20} />

        </View>
    );
}