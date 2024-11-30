import React from "react";
import { View, Text, TouchableOpacity, StyleSheet } from "react-native";

const CustomKeyboard = ({ onKeyPress }) => {
  const keys = ["1", "2", "3", "4", "5", "6", "7", "8", "9", "0"];

  return (
    <View style={styles.keyboardContainer}>
      <View style={styles.keysRow}>
        {keys.map((key) => (
          <TouchableOpacity
            key={key}
            style={styles.key}
            onPress={() => onKeyPress(key)}
          >
            <Text style={styles.keyText}>{key}</Text>
          </TouchableOpacity>
        ))}
      </View>
      <View style={styles.actionsRow}>
        <TouchableOpacity
          style={styles.actionKey}
          onPress={() => onKeyPress("delete")}
        >
          <Text style={styles.keyText}>Delete</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.actionKey}
          onPress={() => onKeyPress("submit")}
        >
          <Text style={styles.keyText}>Submit</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  keyboardContainer: {
    padding: 0,
    backgroundColor: "#ccc",
    justifyContent: "flex-end",
    alignItems: "flex-end",
  },
  keysRow: {
    flexDirection: "row",
    flexWrap: "wrap",
    justifyContent: "space-around",
  },
  key: {
    width: 60,
    height: 60,
    margin: 5,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#fff",
    borderRadius: 5,
  },
  keyText: {
    fontSize: 18,
  },
  actionsRow: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginTop: 10,
  },
  actionKey: {
    flex: 1,
    margin: 5,
    padding: 10,
    alignItems: "center",
    backgroundColor: "#888",
    borderRadius: 5,
  },
});

export default CustomKeyboard;
