import { Text, TouchableOpacity, View } from "react-native";
// Import FontAwesome5
import Icon from "react-native-vector-icons/FontAwesome5";

export default function JobPostingBottomNavbar() {
  return (
    <View className="flex-row justify-around items-center py-4 bg-white border-t border-slate-50 mb-2">
      <TouchableOpacity className="bg-blue-50 flex-row items-center px-5 py-2 rounded-xl">
        <Icon name="home" color="#3b82f6" size={18} />
        <Text className="ml-2 text-blue-600 font-bold">Home</Text>
      </TouchableOpacity>
      <TouchableOpacity>
        <Icon name="list-ul" color="#cbd5e1" size={20} />
      </TouchableOpacity>
      <TouchableOpacity>
        <Icon name="comment-dots" color="#cbd5e1" size={20} solid />
      </TouchableOpacity>
      <TouchableOpacity>
        <Icon name="user" color="#cbd5e1" size={20} />
      </TouchableOpacity>
    </View>
  );
}
