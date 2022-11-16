import React, {useState, useEffect} from 'react';
import {Button, Image, View} from 'react-native';
import randomColor from '../utils/ColorUtils';
import ImagePickerModule from '../androidmodule/ImagePickerModuleInteface';
import {launchCamera} from 'react-native-image-picker';
import requestPermission from '../permissions/RequestAndroidPermissions';
import requestCameraPermission from '../permissions/RequestAndroidCameraPermissions';

const ImagePickerScreen = ({navigation}) => {
  const [hasPermission, setHasPermission] = useState(false);
  const [hasFilePermission, setHasFilePermission] = useState(false);
  const [hasCameraPermission, setHasCameraPermission] = useState(false);
  const [imageUri, setImageUri] = useState(null);
  const onPress = async () => {
    console.log('pick image js');
    try {
      const image = await ImagePickerModule.pickImage();
      console.log(image);
      setImageUri(image);
    } catch (error) {
      console.error(error);
    }
  };

  const onPressCaptureImage = () => {
    try {
      // const isGranted = await requestPermission();
      // console.log(isGranted);
      // if (isGranted) {
      //   console.log('opening camera');
      //   const image = ImagePickerModule.launchCamera();
      //   console.log(image);
      //   setImageUri(image);
      // }
      // console.log('operation completed');

      requestPermission().then(async isGranted => {
        console.log(isGranted);
        if (isGranted) {
          console.log('opening camera');
          const image = await ImagePickerModule.launchCamera();
          console.log('url is', image);
          setImageUri(image);
        }
        console.log('operation completed');
      });
    } catch (error) {
      console.error(error);
      // setHasFilePermission(false);
    }
  };

  // useEffect(() => {
  //   if (hasCameraPermission) {
  //     const image = ImagePickerModule.launchCamera();
  //     console.log(image);
  //     setImageUri(image);
  //   }
  // }, [hasCameraPermission]);

  // useEffect(() => {
  //   if (hasFilePermission) {
  //     requestCameraPermission().then(isGranted => {
  //       console.log('now camera permission');
  //       setHasCameraPermission(isGranted);
  //       console.log(isGranted);
  //     });
  //   }
  // }, [hasFilePermission]);

  useEffect(() => {
    console.log('permission is');
    console.log(hasPermission);
    if (hasPermission) {
      const image = ImagePickerModule.launchCamera();
      console.log(image);
      setImageUri(image);
    }
  }, [hasPermission]);

  const onPressCaptureImageLib = async () => {
    let options = {
      storageOptions: {
        skipBackup: true,
        path: 'images',
      },
    };
    try {
      const result = await launchCamera(options);
      console.log(result);
      const uri = result.assets[0].uri;
      setImageUri(uri);
    } catch (error) {
      console.error(error);
    }
  };
  return (
    <View style={{padding: 4}}>
      <View style={{padding: 4}}>
        <Button
          title="Pick an Image"
          onPress={() => {
            onPress();
          }}
          color={randomColor()}
        />
      </View>
      <View style={{padding: 4}}>
        <Button
          title="Capture Image (Library)"
          onPress={() => {
            onPressCaptureImageLib();
          }}
          color={randomColor()}
        />
      </View>
      <View style={{padding: 4}}>
        <Button
          title="Capture Image"
          onPress={() => {
            onPressCaptureImage();
          }}
          color={randomColor()}
        />
      </View>
      <Image
        // source={require('../../img/sample_image.png')}
        source={{uri: imageUri}}
        style={{height: 200, width: undefined}}
      />
    </View>
  );
};

export default ImagePickerScreen;
