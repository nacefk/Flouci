import { Slot, Stack } from "expo-router";

export default function RootLayout({}) {
  return (
    <Stack
      screenOptions={{
        headerStyle: {
          backgroundColor: "#fff",
        },
        headerTintColor: "#000",
        headerTitleStyle: {
          fontWeight: "500",
        },
        // headerTitle: "Send money",
        // headerBackTitle: "",
        headerBackButtonDisplayMode: "minimal",
      }}
    >
      <Stack.Screen
        name="transaction"
        options={{
          headerTitle: "Send money",
        }}
      />
      <Stack.Screen
        name="index"
        options={{
          headerTitle: "aaa",
        }}
      />
    </Stack>
  );
}
