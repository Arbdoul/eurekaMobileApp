import { useNavigation } from "@react-navigation/native";
import React, { useLayoutEffect } from "react";
import { useForm } from "react-hook-form";
import {
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import { Button } from "../../utils/button";
import { Colors, fonts } from "../../utils/constants";
import { CustomInput } from "../../utils/customInput";

export const CreateAccount = () => {
  const navigation = useNavigation();
  const {
    control,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSigninPress = () => {
    navigation.navigate("Login");
  };

  const onSignupPress = (data) => {
    console.log("clicked: ", data);
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
            color: Colors.white,
            fontFamily: fonts.notoSansJavaneseBold.fontFamily,
          }}
        >
          CREATE AN{" "}
        </Text>

        <Text
          style={{
            color: Colors.primary100,
            fontFamily: fonts.notoSansJavaneseBold.fontFamily,
          }}
        >
          ACCOUNT
        </Text>
      </>
    );
  };

  return (
    <ScrollView style={styles.rootContainer}>
      <View style={{ justifyContent: "center", alignItems: "center" }}>
        <Text
          style={{
            color: Colors.white,
            fontFamily: fonts.notoSansJavaneseRegular.fontFamily,
          }}
        >
          Please enter your correct details
        </Text>
      </View>

      <View style={{ marginHorizontal: 24 }}>
        <Text
          style={{
            color: Colors.white,
            marginBottom: 5,
            fontFamily: fonts.notoSansJavaneseBold.fontFamily,
            marginTop: 20,
          }}
        >
          Email
        </Text>
        <CustomInput
          name="Phone number or email"
          borderColor={Colors.gray}
          control={control}
          placeholder={"Email"}
          placeholderTextColor={Colors.gray}
          rules={{ required: "email is required " }}
        />
        <View>
          <Text
            style={{
              color: Colors.white,
              marginBottom: 5,
              fontFamily: fonts.notoSansJavaneseBold.fontFamily,
              marginTop: 20,
            }}
          >
            Phone number
          </Text>
          <CustomInput
            borderColor={Colors.gray}
            name="Phone number"
            control={control}
            placeholder={"Phone number"}
            placeholderTextColor={Colors.gray}
            rules={{ required: "phone number is required " }}
          />
        </View>

        <View>
          <Text
            style={{
              color: Colors.white,
              marginBottom: 5,
              fontFamily: fonts.notoSansJavaneseBold.fontFamily,
              marginTop: 20,
            }}
          >
            Password
          </Text>
          <CustomInput
            name="Password"
            borderColor={Colors.gray}
            control={control}
            placeholder={"Password"}
            placeholderTextColor={Colors.gray}
            rules={{ required: "Password is required " }}
          />
        </View>

        <View>
          <Text
            style={{
              color: Colors.white,
              marginBottom: 5,
              fontFamily: fonts.notoSansJavaneseBold.fontFamily,
              marginTop: 20,
            }}
          >
            Confirm Password
          </Text>
          <CustomInput
            name="Confirm Password"
            borderColor={Colors.gray}
            control={control}
            placeholder={"Confirm Password"}
            placeholderTextColor={Colors.gray}
            rules={{ required: "Confirm Password is required " }}
          />
        </View>

        <Button
          backgroundColor={Colors.white}
          onPress={handleSubmit(onSignupPress)}
        >
          SIGN UP
        </Button>

        <Text
          style={{
            color: Colors.gray,
            marginTop: 20,
            fontFamily: fonts.notoSansJavaneseRegular.fontFamily,
          }}
        >
          By signing up you agree with our{" "}
          <Text
            style={{
              color: Colors.primary100,
              fontFamily: fonts.notoSansJavaneseRegular.fontFamily,
            }}
          >
            Terms
          </Text>{" "}
          and{" "}
          <Text
            style={{
              color: Colors.primary100,
              fontFamily: fonts.notoSansJavaneseRegular.fontFamily,
            }}
          >
            Policy
          </Text>
        </Text>

        <View
          style={{
            flexDirection: "row",
            gap: 4,
            borderTopWidth: 1,
            borderColor: Colors.primary100,
            justifyContent: "center",
            alignItems: "center",
            marginTop: 20,
            marginBottom: 20,
          }}
        >
          <Text
            style={{
              color: Colors.white,
              marginTop: 20,
              fontFamily: fonts.notoSansJavaneseRegular.fontFamily,
            }}
          >
            Already have an account?
          </Text>
          <TouchableOpacity onPress={onSigninPress}>
            <Text
              style={{
                color: Colors.primary100,
                marginTop: 20,
                fontFamily: fonts.notoSansJavaneseBold.fontFamily,
              }}
            >
              LOGIN
            </Text>
          </TouchableOpacity>
        </View>
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  rootContainer: {
    flex: 1,
    backgroundColor: Colors.background,
  },
});
