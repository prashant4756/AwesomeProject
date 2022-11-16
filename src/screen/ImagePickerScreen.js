import React, {useState} from 'react';
import {Button, Image, View} from 'react-native';
import randomColor from '../utils/ColorUtils';
import ImagePickerModule from '../androidmodule/ImagePickerModuleInteface';
import {launchCamera} from 'react-native-image-picker';
import requestPermission from '../permissions/RequestAndroidPermissions';

const ImagePickerScreen = ({navigation}) => {
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
    }
  };

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
