import { useLocalSearchParams } from "expo-router";
import React from "react";
import { View, Text, StyleSheet, Image } from "react-native";
import Currency from "../assets/images/svgs/Currency.svg";

const CompletedTransaction: React.FC = () => {
  const { name, lastName, amount, fee, total } = useLocalSearchParams() as {
    name: string;
    lastName: string;
    amount: string;
    fee: string;
    total: string;
  };

  if (!name || !lastName || !amount || !fee || !total) {
    return (
      <View style={styles.container}>
        <Text style={styles.text}>Transaction details are incomplete.</Text>
      </View>
    );
  }

  return (
    <View style={styles.container}>
      <Image source={require("../assets/images/Success.png")} />
      <Text style={styles.title}>Transaction Completed!</Text>
      <View style={styles.box}>
        <View style={styles.boxHeader}>
          <Image source={require("../assets/images/Avatar.png")} />
          <View style={styles.amount}>
            <Text>-</Text>
            <Currency width={10} height={10} color={"#000"} />
            <Text style={styles.text}>{total}</Text>
          </View>
          <Text style={styles.MonetText}>Money sent</Text>
        </View>
        <View style={styles.devider} />
        <View style={styles.rowText}>
          <Text style={styles.text}>Receiver</Text>
          <Text style={styles.rightText}>
            {name} {lastName}
          </Text>
        </View>
        <View style={styles.rowText}>
          <Text style={styles.text}>Amount</Text>
          <View style={styles.amount2}>
            <Text>-</Text>
            <Currency width={10} height={10} color={"#000"} />
            <Text style={styles.rightText}>{amount}</Text>
          </View>
        </View>
        <View style={styles.rowText}>
          <Text style={styles.text}>Fee</Text>
          <View style={styles.amount2}>
            <Text>-</Text>
            <Currency width={10} height={10} color={"#000"} />
            <Text style={styles.rightText}>{fee}</Text>
          </View>
        </View>
        <View style={styles.rowText}>
          <Text style={styles.text}>Total</Text>
          <View style={styles.amount2}>
            <Text>-</Text>
            <Currency width={10} height={10} color={"#000"} />
            <Text style={styles.rightText}>{total}</Text>
          </View>
        </View>
        <View style={styles.devider} />

        <View style={[styles.rowText, { marginBottom: 0 }]}>
          <Text style={styles.text}>Transaction ID</Text>
          <Text style={styles.rightText}>36145614565143</Text>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    padding: 16,
    backgroundColor: "#fff",
  },
  title: {
    fontSize: 24,
    marginBottom: 20,
  },
  text: {
    fontSize: 14,
    color: "#7A7A7A",
  },
  rightText: {
    fontSize: 14,
    color: "#000",
  },
  box: {
    borderWidth: 1,
    borderColor: "#e6e6e6",
    padding: 16,
    borderRadius: 8,
    marginTop: 20,
    width: "100%",
  },
  amount: {
    flexDirection: "row",
    alignItems: "center",
    marginBottom: 10,
    width: "100%",
    justifyContent: "center",
  },
  amount2: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "flex-end",
  },
  boxHeader: {
    alignItems: "center",
    marginBottom: 20,
  },
  MonetText: {
    fontSize: 16,
  },
  devider: {
    borderBottomWidth: 1,
    borderBottomColor: "#e6e6e6",
    marginBottom: 10,
  },
  rowText: {
    flexDirection: "row",
    alignItems: "center",
    marginBottom: 10,
    justifyContent: "space-between",
  },
});

export default CompletedTransaction;
