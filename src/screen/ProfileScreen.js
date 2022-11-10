import React from 'react';
import {Text} from 'react-native';

const ProfileScreen = ({navigation, route}) => {
  return <Text>This is {route.params.name}'s Profile</Text>;
};

export default ProfileScreen;
