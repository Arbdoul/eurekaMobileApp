import { useNavigation } from "@react-navigation/native";
import React from "react";
import { Image, ImageBackground, StyleSheet, Text, View } from "react-native";
import { Button } from "../../utils/button";
import { Colors, fonts } from "../../utils/constants";

const ScreenThree = () => {
  const navigation = useNavigation();

  const handleGetStartedPress = () => {
    navigation.navigate("Login");
  };
  return (
    <View style={styles.container}>
      <ImageBackground
        style={styles.container}
        source={require("../../assets/boarding/boarderThree.png")}
      >
        <View
          style={{ justifyContent: "center", alignItems: "center", top: 450 }}
        >
          <Image
            source={require("../../assets/boarding/eureka.png")}
            style={{ width: 105, height: 38.6 }}
          />
          <Text
            style={{
              justifyContent: "center",
              alignItems: "center",
              color: Colors.white,
              marginTop: 15,
              fontFamily: fonts.notoSansJavaneseBold.fontFamily,
            }}
          >
            We Will Open The World Of Knowledge
          </Text>
          <Text
            style={{
              justifyContent: "center",
              alignItems: "center",
              color: Colors.white,
              fontFamily: fonts.notoSansJavaneseBold.fontFamily,
            }}
          >
            For You!
          </Text>
        </View>
        <View style={{ marginHorizontal: 24, top: 470 }}>
          <Button
            onPress={handleGetStartedPress}
            backgroundColor={Colors.white}
          >
            GET STARTED
          </Button>
          <Button backgroundColor={Colors.white}>ALREADY HAVE AN ACOUNT</Button>
        </View>
      </ImageBackground>
    </View>
  );
};

export default ScreenThree;

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
