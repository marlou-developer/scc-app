import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import BottomNavbar from "./_components/bottom-navbar";
import HomePage from "./homepage/page";
import NewsPage from "./news/page";
import ProfilePage from "./profile/page";

const Tab = createBottomTabNavigator();

export default function App() {
  return (
    <SafeAreaView className="flex-1 bg-white">
      <Tab.Navigator
        tabBar={(props) => <BottomNavbar {...props} />}
        screenOptions={{ headerShown: false, tabBarActiveTintColor: "#1e40af" }}
      >
        <Tab.Screen
          name="Home"
          component={HomePage}
          options={{ tabBarIconName: "home" }}
        />
        <Tab.Screen
          name="Search"
          component={NewsPage}
          options={{ tabBarIconName: "search" }}
        />
        <Tab.Screen
          name="Chat"
          component={ProfilePage}
          options={{ tabBarIconName: "comment-o" }}
        />
        <Tab.Screen
          name="Feed"
          component={Screen}
          options={{ tabBarIconName: "newspaper-o" }}
        />
        <Tab.Screen
          name="Personal"
          component={Screen}
          options={{ tabBarIconName: "user-o" }}
        />
      </Tab.Navigator>
    </SafeAreaView>
  );
}

function Screen() {
  return <View />;
}
