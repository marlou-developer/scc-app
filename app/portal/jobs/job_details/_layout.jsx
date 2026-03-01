import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { SafeAreaView } from "react-native-safe-area-context";
import JobDetailsPage from "./page";

const Tab = createBottomTabNavigator();
export default function JobDetailsLayout({ route }) {
  const { id, category } = route.params;

  return (
    <SafeAreaView className="flex-1 bg-white">
      <JobDetailsPage route={route} />
    </SafeAreaView>
  );
}
