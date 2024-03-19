import { useFonts } from "expo-font";
import React from "react";
import { StyleSheet, Text, TouchableOpacity, View } from "react-native";
import { fonts } from "./constants";

export const Button = ({
  children,
  backgroundColor,
  onPress,
  borderColor,
  color,
}) => {
  const [loaded] = useFonts({
    notoSans: require("../assets/fonts/Noto-Sans-Javanese.ttf"),
  });
  return (
    <View>
      <TouchableOpacity
        onPress={onPress}
        style={[
          styles.pressable,
          {
            backgroundColor: backgroundColor,
            borderColor: borderColor,
          },
        ]}
      >
        <Text style={[styles.buttonText, { color: color }]}>{children}</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {},
  pressable: {
    alignItems: "center",
    borderRadius: 5,
    borderWidth: 1,
    marginTop: 24,
  },
  buttonText: {
    paddingVertical: 20,
    fontFamily: fonts.notoSansJavaneseBold.fontFamily,
  },
});
