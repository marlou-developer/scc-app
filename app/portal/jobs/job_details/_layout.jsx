import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { useRouter } from "expo-router";
import { SafeAreaView } from "react-native-safe-area-context";
import HeaderBack from "../../_components/header-back";
import JobDetailsPage from "./page";

const Tab = createBottomTabNavigator();
export default function JobsLayout() {
  const router = useRouter();

  return (
    <SafeAreaView className="flex-1 bg-white">
      <HeaderBack title="Job Details" />
      <JobDetailsPage />
    </SafeAreaView>
  );
}
