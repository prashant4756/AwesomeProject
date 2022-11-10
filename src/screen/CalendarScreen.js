import React from 'react';
import {Button} from 'react-native';
import CalendarModule from '../androidmodule/CalendarModuleInterface';
// import CalendarModule from '../androidmodule/CalendarModule';

const CalendarScreen = ({navigation}) => {
  const onPress = () => {
    console.log('We will invoke the native module here!');
    CalendarModule.createCalendarEvent('testName', 'testLocation');
  };
  const onPressGetConstants = () => {
    console.log('We will get constants here!');
    // const {eventName1} = CalendarModule.getConstants();
    console.log(CalendarModule.getConstants());
  };
  return (
    <>
      <Button title="invoke calendar" onPress={onPress} />
      <Button title="getConstants calendar" onPress={onPressGetConstants} />
    </>
  );
};

export default CalendarScreen;
