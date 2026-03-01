import { Text, TouchableOpacity, View } from "react-native";
// Import FontAwesome5
import Icon from "react-native-vector-icons/FontAwesome5";
export default function HeaderSection() {
  return (
    <View className="flex-row justify-between items-center">
      <View className="flex-row items-center">
        <View className="w-10 h-10 bg-blue-600 rounded-xl items-center justify-center mr-3">
          <Icon name="search" color="white" size={16} />
        </View>
        <Text className="text-xl font-bold text-slate-800">Hello, Adam !</Text>
      </View>
      <TouchableOpacity className="p-2 bg-slate-50 rounded-xl border border-slate-100">
        <Icon name="bell" color="#64748b" size={20} solid />
      </TouchableOpacity>
    </View>
  );
}
