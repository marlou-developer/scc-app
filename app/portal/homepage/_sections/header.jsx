import { Image, Text, View } from "react-native";

export default function HeaderSection() {
  return (
    <View className="flex flex-row items-center justify-between mt-8">
      <View className="flex flex-row items-start gap-2">
        <Image
          source={{ uri: "https://picsum.photos/400/400" }}
          className="w-16 h-16 rounded-full"
        />
        <View className="flex flex-col gap-2 items-center justify-center">
          <Text className="text-xl font-semibold text-blue-800">Hi! Marlou</Text>
          <Text className="text-sm text-gray-500">Welcome back!</Text>
        </View>
      </View>
      <View>
        <Image
          source={require("../../../../assets/images/logo.png")}
          className="w-24 h-24"
          resizeMode="contain"
        />
      </View>
    </View>
  );
}
