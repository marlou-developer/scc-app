import { FlatList, Text, TouchableOpacity, View } from "react-native";
import FontAwesome5 from "react-native-vector-icons/FontAwesome5";

const servicesData = [
  {
    name: "Laundry",
    icon: "tshirt",
    description: ["Pick Up", "Ironing", "Wash & fold", "Dry cleaning"],
  },
  {
    name: "Water Refilling",
    icon: "tint",
    description: ["Deliver to home", "Refill clean water"],
  },
  {
    name: "Delivery",
    icon: "truck",
    description: ["Track orders", "Fast delivery service"],
  },
  {
    name: "Foods",
    icon: "utensils",
    description: ["Order meals", "Home delivery"],
  },
  {
    name: "Bills",
    icon: "money-bill-wave",
    description: ["Internet", "Pay water", "Pay electricity"],
  },
  {
    name: "Home Services",
    icon: "home",
    description: ["Repairs", "Painting", "Cleaning", "Massage"],
  },
  {
    name: "Printing",
    icon: "print",
    description: ["Photos", "ID cards", "Documents", "Business cards"],
  },
  {
    name: "Rents",
    icon: "building",
    description: ["Rooms", "Houses", "Dresses", "Vehicles", "Apartments"],
  },
  {
    name: "Marketplace",
    icon: "marketplace",
    description: ["Rooms", "Houses", "Dresses", "Vehicles", "Apartments"],
  },
];

export default function ServicesCardScroll() {
  return (
    <View className="mt-5">
      <Text className="font-bold text-2xl text-blue-800 m-3">
        Services Details
      </Text>
      <FlatList
        data={servicesData}
        keyExtractor={(item) => item.name}
        horizontal
        showsHorizontalScrollIndicator={false}
        contentContainerStyle={{ paddingHorizontal: 10 }}
        renderItem={({ item }) => (
          <TouchableOpacity className="bg-white rounded-lg shadow-md p-4 mr-4 w-40 h-52">
            <View className="bg-blue-800 w-12 h-12 rounded-full justify-center items-center mb-3">
              <FontAwesome5 name={item.icon} size={20} color="#fff" />
            </View>
            <Text className="text-sm font-semibold mb-2">{item.name}</Text>
            <View className="pl-2">
              {item.description.map((desc, index) => (
                <Text key={index} className="text-xs text-gray-500">
                  • {desc}
                </Text>
              ))}
            </View>
          </TouchableOpacity>
        )}
      />
    </View>
  );
}
