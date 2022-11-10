import React from 'react';
import Cat from './src/Cat';
import Translator from './src/Translator';
import ScrollTest from './src/ScrollViewTest';
import FlatListBasics from './src/FlatListBasics';
import SectionListComp from './src/SectionList';
import Hello from './src/Hello';
import MoviesFnComp from './src/MoviesFnComp';
import LotsOfStyle from './src/Style';
import FlexDimensionsBasics from './src/Flex';
import PercentageDimensionsBasics from './src/PercentDimension';
import FlexDirectionBasics from './src/FlexMore';
import { Image, Text } from 'react-native';
import ImageSamples from "./src/ImageSamples";
import HandlingTouches from './src/HandlingTouches';
import NavStack from './src/screen/NavStack';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import HomeScreen from './src/screen/HomeScreen';
import ProfileScreen from './src/screen/ProfileScreen';
// const Stack = createNativeStackNavigator();

const Cafe = () => {
  return (
    <>
      {/* <Cat name="A" />
      <Cat name="B" />
      <Cat name="C" /> */}
      {/* <FlatListBasics /> */}
      {/* <SectionListComp /> */}
      {/* <Translator /> */}
      {/* <ScrollTest /> */}
      {/* <Hello /> */}
      {/* <MoviesFnComp /> */}
      {/* <LotsOfStyle /> */}
      {/* <PercentageDimensionsBasics /> */}
      {/* <FlexDimensionsBasics /> */}
      {/*  <FlexDirectionBasics />*/}
      {/* <ImageSamples /> */}
      {/* <HandlingTouches /> */}
      {/* <NavStack /> */}
      <NavStack />
    </>
  );
};

export default Cafe;