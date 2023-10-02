import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import {NavigationContainer, DefaultTheme} from '@react-navigation/native';
//screens
import {PlantDetail} from './screens';
import Tabs from './navigation/tabs';
const Stack = createStackNavigator();

const App = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator
        screenOptions={{headerShown: false}}
        initialRouteName={'Home'}>
        {/* Tabs */}
        <Stack.Screen
          name="HOME"
          component={Tabs}
          options={{headerShown: false}}
        />
        {/* Screens */}
        <Stack.Screen
          name="PlantDetail"
          component={PlantDetail}
          options={{headerShown: false}}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default () => {
  return <App />;
};
