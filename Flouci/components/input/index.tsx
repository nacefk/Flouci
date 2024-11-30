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
  onChangeText?: (text: string) => void; // Parent handler for value changes
}

const Input: React.FC<InputProps> = ({
  placeholder,
  containerStyle = {},
  inputStyle = {},
  onChangeText,
  ...props
}) => {
  const [value, setValue] = useState<string>(""); // Input's value state
  const [isFocused, setIsFocused] = useState(false);

  const formatNumber = (val: string): string => {
    const numericValue = val.replace(/[^0-9.]/g, ""); // Keep only numbers and decimal
    const numberValue = parseFloat(numericValue);
    if (isNaN(numberValue)) return ""; // Handle invalid input
    return numberValue.toFixed(3); // Format to 3 decimal places
  };

  const handleChangeText = (text: string) => {
    setValue(text);

    // Pass raw input to parent during typing
    if (onChangeText) {
      onChangeText(text);
    }
  };

  const handleBlur = () => {
    // Format the value when losing focus
    const formattedValue = formatNumber(value);
    setValue(formattedValue);

    // Pass formatted value to parent
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
      <Currency width={22} height={24} />
      <TextInput
        {...props}
        style={[styles.input, inputStyle, { textAlign: "right" }]}
        placeholder={placeholder}
        placeholderTextColor="#A9A9A9"
        value={value}
        onChangeText={handleChangeText}
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
