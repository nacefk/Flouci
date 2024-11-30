import {
  View,
  Text,
  StyleSheet,
  Image,
  Keyboard,
  TouchableWithoutFeedback,
  KeyboardAvoidingView,
  Platform,
  TextInput,
} from "react-native";
import React, { useEffect, useState } from "react";
import Wallet from "../assets/images/svgs/wallet.svg";
import Input from "@/components/input";
import CheckButton from "@/components/checkButton";
import Button from "@/components/button";
import dummyData from "@/constants/dummyData";
import {
  Ubuntu_500Medium,
  Ubuntu_700Bold,
  Ubuntu_400Regular,
} from "@expo-google-fonts/ubuntu";

const Transaction = () => {
  const buttonValues = [10, 20, 50, 100];
  const [keyboardVisible, setKeyboardVisible] = useState(false);
  const [inputValue, setInputValue] = useState(""); // Track the input value
  const [balance, setBalance] = useState(dummyData.balance); // Initialize balance from dummy data
  const [fees, setFees] = useState(0); // State for storing the fees
  const [total, setTotal] = useState(0); // State for storing the total amount (amount + fees)

  const formattedBalance = new Intl.NumberFormat().format(balance); // Format balance

  const formatPhoneNumber = (phone: string) => {
    if (phone.length === 8) {
      const firstPart = phone.slice(0, 2);
      const secondPart = phone.slice(2, 5);
      const thirdPart = phone.slice(5, 8);

      const maskedPhone = `${firstPart} *** *${thirdPart.slice(1, 3)}`;

      return maskedPhone;
    }
    return phone;
  };

  useEffect(() => {
    const keyboardDidShowListener = Keyboard.addListener(
      "keyboardDidShow",
      () => {
        setKeyboardVisible(true);
      }
    );
    const keyboardDidHideListener = Keyboard.addListener(
      "keyboardDidHide",
      () => {
        setKeyboardVisible(false);
      }
    );

    return () => {
      keyboardDidHideListener.remove();
      keyboardDidShowListener.remove();
    };
  }, []);

  const dismissKeyboard = () => {
    Keyboard.dismiss();
  };
  const under20 = parseFloat(inputValue) <= 20 && inputValue !== "";
  const handleInputChange = (value: string) => {
    console.log("Input value:", value);
    setInputValue(value);
    const inputNumber = parseFloat(value);
    console.log("Parsed number:", inputNumber);

    if (!isNaN(inputNumber)) {
      let calculatedFees = 0;

      if (inputNumber <= 20) {
        calculatedFees = 0.005;
      } else {
        calculatedFees = Math.min(0.01 * inputNumber, 3);
        console.log("Calculated fees:", calculatedFees);
      }

      // Ensure fees are stored with three decimal places
      setFees(parseFloat(calculatedFees.toFixed(3)));

      const calculatedTotal = inputNumber + calculatedFees;

      setTotal(parseFloat(calculatedTotal.toFixed(3)));

      setBalance(Math.max(dummyData.balance - calculatedTotal * 1000, 0));
    } else if (value === "") {
      setBalance(dummyData.balance);
      setFees(0);
      setTotal(0);
    }
  };

  return (
    <KeyboardAvoidingView
      behavior={Platform.OS === "ios" ? "padding" : "height"}
      style={styles.container}
    >
      <TouchableWithoutFeedback onPress={dismissKeyboard}>
        <View style={styles.container2}>
          <View style={styles.contact}>
            <Image source={require("../assets/images/Avatar.png")} />
            <View style={styles.info}>
              <Text style={styles.name}>
                {dummyData.firstName + " " + dummyData.lastName}
              </Text>
              <Text style={styles.phoneNumber}>
                {formatPhoneNumber(dummyData.phoneNumber)}
              </Text>
            </View>
            {!keyboardVisible && false && <View style={styles.circle} />}
          </View>
          <View style={styles.balance}>
            <Wallet width={16} height={16} />
            <Text style={styles.balanceText}>Balance:</Text>
            <Text style={styles.balanceValue}>{formattedBalance} DT</Text>
          </View>

          <Input
            placeholder="0.000"
            keyboardType="numeric"
            value={inputValue}
            onChangeText={handleInputChange}
          />

          {under20 && (
            <View
              style={{
                width: "100%",
                backgroundColor: "#d1efe6",
                borderRadius: 5,
                padding: 5,
                marginTop: 20,
              }}
            >
              <Text
                style={{
                  color: "#0eaa7e",
                  fontSize: 12,
                  fontFamily: "Ubuntu_400Regular",
                }}
              >
                Enjoy your first 20 DT of the day with a fee of 5 millimes.
              </Text>
            </View>
          )}

          <View
            style={[
              styles.transactionText,
              { marginBottom: under20 ? 20 : "20%" },
            ]}
          >
            <View style={styles.rowText}>
              <Text style={styles.leftText}>Fees: </Text>
              <Text style={styles.rightText}>{fees.toFixed(3)} DT</Text>
            </View>
            <View style={styles.rowText}>
              <Text
                style={[
                  styles.leftText,
                  { fontFamily: "Ubuntu_700Bold", color: "#000" },
                ]}
              >
                Total:{" "}
              </Text>
              <Text
                style={[
                  styles.rightText,
                  {
                    fontFamily: "Ubuntu_700Bold",
                    color: "#000",
                  },
                ]}
              >
                {total.toFixed(3)} DT
              </Text>
            </View>
          </View>
          {!keyboardVisible && (
            <View style={styles.rowButtons}>
              {buttonValues.map((value) => (
                <CheckButton
                  key={value}
                  number={value}
                  onPress={() => console.log(`${value} pressed`)}
                />
              ))}
            </View>
          )}
          <View
            style={{
              justifyContent: "flex-end",
              width: "100%",
              marginBottom: 30,
            }}
          >
            <Button
              buttonText="Send money"
              condition={
                parseFloat(inputValue) > 0 && !isNaN(parseFloat(inputValue))
              }
            />
          </View>
        </View>
      </TouchableWithoutFeedback>
    </KeyboardAvoidingView>
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
  container2: {
    flex: 1,
    width: "100%",
    alignItems: "center",
    justifyContent: "flex-start",
  },
  contact: {
    flexDirection: "row",
    alignItems: "center",
    marginBottom: 32,
    marginTop: 5,
  },
  circle: {
    width: 100,
    height: 100,
    borderRadius: 50,
    backgroundColor: "#D9D9D9",
  },
  balance: {
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: "#F5F5F5",
    paddingVertical: 6,
    paddingHorizontal: 8,
    borderRadius: 50,
    marginBottom: 8,
  },
  rowText: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginVertical: 5,
    width: "100%",
  },
  rowButtons: {
    flexDirection: "row",
    justifyContent: "center",
    width: "100%",
    flex: 1,
    alignItems: "flex-end",
    marginBottom: 30,
  },
  leftText: {
    fontSize: 16,
    color: "#505253",
    fontWeight: "400",
    fontFamily: "Ubuntu_400Regular",
  },
  rightText: {
    fontSize: 16,
    color: "#505253",
    textAlign: "right",
    fontWeight: "400",
    fontFamily: "Ubuntu_400Regular",
  },
  info: {
    marginHorizontal: 5,
  },
  name: {
    fontSize: 16,
    fontWeight: "bold",
    fontFamily: "Ubuntu_400Regular",
    marginBottom: 5,
  },
  phoneNumber: {
    fontSize: 14,
    fontFamily: "Ubuntu_400Regular",
    color: "#505253",
  },
  balanceText: {
    fontSize: 14,
    fontFamily: "Ubuntu_400Regular",
    color: "#505253",
    marginHorizontal: 5,
  },
  balanceValue: {
    fontSize: 14,
    fontFamily: "Ubuntu_400Regular",
    color: "#000",
  },
  transactionText: {
    width: "100%",
    marginTop: 10,
  },
});

export default Transaction;
