import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import SplashScreen from './apps/screens/SplashScreen';
import FlatListDemo from './apps/screens/FlatListDemo';
import FlatListDemo1 from './apps/screens/FlatListDemo1';
import ChangePassword from './apps/screens/ChangePassword';
import LoginScreen from './apps/screens/LoginScreen';

const Stack = createNativeStackNavigator();
  
  function Routes() {
    return (
      <NavigationContainer>
        <Stack.Navigator initialRouteName="SplashScreen">

          <Stack.Screen  options={{headerShown: false}}  
          name="SplashScreen" component={SplashScreen} />
          <Stack.Screen name="LoginScreen" component={LoginScreen} />

          <Stack.Screen name="FlatListDemo1" component={FlatListDemo1} />
          <Stack.Screen name="FlatListDemo" component={FlatListDemo} />
          <Stack.Screen name="ChangePassword" component={ChangePassword} />
          
         
        </Stack.Navigator>
      </NavigationContainer>
    );
  }
  
  export default Routes;