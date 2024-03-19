import { useNavigation } from "@react-navigation/native";
import React, { useLayoutEffect } from "react";
import { useForm } from "react-hook-form";
import { StyleSheet, Text, TouchableOpacity, View } from "react-native";
import { Button } from "../../utils/button";
import { Colors, fonts } from "../../utils/constants";
import { CustomInput } from "../../utils/customInput";
export const LoginScreen = () => {
  //   const fontsLoaded = loadCustomFonts();

  const {
    control,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const navigation = useNavigation();

  const onSignInPress = (data) => {
    console.log("clicked", data);
  };

  const onSignupPress = () => {
    navigation.navigate("CreateAccount");
  };
  const onForgotPasswordPress = () => {
    navigation.navigate("ForgotPassword");
  };

  useLayoutEffect(() => {
    navigation.setOptions({
      //  title: "Favorites",
      headerTitle: () => <CustomHeaderTitle />,
    });
  }, []);

  const CustomHeaderTitle = () => {
    return (
      <>
        <Text
          style={{
            color: Colors.primary100,
            fontFamily: fonts.notoSansJavaneseBold.fontFamily,
          }}
        >
          WELCOME{" "}
        </Text>

        <Text
          style={{
            color: Colors.white,
            fontFamily: fonts.notoSansJavaneseBold.fontFamily,
          }}
        >
          BACK
        </Text>
      </>
    );
  };

  return (
    <View style={styles.rootContainer}>
      <View style={{ justifyContent: "center", alignItems: "center" }}>
        <Text
          style={{
            color: "gray",
            fontFamily: fonts.notoSansJavaneseRegular.fontFamily,
          }}
        >
          Please enter your login details
        </Text>
      </View>

      <View style={{ marginTop: 31, marginHorizontal: 24 }}>
        <Text
          style={{
            color: "#FFFFFF",
            marginBottom: 5,
            fontFamily: fonts.notoSansJavaneseBold.fontFamily,
          }}
        >
          Phone number/email
        </Text>
        <CustomInput
          name="Phone number or email"
          control={control}
          rules={{ required: "phone number or email is required " }}
          placeholder={"Phone number or email"}
          placeholderTextColor={Colors.gray}
          borderColor="gray"
        />

        <View style={{ marginTop: 38 }}>
          <Text
            style={{
              color: "#FFFFFF",
              marginBottom: 5,
              fontFamily: fonts.notoSansJavaneseBold.fontFamily,
            }}
          >
            Password
          </Text>
          <CustomInput
            name="password"
            placeholder={"Password"}
            placeholderTextColor={Colors.gray}
            control={control}
            rules={{
              required: "password is required",
              //   minLength: {
              //     value: 3,
              //     message: "password should me minimum of 3 characters long",
              //   },
            }}
            secureTextEntry
            borderColor="gray"
            iconName={"eye"}
            color={Colors.white}
          />
        </View>
        <TouchableOpacity onPress={onForgotPasswordPress}>
          <Text
            style={{
              color: Colors.primary100,
              marginTop: 12,
              fontFamily: fonts.notoSansJavaneseBold.fontFamily,
            }}
          >
            Forgot Password?
          </Text>
        </TouchableOpacity>
        <Button
          backgroundColor={Colors.white}
          onPress={handleSubmit(onSignInPress)}
        >
          LOGIN
        </Button>

        <View style={styles.signupContainer}>
          <Text
            style={{
              color: Colors.white,
              fontFamily: fonts.notoSansJavaneseRegular.fontFamily,
            }}
          >
            Don't have an account?
          </Text>
          <TouchableOpacity onPress={onSignupPress}>
            <Text
              style={{
                color: Colors.primary100,
                fontFamily: fonts.notoSansJavaneseBold.fontFamily,
              }}
            >
              SIGN UP
            </Text>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  rootContainer: {
    flex: 1,
    backgroundColor: Colors.background,
  },
  signupContainer: {
    padding: 16,
    borderTopWidth: 1,
    marginTop: 20,
    borderColor: Colors.primary100,
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    gap: 4,
  },
  signup: {},
});
