import { useRouter } from "expo-router";
import { View, Text, StyleSheet, Pressable } from "react-native";
import { useFonts, Ubuntu_400Regular } from "@expo-google-fonts/ubuntu";

const App = () => {
  const router = useRouter();
  let [fontsLoaded, fontError] = useFonts({
    Ubuntu_400Regular,
  });
  if (!fontsLoaded || fontError) {
    return null;
  }

  return (
    <View style={styles.container}>
      <Pressable onPress={() => router.push("/transaction")}>
        <Text>azeaze</Text>
      </Pressable>
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
