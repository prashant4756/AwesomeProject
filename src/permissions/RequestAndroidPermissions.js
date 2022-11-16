import React from 'react';
import {PermissionsAndroid} from 'react-native';

const requestPermission = () => {
  // try {
  //   const granted = await PermissionsAndroid.request(
  //     PermissionsAndroid.PERMISSIONS.WRITE_EXTERNAL_STORAGE,
  //     {
  //       title: 'Cool Photo App Storage Permission',
  //       message:
  //         'Cool Photo App needs access to your Storage ' +
  //         'so you can take awesome pictures.',
  //       buttonNeutral: 'Ask Me Later',
  //       buttonNegative: 'Cancel',
  //       buttonPositive: 'OK',
  //     },
  //   );
  //   if (granted === PermissionsAndroid.RESULTS.GRANTED) {
  //     console.log('You can use the storage');
  //     // return true;
  //     Promise.resolve(true);
  //   } else {
  //     console.log('storage permission denied');
  //   }
  // } catch (error) {
  //   console.error(error);
  // }
  // console.log('storage permission denied');
  // Promise.resolve(false);

  return PermissionsAndroid.requestMultiple([
    PermissionsAndroid.PERMISSIONS.CAMERA,
    PermissionsAndroid.PERMISSIONS.READ_EXTERNAL_STORAGE,
    PermissionsAndroid.PERMISSIONS.WRITE_EXTERNAL_STORAGE,
  ]).then(result => {
    if (
      result['android.permission.CAMERA'] &&
      result['android.permission.READ_EXTERNAL_STORAGE'] &&
      result['android.permission.WRITE_EXTERNAL_STORAGE'] === 'granted'
    ) {
      console.log('permissions is success');
      return true;
    } else if (
      result['android.permission.CAMERA'] ||
      result['android.permission.READ_EXTERNAL_STORAGE'] ||
      result['android.permission.WRITE_EXTERNAL_STORAGE'] === 'never_ask_again'
    ) {
      console.log('permissions is unsuccess');
      return false;
    }
    return false;
  });
};

export default requestPermission;
