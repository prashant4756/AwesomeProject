import React from 'react';
import {View, StyleSheet} from 'react-native';

const FlexDimensionsBasics = () => {
  return (
    // Try removing the `flex: 1` on the parent View.
    // The parent will not have dimensions, so the children can't expand.
    // What if you add `height: 300` instead of `flex: 1`?
    <View label="title" style={styles.container}>
      <View style={{flex: 1, backgroundColor: 'powderblue'}} />
      <View style={{flex: 1, backgroundColor: 'skyblue'}} />
      <View style={{flex: 2, backgroundColor: 'steelblue'}} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    flexDirection: 'column',
  },
});

export default FlexDimensionsBasics;
