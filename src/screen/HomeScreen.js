import React from 'react';
import {Text, Button, View} from 'react-native';
import FadeInView from '../animation/FadeInView';
import AnimatedView from '../animation/Animated';

const HomeScreen = ({navigation}) => {
  return (
    <>
      {/* <FadeInView>
        <Text> Home Screen </Text>
        <Button
          title="Go to profile"
          onPress={() => {
            navigation.navigate('profile', {name: 'Prashant'});
          }}
        />
      </FadeInView> */}

      {/* <AnimatedView /> */}
      <Button
        title="go to calendar"
        onPress={() => {
          navigation.navigate('calendar');
        }}
      />
    </>
  );
};

export default HomeScreen;
