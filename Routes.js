import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import SplashScreen from './apps/screens/SplashScreen';
import FlatListDemo from './apps/screens/FlatListDemo';
import FlatListDemo1 from './apps/screens/FlatListDemo1';
import ChangePassword from './apps/screens/ChangePassword';
import LoginScreen from './apps/screens/LoginScreen';
import ForgotPassword from './apps/screens/ForgotPassword';
import ContactsList from './apps/screens/ContactsList';
import FlatListApi from './apps/screens/FlatListApi';
import FlatListApiModal from './apps/screens/FlatListApiModal';
import Dashboard from './apps/screens/Dashboard';
import PercentageBar from './apps/screens/PercentageBar';
import ProgressBar from './apps/screens/ProgressBar';
import LoginScreen1 from './apps/screens/LoginScreen1';


const Stack = createNativeStackNavigator();
  
  function Routes() {
    return (
      <NavigationContainer>        
        <Stack.Navigator initialRouteName="ProgressBar">

          <Stack.Screen  options={{headerShown: false}}  
          name="SplashScreen" component={SplashScreen} />


          <Stack.Screen 
          options={{headerShown: false}}
          name="LoginScreen" component={LoginScreen} />
          <Stack.Screen name="LoginScreen1" component={LoginScreen1} />

          <Stack.Screen name="ChangePassword" component={ChangePassword} />
          <Stack.Screen name="ForgotPassword" component={ForgotPassword} />
          <Stack.Screen  options={{headerShown: false}}
                    name="ContactsList" component={ContactsList} />
          <Stack.Screen name="FlatListDemo1" component={FlatListDemo1} />
          <Stack.Screen name="FlatListDemo" component={FlatListDemo} />
          <Stack.Screen name="FlatListApi" component={FlatListApi} />
          <Stack.Screen name="FlatListApiModal" component={FlatListApiModal} />
          <Stack.Screen name="Dashboard" component={Dashboard} />
          <Stack.Screen name="PercentageBar" component={PercentageBar} />
          <Stack.Screen name="ProgressBar" component={ProgressBar} />
          
         
        </Stack.Navigator>
      </NavigationContainer>
    );
  }
  
  export default Routes;