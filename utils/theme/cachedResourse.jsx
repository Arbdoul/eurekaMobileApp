import {
  NotoSansJavanese_400Regular,
  NotoSansJavanese_500Medium,
  NotoSansJavanese_600SemiBold,
  NotoSansJavanese_700Bold,
  useFonts,
} from "@expo-google-fonts/noto-sans-javanese";
import * as SplashScreen from "expo-splash-screen";
import { useEffect, useState } from "react";

export function useCachedResources() {
  const [isLoadingComplete, setLoadingComplete] = useState(false);

  const [fontsLoaded] = useFonts({
    NotoSansJavanese_400Regular,
    NotoSansJavanese_500Medium,
    NotoSansJavanese_600SemiBold,
    NotoSansJavanese_700Bold,
  });

  useEffect(() => {
    async function loaded() {
      if (fontsLoaded) {
        await SplashScreen.hideAsync();
        setLoadingComplete(true);
      }
    }
    loaded();
  }, [fontsLoaded]);

  return isLoadingComplete;
}
