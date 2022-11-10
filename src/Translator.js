import React, {useState} from 'react';
import {View, TextInput, Text, StyleSheet} from 'react-native';

const Translator = () => {
  const [text, setText] = useState('');
  return (
    <View style={{backgroundColor: 'Green'}}>
      <TextInput
        style={{
          height: 40,
          borderColor: 'red',
          borderWidth: 5,
        }}
        onChangeText={text => {
          setText(text);
        }}
      />

      <Text style={style.textInputStyle}>
        {text
          .split(' ')
          .map(word => '+')
          .join('>')}
      </Text>
    </View>
  );
};

const style = StyleSheet.create({
  textInputStyle: {
    padding: 10,
    fontSize: 42,
  },
});

export default Translator;
