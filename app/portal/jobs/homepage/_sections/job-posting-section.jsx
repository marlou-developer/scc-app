import { useNavigation } from "@react-navigation/native";
import { ScrollView, Text, TouchableOpacity, View } from "react-native";

import Icon from "react-native-vector-icons/FontAwesome5";
export default function JobPostingSection() {
  const navigation = useNavigation();
  const categories = ["All Job", "Writer", "Design", "Finance", "Product"];

  const JobCard = ({ title, company, location, salary, icon, iconColor }) => (
    <TouchableOpacity
      onPress={() =>
        navigation.navigate("JobHomeDetails", {
          id: 1,
          category: "Engineering", // You can pass multiple values!
        })
      }
      className="bg-white p-4 rounded-3xl mb-4 border border-slate-100 shadow-sm flex-row items-center"
    >
      <View className="w-14 h-14 bg-slate-50 rounded-2xl mr-4 items-center justify-center">
        <Icon name={icon} color={iconColor} size={28} brands />
      </View>
      <View className="flex-1">
        <Text className="text-base font-bold text-slate-800">{title}</Text>
        <Text className="text-slate-400 text-xs mt-1">{company}</Text>
        <Text className="text-slate-400 text-[10px]">{location}</Text>
      </View>
      <View className="items-end justify-between h-14">
        <Icon name="bookmark" color="#3b82f6" size={16} />
        <Text className="text-blue-600 font-bold text-base">${salary}</Text>
      </View>
    </TouchableOpacity>
  );
  return (
    <View className="mt-8">
      <View className="flex-row justify-between items-center mb-4">
        <Text className="text-lg font-bold text-slate-800">Job Posting</Text>
        <TouchableOpacity>
          <Text className="text-blue-500 font-medium">See all</Text>
        </TouchableOpacity>
      </View>

      <ScrollView
        horizontal
        showsHorizontalScrollIndicator={false}
        className="flex-row mb-6"
      >
        {categories.map((cat, index) => (
          <TouchableOpacity
            key={index}
            className={`mr-3 px-6 py-2 rounded-full border ${index === 0 ? "bg-blue-600 border-blue-600" : "bg-white border-slate-200"}`}
          >
            <Text
              className={`font-semibold ${index === 0 ? "text-white" : "text-slate-400"}`}
            >
              {cat}
            </Text>
          </TouchableOpacity>
        ))}
      </ScrollView>

      <JobCard
        title="UI/UX Designer"
        company="Airbnb"
        location="United States • Full Time"
        salary="2.350"
        icon="airbnb"
        iconColor="#FF5A5F"
      />
      <JobCard
        title="Financial Planner"
        company="Twitter"
        location="United Kingdom • Part Time"
        salary="2.200"
        icon="twitter"
        iconColor="#1DA1F2"
      />
    </View>
  );
}
