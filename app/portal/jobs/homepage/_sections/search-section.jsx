import { TextInput, TouchableOpacity, View } from "react-native";
// Import FontAwesome5
import Icon from "react-native-vector-icons/FontAwesome5";

export default function SearchSection() {
  return (
    <View className="flex-row mt-6 space-x-3">
      <View className="flex-1 flex-row items-center bg-slate-50 border border-slate-100 rounded-2xl px-4 h-12">
        <Icon name="search" color="#94a3b8" size={16} />
        <TextInput
          placeholder="Search"
          className="flex-1 ml-3 text-slate-600"
          placeholderTextColor="#94a3b8"
        />
      </View>
      <TouchableOpacity className="w-12 h-12 bg-blue-50 items-center justify-center rounded-2xl border border-blue-100">
        <Icon name="sliders-h" color="#3b82f6" size={18} />
      </TouchableOpacity>
    </View>
  );
}
