import React, { useState } from "react";
import {
  View,
  TextInput,
  StyleSheet,
  TextInputProps,
  ViewStyle,
  TextStyle,
} from "react-native";
import Currency from "../../assets/images/svgs/Currency.svg";
import { StyleProp } from "react-native";

interface InputProps extends TextInputProps {
  placeholder?: string;
  containerStyle?: StyleProp<ViewStyle>;
  inputStyle?: StyleProp<TextStyle>;
  onChangeText?: (text: string) => void;
}

const Input: React.FC<InputProps> = ({
  placeholder,
  containerStyle = {},
  inputStyle = {},
  onChangeText,
  value = "",
  ...props
}) => {
  const [isFocused, setIsFocused] = useState(false);

  const formatNumber = (val: string): string => {
    const numericValue = val.replace(/[^0-9.]/g, "");
    const numberValue = parseFloat(numericValue);
    if (isNaN(numberValue)) return "";
    return numberValue.toFixed(3);
  };

  const handleBlur = () => {
    const formattedValue = formatNumber(value);

    if (onChangeText) {
      onChangeText(formattedValue);
    }

    setIsFocused(false);
  };

  const handleFocus = () => {
    setIsFocused(true);
  };

  return (
    <View
      style={[
        styles.container,
        isFocused && styles.focusedContainer,
        containerStyle,
      ]}
    >
      <Currency width={22} height={24} color={"#B4B5B6"} />
      <TextInput
        {...props}
        style={[styles.input, inputStyle, { textAlign: "right" }]}
        placeholder={placeholder}
        placeholderTextColor="#A9A9A9"
        value={value}
        onChangeText={onChangeText}
        onFocus={handleFocus}
        onBlur={handleBlur}
        keyboardType="numeric"
      />
    </View>
  );
};

export default Input;

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    alignItems: "center",
    borderWidth: 2,
    borderColor: "#e6e6e6",
    borderRadius: 8,
    paddingHorizontal: 10,
    height: 70,
    width: "100%",
  },
  focusedContainer: {
    borderColor: "#f68e21",
  },
  input: {
    flex: 1,
    fontSize: 25,
  },
});
