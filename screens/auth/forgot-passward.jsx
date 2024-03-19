import { useNavigation } from "@react-navigation/native";
import React, { useLayoutEffect } from "react";
import { useForm } from "react-hook-form";
import { StyleSheet, Text, View } from "react-native";
import { Button } from "../../utils/button";
import { Colors, fonts } from "../../utils/constants";
import { CustomInput } from "../../utils/customInput";

export const ForgotPassward = () => {
  const {
    control,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const navigation = useNavigation();
  const onContinuePress = () => {
    navigation.navigate("EmailVerification");
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
          FORGOT{" "}
        </Text>

        <Text
          style={{
            color: Colors.white,
            fontFamily: fonts.notoSansJavaneseBold.fontFamily,
          }}
        >
          PASSWORD?
        </Text>
      </>
    );
  };

  return (
    <View style={styles.rootContainer}>
      <View
        style={{ justifyContent: "center", alignItems: "center", marginTop: 5 }}
      >
        <Text
          style={{
            color: Colors.gray,
            fontFamily: fonts.notoSansJavaneseRegular.fontFamily,
          }}
        >
          Enter your email or your
        </Text>
        <Text
          style={{
            color: Colors.gray,
            fontFamily: fonts.notoSansJavaneseRegular.fontFamily,
          }}
        >
          {" "}
          phone number
        </Text>
      </View>

      <View style={{ marginHorizontal: 24, marginTop: 28 }}>
        <Text
          style={{
            color: Colors.white,
            marginBottom: 5,
            fontFamily: fonts.notoSansJavaneseBold.fontFamily,
          }}
        >
          Email/Phone Number
        </Text>
        <CustomInput
          name="Phone number or email"
          placeholder="Email or Phone number"
          placeholderTextColor={Colors.gray}
          borderColor={Colors.gray}
          control={control}
          rules={{ required: "email is required " }}
        />

        <Button backgroundColor={Colors.white} onPress={onContinuePress}>
          Continue
        </Button>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  rootContainer: {
    flex: 1,
    backgroundColor: Colors.background,
  },
});
