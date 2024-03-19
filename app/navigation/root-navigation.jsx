import AsyncStorage from "@react-native-async-storage/async-storage";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { useEffect, useState } from "react";
import { StyleSheet } from "react-native";
import { SafeAreaProvider } from "react-native-safe-area-context";
import { CreateAccount } from "../../screens/auth/create-account";
import { EmailVerification } from "../../screens/auth/email-verification";
import { ForgotPassward } from "../../screens/auth/forgot-passward";
import { LoginScreen } from "../../screens/auth/login-screen";
import Slides from "../../screens/onboarding/onboarding-screen";
import ScreenThree from "../../screens/onboarding/screen-three";
import { Colors } from "../../utils/constants";

const Stack = createNativeStackNavigator();

const RootNavigation = () => {
  const [viewedOnBoarding, setViewedOnBoarding] = useState(false);

  const checkIfAlreadyViewed = async () => {
    try {
      const value = await AsyncStorage.getItem("alreadyViewed");

      if (!value) {
        await AsyncStorage.setItem("alreadyViewed", "true");
        setViewedOnBoarding(true);
      } else {
        setViewedOnBoarding(false);
      }
    } catch (error) {
      console.error("Error reading or updating AsyncStorage:", error);
    }
  };

  useEffect(() => {
    checkIfAlreadyViewed();
  }, []);

  return (
    <Stack.Navigator screenOptions={{ headerTintColor: "white" }}>
      {/* {viewedOnBoarding && (
        <> */}
      <Stack.Screen
        name="Onboarding"
        component={Slides}
        options={{
          headerShown: false,
        }}
      />
      {/* </>
      )} */}
      <Stack.Screen
        name="ScreenThree"
        component={ScreenThree}
        options={{
          headerShown: false,
        }}
      />
      <Stack.Screen
        name="Login"
        component={LoginScreen}
        options={{
          headerTitle: "Welcome Back",
          headerTitleAlign: "center",
          headerShadowVisible: false,
          headerStyle: {
            backgroundColor: Colors.background,
          },
        }}
      />
      <Stack.Screen
        name="CreateAccount"
        component={CreateAccount}
        options={{
          headerTitle: "Create An Account",
          headerTitleAlign: "center",
          headerShadowVisible: false,
          headerStyle: {
            backgroundColor: Colors.background,
          },
        }}
      />
      <Stack.Screen
        name="ForgotPassword"
        component={ForgotPassward}
        options={{
          headerTitleAlign: "center",
          headerShadowVisible: false,
          headerStyle: {
            backgroundColor: Colors.background,
          },
        }}
      />
      <Stack.Screen
        name="EmailVerification"
        component={EmailVerification}
        options={{
          headerTitleAlign: "center",
          headerShadowVisible: false,
          headerStyle: {
            backgroundColor: Colors.background,
          },
        }}
      />
    </Stack.Navigator>
  );
};

export default RootNavigation;

export const RootNavigator = () => {
  return (
    <SafeAreaProvider>
      <NavigationContainer>
        <RootNavigation />
      </NavigationContainer>
    </SafeAreaProvider>
  );
};

const styles = StyleSheet.create({});
