import {Image, ScrollView, Text, ImageBackground} from 'react-native';
import React from 'react';

const ImageSamples = () => {
  return (
    <ScrollView style={{backgroundColor: 'forestgreen', padding: 10}}>
      <ImageBackground
        source={require('../img/sample.png')}
        imageStyle={{borderRadius: 20, opacity: 0.2}}
        style={{width: '100%', height: '100%', padding: 10}}>
        <Image
          source={{uri: 'https://reactjs.org/logo-og.png'}}
          style={{width: undefined, height: 400}}
        />

        <Image
          source={require('../img/sample_image.png')}
          style={{height: 200, width: undefined}}
        />

        <Image
          source={{
            uri: 'https://reactjs.org/logo-og.png',
            method: 'POST',
            headers: {
              Pragma: 'no-cache',
            },
            body: 'Your Body goes here',
          }}
          style={{width: undefined, height: 400, resizeMode: 'contain'}}
        />
      </ImageBackground>
    </ScrollView>
  );
};

export default ImageSamples;
