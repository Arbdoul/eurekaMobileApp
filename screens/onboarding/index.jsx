import AsyncStorage from "@react-native-async-storage/async-storage";
import { useNavigation } from "@react-navigation/native";
import React, { useRef } from "react";
import { StyleSheet, View } from "react-native";
import Swiper from "react-native-swiper";
import { Button } from "../../utils/button";
import { Colors } from "../../utils/constants";
import ScreenOne from "./screen-one";
import ScreenTwo from "./screen-two";

const Onboarding = () => {
  const navigation = useNavigation();
  const swiperRef = useRef(null);

  // useEffect(() => {
  //   const checkOnbordingStatus = async () => {
  //     const value = await AsyncStorage.getItem("@onbording_complete");

  //     if (value !== null && value === "true") {
  //       navigation.replace("ScreenThree");
  //     }
  //   };

  //   checkOnbordingStatus();
  // }, [navigation]);
  const handleOnBordingComplete = async (e) => {
    if (e === 2) {
      try {
        await AsyncStorage.setItem("@onbording_complete", "true");
        navigation.navigate("ScreenThree");
      } catch (error) {
        console.log("something went wrong", error);
      }
    }
  };

  const handleContinue = () => {
    if (swiperRef.current) {
      swiperRef.current.scrollBy(1); // Go to the next screen in the swiper
    }
  };

  const handleSkip = async () => {
    try {
      await AsyncStorage.setItem("@onboarding_complete", "true");
      navigation.navigate("ScreenThree");
    } catch (error) {
      console.log("Something went wrong", error);
    }
  };
  return (
    <>
      <View style={{ backgroundColor: Colors.background, flex: 1 }}>
        <Swiper ref={swiperRef}>
          <ScreenOne />
          <ScreenTwo />
        </Swiper>
        <View style={{ marginHorizontal: 24 }}>
          <Button onPress={handleContinue} backgroundColor>
            CONTINUE
          </Button>
          <Button onPress={handleSkip}>SKIP</Button>
        </View>
      </View>
    </>
  );
};

export default Onboarding;

const styles = StyleSheet.create({});
