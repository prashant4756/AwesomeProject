import React from 'react';
import {ScrollView, Image, Text, View} from 'react-native';

const logo = {
  uri: 'https://reactnative.dev/img/tiny_logo.png',
  width: 164,
  height: 164,
};

const ScrollTest = () => {
  return (
    <ScrollView pagingEnabled={true}>
      <Image source={logo} />
      <Text style={{fontSize: 96}}>If you like</Text>
      <Image source={logo} />
      <Text style={{fontSize: 96}}>If you like</Text>
      <Image source={logo} />
      <Image source={logo} />
      <Image source={logo} />
    </ScrollView>
  );
};

export default ScrollTest;
