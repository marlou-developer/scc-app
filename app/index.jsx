import {
  NavigationContainer,
  NavigationIndependentTree,
} from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import AuthLoginPage from "./auth/login/page.jsx";
import "./css/global.css";
import HomePage from "./portal/_layout.jsx";
import JobHomePage from "./portal/jobs/homepage/page.jsx";
import JobHomeDetails from "./portal/jobs/job_details/page.jsx";
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
          <Stack.Screen name="JobHomePage" component={JobHomePage} />
          <Stack.Screen name="JobHomeDetails" component={JobHomeDetails} />
        </Stack.Navigator>
      </NavigationContainer>
    </NavigationIndependentTree>
  );
}
