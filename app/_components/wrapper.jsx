import { ScrollView } from "react-native";

export default function Wrapper({ children }) {
  return (
    <ScrollView className="m-3 mt-10" showsVerticalScrollIndicator={false}>
      {children}
    </ScrollView>
  );
}
