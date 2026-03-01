import { ScrollView } from "react-native";

export default function Wrapper({ children }) {
  return (
    <ScrollView className="mx-3 " showsVerticalScrollIndicator={false}>
      {children}
    </ScrollView>
  );
}
