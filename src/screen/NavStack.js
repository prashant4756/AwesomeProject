import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import HomeScreen from './HomeScreen';
import ProfileScreen from './ProfileScreen';
import CalendarScreen from './CalendarScreen';

const Stack = createNativeStackNavigator();

const NavStack = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          name="home"
          component={HomeScreen}
          options={{title: 'Welcome'}}
        />
        <Stack.Screen
          name="profile"
          component={ProfileScreen}
          options={{title: 'My Profile'}}
        />
        <Stack.Screen
          name="calendar"
          component={CalendarScreen}
          options={{title: 'Calendar'}}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default NavStack;
