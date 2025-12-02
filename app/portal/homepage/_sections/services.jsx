import { useState } from "react";
import { Text, TouchableOpacity, View } from "react-native";
import FontAwesome5 from "react-native-vector-icons/FontAwesome5";

const servicesData = [
  { name: "Laundry", icon: "tshirt" },
  { name: "Water Refilling", icon: "tint" },
  { name: "Delivery", icon: "truck" },
  { name: "Foods", icon: "utensils" },
  { name: "Bills", icon: "money-bill-wave" },
  { name: "Home Services", icon: "home" },
  { name: "Printing", icon: "print" },
  { name: "Rents", icon: "building" },
  { name: "Marketplace", icon: "store" },
  { name: "Hotels", icon: "hotel" },
  { name: "Gym", icon: "dumbbell" },
  { name: "Booking", icon: "address-book" },
  { name: "Jobs", icon: "briefcase" },
  { name: "Appointment", icon: "calendar-check" },
  { name: "Loan", icon: "money-check" },
  { name: "News", icon: "newspaper" },
];

export default function Services() {
  const [showMore, setShowMore] = useState(false);

  const displayedServices = showMore ? servicesData : servicesData.slice(0, 8);

  return (
    <View className="mt-4">
      <Text className="font-bold text-2xl text-blue-800 mx-3">Services</Text>
      <View className="flex flex-wrap flex-row justify-center items-center gap-5 mt-4">
        {displayedServices.map((service, index) => (
          <View key={index} className="flex flex-col items-center gap-2 w-15">
            <View className="w-20 h-20 bg-gray-200 shadow-blue-800 rounded-full flex items-center justify-center">
              <FontAwesome5 name={service.icon} size={30} color="#1e40af" />
            </View>
            <Text className="text-sm text-gray-500 text-center">
              {service.name}
            </Text>
          </View>
        ))}
      </View>

      {/* Show More / Show Less Button */}
      {servicesData.length > 8 && (
        <TouchableOpacity
          onPress={() => setShowMore(!showMore)}
          className="flex items-end justify-end m-3 px-3 "
        >
          <Text className="text-blue-800 font-semibold underline">
            {showMore ? "Show Less" : "Show More"}
          </Text>
        </TouchableOpacity>
      )}
    </View>
  );
}
