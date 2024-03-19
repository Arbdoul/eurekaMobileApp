import { AntDesign } from "@expo/vector-icons";
import { useNavigation } from "@react-navigation/native";
import React, { useLayoutEffect } from "react";
import { StyleSheet, Text, TouchableOpacity, View } from "react-native";
import { OtpInput } from "react-native-otp-entry";
import { Button } from "../../utils/button";
import { Colors, fonts } from "../../utils/constants";

export const EmailVerification = () => {
  const navigation = useNavigation();

  useLayoutEffect(() => {
    navigation.setOptions({
      //  title: "Favorites",
      headerTitle: () => <CustomHeaderTitle />,
      headerLeft: () => {
        <AntDesign name="arrowleft" size={24} color={Colors.white} />;
      },
    });
  }, []);

  const CustomHeaderTitle = () => {
    return (
      <>
        <Text
          style={{
            color: Colors.primary100,
            color: Colors.primary100,
            fontFamily: fonts.notoSansJavaneseBold.fontFamily,
          }}
        >
          You’ve Got A{" "}
        </Text>

        <Text
          style={{
            color: Colors.white,
            fontFamily: fonts.notoSansJavaneseBold.fontFamily,
          }}
        >
          Mail
        </Text>

        <Text
          style={{
            color: Colors.primary100,

            fontFamily: fonts.notoSansJavaneseBold.fontFamily,
          }}
        >
          !
        </Text>
      </>
    );
  };
  return (
    <View style={styles.rootContainer}>
      <View
        style={{
          marginHorizontal: 24,
          justifyContent: "center",
          alignItems: "center",
          marginTop: 20,
        }}
      >
        <Text
          style={{
            color: Colors.gray,
            fontFamily: fonts.notoSansJavaneseRegular.fontFamily,
          }}
        >
          check your mail and input{" "}
        </Text>
        <Text
          style={{
            color: Colors.gray,
            fontFamily: fonts.notoSansJavaneseRegular.fontFamily,
          }}
        >
          the code below
        </Text>
      </View>
      <View style={{ marginHorizontal: 24, marginTop: 35 }}>
        <OtpInput
          numberOfDigits={4}
          focusColor="green"
          focusStickBlinkingDuration={500}
          onTextChange={(text) => console.log(text)}
          onFilled={(text) => console.log(`OTP is ${text}`)}
          theme={{
            containerStyle: styles.container,
            inputsContainerStyle: styles.inputsContainer,
            pinCodeContainerStyle: styles.pinCodeContainer,
            pinCodeTextStyle: styles.pinCodeText,
            // focusStickStyle: styles.focusStick,
            focusedPinCodeContainerStyle: styles.activePinCodeContainer,
          }}
        />
      </View>

      <View
        style={{
          marginTop: 35,
          marginHorizontal: 24,
          flexDirection: "row",
          gap: 4,
        }}
      >
        <Text
          style={{
            color: Colors.white,
            fontFamily: fonts.notoSansJavaneseBold.fontFamily,
          }}
        >
          Didn't recieve the OTP?
        </Text>
        <TouchableOpacity>
          <Text
            style={{
              color: Colors.primary100,
              fontFamily: fonts.notoSansJavaneseBold.fontFamily,
            }}
          >
            Resent it
          </Text>
        </TouchableOpacity>
      </View>
      <View style={{ marginHorizontal: 24 }}>
        <Button backgroundColor={Colors.white}>CONFIRM</Button>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  rootContainer: {
    flex: 1,
    backgroundColor: Colors.background,
  },
  inputsContainer: {
    color: Colors.white,
  },
  container: {
    color: Colors.white,
  },
  pinCodeContainer: {
    borderRadius: 5,
    borderWidth: 2,
    borderColor: Colors.gray,
    width: 70,
    height: 70,
  },
  activePinCodeContainer: {
    backgroundColor: Colors.primary200,
    borderColor: Colors.gray,
  },
  pinCodeText: {
    color: Colors.white,
  },
});
