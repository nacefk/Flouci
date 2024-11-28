import { View, Text, StyleSheet, Image } from "react-native";
import React from "react";
import Wallet from "../assets/images/svgs/wallet.svg";
import Input from "@/components/input";

const Transaction = () => {
  return (
    <View style={styles.container}>
      <View style={styles.top}>
        <Image source={require("../assets/images/Avatar.png")} />
        <View>
          <Text>Foulen Fouleni</Text>
          <Text>252532155</Text>
        </View>
        <View style={styles.circle} />
      </View>
      <View style={styles.balance}>
        <Wallet width={16} height={16} />
        <Text>Balance</Text>
        <Text>2000 TND</Text>
      </View>
      <Input placeholder="0.000" keyboardType="numeric" />
      <View>
        <View>
          <Text>Available balance: 2000 TND</Text>
          <Text>Send :azeaze</Text>
        </View>
        <View>
          <Text>Available balance: 2000 TND</Text>
          <Text>Send :azeaze</Text>
        </View>
      </View>
      <Text>transaction</Text>
    </View>
  );
};
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "white",
    alignItems: "center",
    justifyContent: "flex-start",
    padding: 16,
  },
  top: {
    flexDirection: "row",
    alignItems: "center",
  },
  circle: {
    width: 100,
    height: 100,
    borderRadius: 50,
    backgroundColor: "#D9D9D9",
  },
  balance: {
    marginTop: 20,
    flexDirection: "row",
    alignItems: "center",
  },
});
export default Transaction;
