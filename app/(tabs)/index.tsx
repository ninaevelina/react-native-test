import { View, StyleSheet } from "react-native";
import ImageViewer from "@/components/ImageViewer";

const PlaceholderImage = require("@/assets/images/owl.png");

export default function HomeScreen() {
  return (
    <View style={styles.container}>
      <View style={styles.imageContainer}>
        <ImageViewer imgSource={PlaceholderImage} />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    backgroundColor: "#FFFFFF",
  },
  imageContainer: {
    flex: 1,
  },
});
