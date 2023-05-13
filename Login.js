import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import Login from './components/login';
import Register1 from './components/Register1';
import Admin from './components/Admin';
import { Button,StyleSheet,Text } from 'react-native';


const Stack = createStackNavigator();
const App = () => {
  // const handleLogin = () => {
  //   navigation.navigate('Login')
  // }
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          name="Sign In"
          component={Login}
          options={({ navigation }) => ({
            headerRight: () => (
              <Button
                onPress={() => navigation.navigate('Register1')}
                title="Next"
                color="#007AFF"
              />
            ),
          })}
        />
        <Stack.Screen
          name="Register1"
          component={Register1}
          options={({ navigation }) => ({
            headerRight: () => (
              <Button
               onPress={() => navigation.navigate('Login')}
                title=" "
                color="White"
              />
            ),
          })}
        />
         <Stack.Screen name="Admin" component={Admin} />
      </Stack.Navigator>
    </NavigationContainer>
     
  );
};


export default App;