import { Image } from "react-native";
import { Asset } from "expo-asset";
import * as Font from "expo-font";
import { IFonts } from "./types";

export const cacheImages = (images: []) => {
  return images.map((image: string) => {
    if (typeof image === `string`) {
      return Image.prefetch(image);
    }
    return Asset.fromModule(image).downloadAsync();
  });
};

export const cacheFonts = (fonts: IFonts[]) => {
  return fonts.map((font: IFonts["ionicons"]) => Font.loadAsync(font));
};
