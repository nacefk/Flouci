import React from "react";
import { View, Text, StyleSheet, TouchableOpacity } from "react-native";

interface CheckButtonProps {
  number: number;
  onPress: (value: number) => void;
  isActive?: boolean;
}

const CheckButton: React.FC<CheckButtonProps> = ({
  number,
  onPress,
  isActive,
}) => {
  return (
    <TouchableOpacity
      style={[styles.button, isActive && styles.activeButton]}
      onPress={() => onPress(number)}
    >
      <Text style={[styles.numberText, isActive && styles.activeNumberText]}>
        {number}
      </Text>
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
    backgroundColor: "transparent",
    marginHorizontal: 8,
  },
  numberText: {
    fontSize: 16,
    color: "#000",
  },
  activeButton: {
    borderColor: "#f68e21",
    backgroundColor: "#fef4e9",
  },
  activeNumberText: {
    color: "#f68e21",
  },
});
