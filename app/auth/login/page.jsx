import { View } from "react-native";
import FormSection from "./_sections/form-section.jsx";
import HeaderSection from "./_sections/header-section.jsx";
export default function AuthLoginPage() {
  return (
    <View className="flex-1 bg-white px-6 justify-center">
      <HeaderSection />
      <FormSection />
    </View>
  );
}
