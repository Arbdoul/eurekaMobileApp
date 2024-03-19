import * as SplashScreen from "expo-splash-screen";
import { StyleSheet } from "react-native";
import { RootNavigator } from "./app/navigation/root-navigation";
import { useCachedResources } from "./utils/theme/cachedResourse";

SplashScreen.preventAutoHideAsync();
export default function App() {
  const isLoadingComplete = useCachedResources();

  if (!isLoadingComplete) {
    return;
  }
  return <RootNavigator />;
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});
