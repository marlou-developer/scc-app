import { FontAwesome, Ionicons } from "@expo/vector-icons";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { useEffect, useRef } from "react";
import {
  Animated,
  Dimensions,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import Svg, { Path } from "react-native-svg";
import HomePage from "./homepage/page";
import NewsPage from "./news/page";
import ProfilePage from "./profile/page";

const { width } = Dimensions.get("window");
const Tab = createBottomTabNavigator();

const TAB_WIDTH = width / 5;

const CustomTabBar = ({ state, descriptors, navigation }) => {
  const translateX = useRef(new Animated.Value(0)).current;

  useEffect(() => {
    Animated.spring(translateX, {
      toValue: state.index * TAB_WIDTH,
      useNativeDriver: true,
      friction: 10,
      tension: 50,
    }).start();
  }, [state.index]);

  return (
    <View style={styles.tabBarContainer}>
      {/* 1. Sliding Background Shape */}
      <Animated.View
        style={[styles.svgWrapper, { transform: [{ translateX }] }]}
      >
        <Svg
          width={width * 2.5}
          height={100}
          viewBox={`0 0 ${width * 2.5} 100`}
        >
          <Path
            fill="white"
            d={`
    M 0 40 
    L ${width - TAB_WIDTH * 0.15} 40 
    C ${width + TAB_WIDTH * 0.05} 40, ${width + TAB_WIDTH * 0.1} 85, ${width + TAB_WIDTH * 0.5} 85 
    C ${width + TAB_WIDTH * 0.9} 85, ${width + TAB_WIDTH * 0.95} 40, ${width + TAB_WIDTH * 1.15} 40 
    L ${width * 2.5} 40 
    L ${width * 2.5} 100 
    L 0 100 
    Z
  `}
          />
        </Svg>
      </Animated.View>

      {/* 2. Interactive Icons Layer */}
      <View style={styles.contentContainer}>
        {state.routes.map((route, index) => {
          const isFocused = state.index === index;
          const { options } = descriptors[route.key];
          const iconName = options.tabBarIconName;

          return (
            <TouchableOpacity
              key={route.key}
              onPress={() => navigation.navigate(route.name)}
              style={styles.tabItem}
              activeOpacity={1}
            >
              <View
                style={
                  isFocused ? styles.activeCircle : styles.inactiveIconContainer
                }
              >
                {route.name === "Chat" ? (
                  <Ionicons
                    name="chatbubble-outline"
                    size={26}
                    color={isFocused ? "black" : "#888"}
                  />
                ) : (
                  <FontAwesome
                    name={iconName}
                    size={isFocused ? 24 : 22}
                    color={isFocused ? "black" : "#888"}
                  />
                )}
              </View>

              <Text style={[styles.label, isFocused && styles.labelActive]}>
                {route.name}
              </Text>
            </TouchableOpacity>
          );
        })}
      </View>
    </View>
  );
};

export default function App() {
  return (
    <View style={{ flex: 1, backgroundColor: "#4285F4" }}>
      <Tab.Navigator
        tabBar={(props) => <CustomTabBar {...props} />}
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
    </View>
  );
}

const styles = StyleSheet.create({
  tabBarContainer: {
    position: "absolute",
    bottom: 40,
    width: width,
    height: 100,
  },
  svgWrapper: {
    position: "absolute",
    bottom: 0,
    left: -width,
  },
  contentContainer: {
    flexDirection: "row",
    height: 60,
    marginTop: 40,
    zIndex: 10,
  },
  tabItem: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
  inactiveIconContainer: {
    justifyContent: "center",
    alignItems: "center",
  },
  activeCircle: {
    width: 64,
    height: 64,
    borderRadius: 32,
    marginTop: -58,
    backgroundColor: "white",
    justifyContent: "center",
    alignItems: "center",
    // Shadow for Android & iOS
    elevation: 8,
    shadowColor: "#000",
    shadowOpacity: 0.2,
    shadowRadius: 5,
    shadowOffset: { width: 0, height: 4 },
  },
  label: { fontSize: 11, color: "#666", marginTop: 4 },
  labelActive: { color: "black", fontWeight: "bold" },
});

function Screen() {
  return <View />;
}
