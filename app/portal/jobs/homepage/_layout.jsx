import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { useRouter } from "expo-router";
import { SafeAreaView } from "react-native-safe-area-context";
import JobPostingBottomNavbar from "../_sections/Job-posting-bottom-navbar";
import JobPage from "./page";

const Tab = createBottomTabNavigator();
export default function JobsLayout() {
  const router = useRouter();

  return (
    <SafeAreaView className="flex-1 bg-white">
      <JobPage />
      <JobPostingBottomNavbar />
    </SafeAreaView>
  );
}
