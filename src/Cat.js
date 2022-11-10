import React, { useState } from 'react';
import {View, Text, Button} from 'react-native';

const Cat = props => {
  const [isHungry, setIsHungry] = useState(true);
  return (
    <View>
      <Text>
        Hello, I am your {props.name} and I am {isHungry ? 'hungry' : 'full'}!
      </Text>
      <Button
        title={isHungry ? 'Feed me Now' : 'Thank you'}
        onPress={() => {
          setIsHungry(false);
        }}
        disabled={!isHungry}
      />
    </View>
  );
};

export default Cat;
