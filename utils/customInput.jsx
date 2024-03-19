import { AntDesign } from "@expo/vector-icons";
import React from "react";
import { Controller } from "react-hook-form";
import { StyleSheet, Text, TextInput, View } from "react-native";
import { Colors } from "./constants";

export const CustomInput = ({
  control,
  name,
  placeholder,
  borderColor,
  secureTextEntry,
  placeholderTextColor,
  rules = {},
  icon,
  iconName,
  color,
}) => {
  return (
    <View>
      <Controller
        control={control}
        name={name}
        rules={rules}
        render={({
          field: { value, onChange, onBlur },
          fieldState: { error },
        }) => (
          <>
            <View
              style={[
                styles.input,
                {
                  borderColor: error ? "red" : "black",
                  borderColor: borderColor,
                },
              ]}
            >
              <View
                style={{
                  flexDirection: "row",
                  justifyContent: "space-between",
                }}
              >
                <TextInput
                  value={value}
                  onChangeText={onChange}
                  onBlur={onBlur}
                  placeholder={placeholder}
                  placeholderTextColor={placeholderTextColor}
                  secureTextEntry={secureTextEntry}
                  theme={{ roundness: 16 }}
                  icon={icon}
                  style={{ color: Colors.white }}
                />
                <AntDesign name={iconName} size={24} color={color} />
              </View>
            </View>
            {error && (
              <Text style={{ color: "red" }}>{error.message || "error"} </Text>
            )}
          </>
        )}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  input: {
    padding: 16,
    borderRadius: 10,
    borderWidth: 2,
    // borderColor: "black",
  },
});
