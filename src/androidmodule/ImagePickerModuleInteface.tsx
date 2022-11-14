import { NativeModules } from "react-native";
const { ImagePickerModule } = NativeModules;

interface ImagePickerModuleInterface {
  pickImage(): void;
}

export default ImagePickerModule as ImagePickerModuleInterface;
