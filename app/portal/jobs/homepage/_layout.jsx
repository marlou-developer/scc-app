import { Stack } from "expo-router";

export default function JobsLayout() {
  return (
    <Stack
      screenOptions={{
        headerShown: false,
        animation: "slide_from_right",
        contentStyle: { backgroundColor: "#fff" },
      }}
    >
      {/* In Expo Router, you don't pass 'component={...}'.
        The 'name' must match your filenames in the folder.
      */}
      <Stack.Screen name="page" options={{ title: "Home" }} />
      <Stack.Screen name="job_details" options={{ title: "Details" }} />
    </Stack>
  );
}
