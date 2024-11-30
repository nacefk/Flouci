import React from "react";
import { View, Text, StyleSheet, TouchableOpacity } from "react-native";

interface CheckButtonProps {
  number: number;
  onPress?: () => void;
}

const CheckButton: React.FC<CheckButtonProps> = ({ number, onPress }) => {
  return (
    <TouchableOpacity style={styles.button} onPress={onPress}>
      <Text style={styles.numberText}>{number}</Text>
    </TouchableOpacity>
  );
};

export default CheckButton;

const styles = StyleSheet.create({
  button: {
    borderWidth: 1,
    borderColor: "#e6e6e6",
    paddingHorizontal: 15,
    borderRadius: 20,
    alignItems: "center",
    justifyContent: "center",
    height: 40,
    minWidth: 51,
    backgroundColor: "#transparent",
    marginHorizontal: 8,
  },
  numberText: {
    fontSize: 16,
    fontWeight: "500",
    color: "#000",
  },
});
