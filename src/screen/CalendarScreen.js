import React from 'react';
import {Button, StyleSheet, View} from 'react-native';
import CalendarModule from '../androidmodule/CalendarModuleInterface';
// import CalendarModule from '../androidmodule/CalendarModule';
import randomColor from '../utils/ColorUtils';

const CalendarScreen = ({navigation}) => {
  const onPress = () => {
    console.log('We will invoke the native module here!');
    CalendarModule.createCalendarEvent(
      'testName',
      'testLocation',
      (error, eventId) => {
        if (error) {
          console.error(error);
        }
        console.log(`Created a new event with id ${eventId}`);
      },
    );
  };

  const onPressSucessError = () => {
    console.log('We will invoke the native module here! /success error');
    CalendarModule.createCalendarEventSuccessError(
      'testName2',
      'location2',
      error => {
        console.error(`Error found! ${error}`);
      },
      eventId => {
        console.log(`event id ${eventId} returned`);
      },
    );
  };

  const onPressPromise = async () => {
    console.log('We will invoke the native module here! /promise');
    try {
      const eventId = await CalendarModule.createCalendarEventPromise(
        'promise',
        'promiselocation',
      );
      console.log(`Created a new event with id ${eventId}`);
    } catch (e) {
      console.error(e);
    }
  };
  const onPressGetConstants = () => {
    console.log('We will get constants here!');
    // const {eventName1} = CalendarModule.getConstants();
    console.log(CalendarModule.getConstants());
  };
  return (
    <View style={{padding: 10, flex: 1}}>
      <View style={styles.buttonStyle}>
        <Button
          title="invoke calendar default"
          onPress={onPress}
          color={randomColor()}
        />
      </View>
      <View style={styles.buttonStyle}>
        <Button
          style={styles.buttonStyle}
          title="invoke calendar error success"
          onPress={onPressSucessError}
          color={randomColor()}
        />
      </View>
      <View style={styles.buttonStyle}>
        <Button
          style={styles.buttonStyle}
          title="invoke calendar promise"
          onPress={onPressPromise}
          color={randomColor()}
        />
      </View>
      <View style={styles.buttonStyle}>
        <Button
          style={styles.buttonStyle}
          title="getConstants calendar"
          onPress={onPressGetConstants}
          color={randomColor()}
        />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  buttonStyle: {
    padding: 4,
  },
});

export default CalendarScreen;
