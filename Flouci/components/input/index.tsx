import React, { useState } from "react";
import {
  View,
  TextInput,
  StyleSheet,
  TextInputProps,
  ViewStyle,
  TextStyle,
  Keyboard,
  TouchableWithoutFeedback,
  KeyboardAvoidingView,
  Platform,
} from "react-native";
import Currency from "../../assets/images/svgs/Currency.svg";
import { StyleProp } from "react-native";

interface InputProps extends TextInputProps {
  placeholder?: string;
  containerStyle?: StyleProp<ViewStyle>;
  inputStyle?: StyleProp<TextStyle>;
}

const Input: React.FC<InputProps> = ({
  placeholder,
  containerStyle,
  inputStyle,
  ...props
}) => {
  const [isFocused, setIsFocused] = useState(false);

  return (
    <KeyboardAvoidingView
      style={styles.flex}
      behavior={Platform.OS === "ios" ? "padding" : undefined}
    >
      <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
        <View
          style={[
            styles.container,
            isFocused && styles.focusedContainer,
            containerStyle, // Apply container-specific styles
          ]}
        >
          <Currency width={22} height={24} />
          <TextInput
            style={[styles.input, { textAlign: "right" }, inputStyle]} // Align text to the right
            placeholder={placeholder}
            placeholderTextColor="#A9A9A9"
            onFocus={() => setIsFocused(true)}
            onBlur={() => setIsFocused(false)}
            keyboardType="numeric"
            {...props}
          />
        </View>
      </TouchableWithoutFeedback>
    </KeyboardAvoidingView>
  );
};

export default Input;

const styles = StyleSheet.create({
  flex: {
    // flex: 1,
  },
  container: {
    flexDirection: "row",
    alignItems: "center",
    borderWidth: 1,
    borderColor: "#e6e6e6",
    borderRadius: 8,
    paddingHorizontal: 10,
    marginVertical: 10,
    height: 70,
    width: "100%",
  },
  focusedContainer: {
    borderColor: "red",
  },
  input: {
    flex: 1,
    fontSize: 25,
  },
});
