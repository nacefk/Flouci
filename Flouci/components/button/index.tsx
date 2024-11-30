import { View, Text, TouchableOpacity, StyleSheet } from "react-native";
import React, { useState } from "react";

interface ButtonProps {
  condition: boolean;
  buttonText: string;
}

const Button: React.FC<ButtonProps> = ({ condition, buttonText }) => {
  return (
    <TouchableOpacity style={[styles.button, condition && styles.activeButton]}>
      <Text style={[styles.text, condition && styles.activeText]}>
        {buttonText}
      </Text>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  button: {
    height: 58,
    borderRadius: 5,
    backgroundColor: "#f5f5f5",
    justifyContent: "center",
    alignItems: "center",
    paddingHorizontal: 20,
    width: "100%",
  },
  activeButton: {
    backgroundColor: "#eb654a",
  },
  text: {
    color: "#b4b5b6",
    fontSize: 16,
    fontWeight: "600",
    fontFamily: "Ubuntu_Medium",
  },
  activeText: {
    color: "white",
  },
});

export default Button;
