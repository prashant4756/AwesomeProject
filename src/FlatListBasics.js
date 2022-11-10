import React from 'react';
import {FlatList, Text, View, StyleSheet} from 'react-native';

const styles = StyleSheet.create({
  container: {
    padding: 20,
    flex: 1,
    backgroundColor: '#909505',
  },
  item: {
    padding: 10,
    fontSize: 20,
    height: 60,
  },
});

const FlatListBasics = () => {
  return (
    <View style={styles.container}>
      <Text>Test</Text>
      <FlatList
        data={[
          'abc',
          'def',
          'ghi',
          'abc',
          'def',
          'ghi',
          'abc',
          'def',
          'ghi',
          'abc',
          'def',
          'ghi',
        ]}
        renderItem={({item}) => <Text style={styles.item}>{item}</Text>}
      />
    </View>
  );
};

export default FlatListBasics;
