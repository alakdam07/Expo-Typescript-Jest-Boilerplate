import { StatusBar } from "expo-status-bar";
import React, { memo, useCallback, useState } from "react";
import { StyleSheet, Text, View } from "react-native";
import AppLoading from "expo-app-loading";
import { Ionicons } from "@expo/vector-icons";
import { cacheFonts, cacheImages } from "./src/common/cache";

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: `#fff`,
    alignItems: `center`,
    justifyContent: `center`,
  },
});
const App = () => {
  const [isReady, setIsReady] = useState(false);

  const startAsync = useCallback(async () => {
    const images = cacheImages([
      require(`./assets/icon.png`),
      require(`./assets/splash.png`),
    ]);
    const fonts = cacheFonts([Ionicons.font]);
    await Promise.all([...images, ...fonts]);
  }, []);

  const onFinish = useCallback(() => {
    setIsReady(true);
  }, []);

  return isReady ? (
    <>
      <StatusBar backgroundColor="#000" style="light" />
      <View style={styles.container}>
        <Text>Open up App.tsx to start working on your app! 👋</Text>
        <StatusBar style="auto" />
      </View>
    </>
  ) : (
    <AppLoading
      startAsync={startAsync}
      onFinish={onFinish}
      onError={console.error}
    />
  );
};

export default memo(App);
