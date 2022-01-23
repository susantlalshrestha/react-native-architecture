import { MaterialIcons } from "@expo/vector-icons";
import { Image, StyleSheet, Text, View } from "react-native";

const CONTAINER_HEIGHT = 70;
const IMAGE_SIZE = 50;
const ICON_SIZE = 35;

type ContactListItemViewProps<T extends any> = {
  chatItem: T;
  onItemPressed?: (item: T) => void;
};

function ContactListItemView<T extends any = any>({}: ContactListItemViewProps<T>) {
  return (
    <>
      <View style={styles.container}>
        <Image source={require("@assets/adaptive-icon.png")} style={styles.image} />
        <View style={{ flex: 1 }}>
          <Text style={{ fontWeight: "bold", fontSize: 16 }}>User name</Text>
        </View>
        <View style={{ flexDirection: "row", margin: 10 }}>
          <View style={styles.iconContainer}>
            <MaterialIcons name="phone-enabled" size={16} />
          </View>
        </View>
      </View>
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    alignItems: "center",
    flexDirection: "row",
    height: CONTAINER_HEIGHT,
    justifyContent: "center",
    margin: 1,
    backgroundColor: "white",
  },
  image: {
    borderRadius: IMAGE_SIZE / 2,
    height: IMAGE_SIZE,
    margin: 10,
    width: IMAGE_SIZE,
  },
  iconContainer: {
    alignItems: "center",
    borderRadius: ICON_SIZE / 2,
    borderWidth: 0.5,
    justifyContent: "center",
    margin: 10,
    padding: 5,
    height: ICON_SIZE,
    width: ICON_SIZE,
  },
});

export default ContactListItemView;
