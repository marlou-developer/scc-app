import { Link, useRouter } from "expo-router";
import {
  SafeAreaView,
  ScrollView,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import Icon from "react-native-vector-icons/FontAwesome5";

const JobDetails = ({ route }) => {
  const router = useRouter();
  const { id, category } = route.params;
  const requirements = [
    "Experienced in Figma or Sketch.",
    "Able to work in large or small team.",
    "At least 1 year of working experience in agency, freelance, or start-up.",
    "Able to keep up with the latest trends.",
    "Have relevant experience for at least 3 years.",
  ];

  return (
    <SafeAreaView className="flex-1 bg-white">
      {/* Custom Header */}

      <ScrollView showsVerticalScrollIndicator={false} className="px-5">
        {/* Company Card */}
        <View className="flex-row items-center mt-6 p-4 bg-slate-50/50 rounded-3xl border border-slate-50">
          <View className="w-16 h-16 bg-red-400 rounded-2xl items-center justify-center">
            <Icon name="airbnb" color="white" size={32} brands />
          </View>
          <View className="ml-4">
            <Text className="text-lg font-bold text-slate-800">
              UI/UX Designer
            </Text>
            <Text className="text-slate-400 font-medium uppercase tracking-widest text-xs">
              {category} {id}
            </Text>
          </View>
        </View>

        {/* Info Grid */}
        <View className="mt-8 space-y-4">
          <InfoRow label="Salary" value="$2.350" valueColor="text-blue-500" />
          <InfoRow label="Type" value="Full Time" valueColor="text-blue-500" />
          <InfoRow
            label="Location"
            value="United States"
            valueColor="text-blue-500"
          />
        </View>

        {/* Requirements Section */}
        <View className="mt-10">
          <Text className="text-lg font-bold text-slate-800 mb-4">
            Requirements
          </Text>
          {requirements.map((item, index) => (
            <View
              key={index}
              className="flex-row items-center bg-slate-50/80 p-4 rounded-2xl mb-3 border border-slate-50"
            >
              <View className="w-6 h-6 items-center justify-center rounded-full border border-blue-400 mr-3">
                <Icon name="check" size={10} color="#3b82f6" />
              </View>
              <Text className="flex-1 text-slate-600 text-sm leading-5">
                {item}
              </Text>
            </View>
          ))}
        </View>
      </ScrollView>

      {/* Bottom Actions */}
      <View className="flex-row items-center px-5 py-6 border-t border-slate-50">
        <TouchableOpacity className="w-14 h-14 bg-slate-50 items-center justify-center rounded-2xl border border-slate-100 mr-4">
          <Icon name="bookmark" size={18} color="#3b82f6" />
        </TouchableOpacity>
        <Link href={`../_page`} asChild>
          <View className="flex-1 h-14 bg-blue-500 items-center justify-center rounded-3xl shadow-lg shadow-blue-300">
            <Text className="text-white font-bold text-lg">Apply Now</Text>
          </View>
        </Link>
      </View>
    </SafeAreaView>
  );
};

// Helper component for the info rows
const InfoRow = ({ label, value, valueColor }) => (
  <View className="flex-row justify-between items-center">
    <Text className="text-slate-400 text-base">{label}</Text>
    <Text className={`text-base font-bold ${valueColor}`}>{value}</Text>
  </View>
);

export default JobDetails;
