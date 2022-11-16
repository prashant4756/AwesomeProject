import React, {useState} from 'react';
import {PermissionsAndroid} from 'react-native';

const requestCameraPermission = async () => {
  try {
    const granted = await PermissionsAndroid.request(
      PermissionsAndroid.PERMISSIONS.CAMERA,
      {
        title: 'Cool Photo App camera Permission',
        message:
          'Cool Photo App needs access to your camera ' +
          'so you can take awesome pictures.',
        buttonNeutral: 'Ask Me Later',
        buttonNegative: 'Cancel',
        buttonPositive: 'OK',
      },
    );
    if (granted === PermissionsAndroid.RESULTS.GRANTED) {
      console.log('You can use the camera');
      // return true;
      Promise.resolve(true);
    } else {
      console.log('camera permission denied');
    }
  } catch (error) {
    console.error(error);
  }
  console.log('camera permission denied');
  Promise.resolve(false);
};

export default requestCameraPermission;
