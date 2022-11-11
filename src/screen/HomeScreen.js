import React from 'react';
import {Text, Button, View} from 'react-native';
import FadeInView from '../animation/FadeInView';
import AnimatedView from '../animation/Animated';
import randomColor from '../utils/ColorUtils';

const HomeScreen = ({navigation}) => {
  return (
    <View style={{padding: 4}}>
      {/* <AnimatedView /> */}
      <FadeInView style={{padding: 4}}>
        <Button
          title="Go to profile"
          onPress={() => {
            navigation.navigate('profile', {name: 'Prashant'});
          }}
          color={randomColor()}
        />
      </FadeInView>
      <View style={{padding: 4}}>
        <Button
          title="go to calendar"
          onPress={() => {
            navigation.navigate('calendar');
          }}
          color={randomColor()}
        />
      </View>
    </View>
  );
};

export default HomeScreen;
