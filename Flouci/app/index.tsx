import { useRouter } from "expo-router";
import { View, Text, StyleSheet, Pressable } from "react-native";

const App = () => {
  const router = useRouter();
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
