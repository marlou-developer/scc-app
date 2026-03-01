import React from "react";
import { Image, StyleSheet, View } from "react-native";

export default function JobIcon({ size = 48 }) {
  return (
    <View style={{ width: size, height: size }}>
      <Image
        source={require("@/assets/icons/jobs.png")}
        style={styles.image}
        resizeMode="contain"
        // onLoad={() => console.log("Image loaded successfully")}
        // onError={(e) =>
        //   console.log("Image failed to load: ", e.nativeEvent.error)
        // }
      />
    </View>
  );
}

const styles = StyleSheet.create({
  image: {
    width: "100%",
    height: "100%",
  },
});
