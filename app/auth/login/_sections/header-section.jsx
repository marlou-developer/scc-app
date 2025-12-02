import { Text, View } from "react-native";

export default function HeaderSection() {
  return (
    <View className="mb-8">
      <Text className="text-3xl font-bold text-slate-800">Welcome back</Text>
      <Text className="text-slate-500 mt-2">Sign in to your account</Text>
    </View>
  );
}
