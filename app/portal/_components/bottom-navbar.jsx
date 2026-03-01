import { FontAwesome, Ionicons } from "@expo/vector-icons";
import { useEffect, useRef } from "react";
import {
  Animated,
  Dimensions,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import Svg, { Path } from "react-native-svg";

const { width } = Dimensions.get("window");

export default function BottomNavbar({ state, descriptors, navigation }) {
  const translateX = useRef(new Animated.Value(0)).current;

  const TAB_WIDTH = width / 5;

  useEffect(() => {
    Animated.spring(translateX, {
      toValue: state.index * TAB_WIDTH,
      useNativeDriver: true,
      friction: 10,
      tension: 50,
    }).start();
  }, [state.index]);

  return (
    <View className="absolute bottom-0 w-full h-[100px]">
      {/* 1. Sliding Background Shape */}
      <Animated.View
        className="absolute bottom-0 "
        style={{
          left: -width,
          transform: [{ translateX }],
        }}
      >
        <Svg
          width={width * 2.5}
          height={100}
          viewBox={`0 0 ${width * 2.5} 100`}
        >
          <Path
            fill="#1e40af"
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
      <View className="flex-row h-[60px] mt-12 z-10 ">
        {state.routes.map((route, index) => {
          const isFocused = state.index === index;
          const { options } = descriptors[route.key];
          const iconName = options.tabBarIconName;

          return (
            <TouchableOpacity
              key={route.key}
              onPress={() => navigation.navigate(route.name)}
              className="flex-1 items-center justify-center "
              activeOpacity={1}
            >
              <View
                className={
                  isFocused
                    ? "w-16 h-16 rounded-full -mt-[45px]  bg-blue-800 items-center justify-center"
                    : "items-center justify-center "
                }
                style={
                  isFocused && {
                    elevation: 8,
                    shadowColor: "#000",
                    shadowOpacity: 0.2,
                    shadowRadius: 5,
                    shadowOffset: { width: 0, height: 4 },
                  }
                }
              >
                {route.name === "Chat" ? (
                  <Ionicons
                    name="chatbubble-outline"
                    size={26}
                    color={"white"}
                  />
                ) : (
                  <FontAwesome
                    name={iconName}
                    size={isFocused ? 24 : 22}
                    color={"white"}
                  />
                )}
              </View>

              <Text
                className={`text-[11px] mt-1 text-white ${
                  isFocused ? " hidden" : ""
                }`}
              >
                {route.name}
              </Text>
            </TouchableOpacity>
          );
        })}
      </View>
    </View>
  );
}
