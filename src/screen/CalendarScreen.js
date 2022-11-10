import React from 'react';
import {Button, NativeModules} from 'react-native';

const CalendarScreen = ({navigation}) => {
  const {CalendarModule} = NativeModules;
  const onPress = () => {
    console.log('We will invoke the native module here!');
    CalendarModule.createCalendarEvent('testName', 'testLocation');
  };
  return (
    <>
      <Button title="invoke calendar" onPress={onPress} />
    </>
  );
};

export default CalendarScreen;
