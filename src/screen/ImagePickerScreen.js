import React, {useState} from 'react';
import {Button, Image, View} from 'react-native';
import randomColor from '../utils/ColorUtils';
import ImagePickerModule from '../androidmodule/ImagePickerModuleInteface';

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
  return (
    <View style={{padding: 4}}>
      <Button
        title="Pick an Image"
        onPress={() => {
          onPress();
        }}
        color={randomColor()}
      />
      <Image
        // source={require('../../img/sample_image.png')}
        source={{uri: imageUri}}
        style={{height: 200, width: undefined}}
      />
    </View>
  );
};

export default ImagePickerScreen;
