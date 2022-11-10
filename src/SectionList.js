import React from 'react';
import {SectionList, Text, View, StyleSheet} from 'react-native';

const data = [
  {title: 'a', data: [1, 2, 3]},
  {title: 'b', data: [5, 6, 7]},
  {title: 'c', data: [8]},
  {title: 'd', data: [0, 10]},
];
const SectionListComp = () => {
  return (
    <View>
      <SectionList
        sections={data}
        renderItem={({item}) => <Text style={styles.item}>{item}</Text>}
        renderSectionHeader={({section}) => (
          <Text style={styles.section}>{section.title}</Text>
        )}
        keyExtractor={(item, index) => item.title}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  section: {
    padding: 10,
    fontSize: 30,
    fontWeight: 'bold',
    backgroundColor: 'teal',
  },
  item: {
    padding: 20,
    fontSize: 20,
    backgroundColor: 'rgba(247,247,247,1.0)',
  },
});

export default SectionListComp;
