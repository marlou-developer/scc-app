import { useRouter } from "expo-router";
import { Text, TouchableOpacity, View } from "react-native";
import Icon from "react-native-vector-icons/FontAwesome5";

export default function HeaderBack({ title = "" }) {
  const router = useRouter();
  return (
    <View className="flex-row justify-between items-center px-5 py-4 ">
      <TouchableOpacity
        onPress={() => router.back()}
        className="w-10 h-10 bg-slate-50 items-center justify-center rounded-xl border border-slate-100"
      >
        <Icon name="chevron-left" size={16} color="#3b82f6" />
      </TouchableOpacity>
      <Text className="text-xl font-bold text-slate-800">{title}</Text>
    </View>
  );
}
