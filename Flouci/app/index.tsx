import React from "react";
import { useRouter } from "expo-router";
import { View, Text, StyleSheet, Pressable } from "react-native";
import Toast, { ToastConfigParams } from "react-native-toast-message";
import { useFonts, Ubuntu_400Regular } from "@expo-google-fonts/ubuntu";
import Error from "../assets/images/svgs/error.svg";
import AntDesign from "react-native-vector-icons/AntDesign";

const App = () => {
  const router = useRouter();
  let [fontsLoaded, fontError] = useFonts({
    Ubuntu_400Regular,
  });

  if (!fontsLoaded || fontError) {
    return null;
  }

  const toastConfig = {
    error: ({ text1 }: ToastConfigParams<any>) => (
      <View
        style={{
          height: 60,
          width: "90%",
          backgroundColor: "red",
          justifyContent: "center",
          alignItems: "center",
          borderRadius: 8,
          shadowColor: "#000",
          shadowOpacity: 0.2,
          shadowRadius: 5,
          marginBottom: 10,
        }}
      >
        <Error height={30} width={30} />
        <Text style={{ color: "white" }}>{text1}</Text>
      </View>
    ),
  };

  return (
    <View style={styles.container}>
      <Pressable
        onPress={() => {
          router.push("/transaction");
        }}
      >
        <Text style={{ fontSize: 18, fontFamily: "Ubuntu_400Regular" }}>
          Go to test screen
        </Text>
      </Pressable>

      <Toast config={toastConfig} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "white",
    alignItems: "center",
    justifyContent: "center",
  },
});

export default App;
