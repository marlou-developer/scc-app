import { ActivityIndicator, Pressable, Text } from "react-native";

const variants = {
  primary: "bg-blue-600",
  secondary: "bg-gray-600",
  danger: "bg-red-600",
  success: "bg-green-600",
};

const disabledVariants = {
  primary: "bg-blue-400",
  secondary: "bg-gray-400",
  danger: "bg-red-400",
  success: "bg-green-400",
};

export default function Button({
  onSubmit,
  loading = false,
  value,
  variant = "primary",
}) {
  const bgClass = loading
    ? disabledVariants[variant] || disabledVariants.primary
    : variants[variant] || variants.primary;

  return (
    <Pressable
      onPress={onSubmit}
      className={`mt-4 rounded-lg px-4 py-3 items-center justify-center ${bgClass}`}
      disabled={loading}
    >
      {loading ? (
        <ActivityIndicator size="small" color="#fff" />
      ) : (
        <Text className="text-white font-semibold">{value}</Text>
      )}
    </Pressable>
  );
}
