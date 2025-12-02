import { Feather } from "@expo/vector-icons";
import { useState } from "react";
import { Pressable, Text, TextInput, View } from "react-native";

export default function Input({ value, onChange, placeholder, label, type }) {
  const [showPassword, setShowPassword] = useState(false);
  return (
    <View>
      <Text className="text-sm font-medium text-slate-700 mb-2">{label}</Text>
      <View className="flex-row items-center border border-slate-200 rounded-lg px-2">
        <TextInput
          value={value}
          onChangeText={onChange}
          secureTextEntry={type === "password" && !showPassword ? true : false}
          placeholder={placeholder}
          className="flex-1 py-3 px-2 text-base"
          placeholderTextColor="#9CA3AF"
        />
        {type === "password" && (
          <Pressable
            onPress={() => setShowPassword((s) => !s)}
            className="px-3 py-2"
          >
            <Feather
              name={showPassword ? "eye-off" : "eye"}
              size={20}
              color="#6B7280" // slate-500
            />
          </Pressable>
        )}
      </View>
    </View>
  );
}
