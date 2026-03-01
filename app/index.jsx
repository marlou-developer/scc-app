import {
  NavigationContainer,
  NavigationIndependentTree,
} from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import AuthLoginPage from "./auth/login/page.jsx";
import "./css/global.css";
import HomePage from "./portal/_layout.jsx";
import HomeJobLayout from "./portal/jobs/homepage/_layout.jsx";
import JobDetailsLayout from "./portal/jobs/job_details/_layout.jsx";
const Stack = createNativeStackNavigator();
export default function Index() {
  return (
    <NavigationIndependentTree>
      <NavigationContainer>
        <Stack.Navigator initialRouteName="AuthLoginPage">
          <Stack.Screen
            name="AuthLoginPage"
            component={AuthLoginPage}
            options={{ headerShown: false }}
          />
          <Stack.Screen
            name="HomePage"
            component={HomePage}
            options={{ headerShown: false }}
          />
          <Stack.Screen name="JobHomePage" component={HomeJobLayout} />
          <Stack.Screen name="JobHomeDetails" component={JobDetailsLayout} />
        </Stack.Navigator>
      </NavigationContainer>
    </NavigationIndependentTree>
  );
}
