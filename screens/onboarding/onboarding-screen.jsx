import { useNavigation } from "@react-navigation/native";
import { LinearGradient } from "expo-linear-gradient";
import { StatusBar } from "expo-status-bar";
import React, { useRef, useState } from "react";
import {
  Animated,
  Dimensions,
  Image,
  StyleSheet,
  Text,
  View,
} from "react-native";
import { SlidingDot } from "react-native-animated-pagination-dots";
import PagerView from "react-native-pager-view";
import { useSafeAreaInsets } from "react-native-safe-area-context";
import { Button } from "../../utils/button";
import { Colors, fonts, linearGradientBackground } from "../../utils/constants";

const DATA = [
  {
    img: require("../../assets/boarding/onBoardingTwo.png"),
    title: "Elevate Your Learning Experience",
    description1: "Where innovative features meet",
    description2: "educational excellence and with",
    description3: "unique features designed for",
    description4: " modern learners.",
  },

  {
    img: require("../../assets/boarding/onBoardingOne.png"),
    title: "Unleash Peer-Powered Learning",
    description1: "Explore courses and collaborate",
    description2: "with peers in a groundbreaking",
    description3: "learning environment.",
  },
];
const AnimatedPagerView = Animated.createAnimatedComponent(PagerView);
const OnboardingScreen = () => {
  const insets = useSafeAreaInsets();

  const [activePage, setActivePage] = useState(0);
  const width = Dimensions.get("window").width;
  const pagerViewRef = useRef(null);
  const scrollOffsetAnimatedValue = React.useRef(new Animated.Value(0)).current;
  const positionAnimatedValue = React.useRef(new Animated.Value(0)).current;
  const inputRange = [0, DATA.length];
  const scrollX = Animated.add(
    scrollOffsetAnimatedValue,
    positionAnimatedValue
  ).interpolate({
    inputRange,
    outputRange: [0, DATA.length * width],
  });

  const onPageScroll = React.useMemo(
    () =>
      Animated.event(
        [
          {
            nativeEvent: {
              offset: scrollOffsetAnimatedValue,
              position: positionAnimatedValue,
            },
          },
        ],
        {
          useNativeDriver: false,
        }
      ),
    // eslint-disable-next-line react-hooks/exhaustive-deps
    []
  );
  const navigation = useNavigation();
  const onContinuePress = () => {
    if (activePage == 0) {
      return pagerViewRef.current.setPage(1);
    }
    navigation.navigate("ScreenThree");
  };

  const onSkipPress = () => {
    navigation.navigate("ScreenThree");
  };
  return (
    <LinearGradient
      colors={linearGradientBackground.colors}
      start={{ x: 0, y: 0 }}
      end={{ x: 0, y: 1 }}
      style={{ flex: 1, paddingTop: insets.top }}
    >
      <StatusBar style="light" />
      <View
        style={{
          justifyContent: "center",
          alignItems: "center",
          marginTop: 20,
        }}
      >
        <Image
          source={require("../../assets/boarding/eureka.png")}
          style={{ width: 105, height: 38.6 }}
        />
      </View>

      <AnimatedPagerView
        style={{ flex: 1 }}
        ref={pagerViewRef}
        onPageScroll={onPageScroll}
        initialPage={0}
        onPageSelected={(e) => setActivePage(e.nativeEvent.position)}
      >
        {DATA.map((data) => (
          <View style={{}} key={data.title}>
            <View
              style={{
                marginTop: 40,
                justifyContent: "center",
                alignItems: "center",
              }}
            ></View>
            <View
              style={{
                justifyContent: "center",
                alignItems: "center",

                marginHorizontal: 24,
              }}
            >
              <Image source={data.img} />
            </View>
            <View
              style={{
                justifyContent: "center",
                alignItems: "center",
                marginTop: 12,
                marginHorizontal: 24,
              }}
            >
              <Text style={styles.header}>{data.title}</Text>
              <Text
                style={{
                  color: Colors.gray,
                  alignItems: "center",

                  marginTop: 6,
                  fontFamily: fonts.notoSansJavaneseRegular.fontFamily,
                }}
              >
                {data.description1}
              </Text>
              <Text
                style={{
                  color: Colors.gray,
                  alignItems: "center",
                  fontFamily: fonts.notoSansJavaneseRegular.fontFamily,
                }}
              >
                {data.description2}
              </Text>
              <Text
                style={{
                  color: Colors.gray,
                  alignItems: "center",
                  fontFamily: fonts.notoSansJavaneseRegular.fontFamily,
                }}
              >
                {" "}
                {data.description3}
              </Text>
              <Text
                style={{
                  color: Colors.gray,
                  alignItems: "center",
                  fontFamily: fonts.notoSansJavaneseRegular.fontFamily,
                }}
              >
                {data.description4}
              </Text>
            </View>
          </View>
        ))}
      </AnimatedPagerView>

      <View
        style={{
          flex: 0.01,
        }}
      >
        <SlidingDot
          data={DATA}
          scrollX={scrollX}
          containerStyle={{
            position: "relative",
            bottom: 8,
            flexDirection: "row",
            alignSelf: "center",
          }}
          dotStyle={{ backgroundColor: "white", opacity: 1 }}
          dotSize={5}
        />
      </View>

      <View style={{ marginHorizontal: 24, bottom: 20 }}>
        <Button backgroundColor={Colors.white} onPress={onContinuePress}>
          Continue
        </Button>
        <Button
          borderColor={Colors.white}
          color={Colors.white}
          onPress={onSkipPress}
        >
          Skip
        </Button>
      </View>
    </LinearGradient>
  );
};

const Slides = () => {
  return (
    <View style={{ flex: 1 }}>
      <OnboardingScreen />
    </View>
  );
};

export default Slides;

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  header: {
    fontFamily: fonts.notoSansJavaneseBold.fontFamily,
    marginTop: 24,
    fontSize: 18,
    color: Colors.white,
  },
});
