import { FC } from "react";
import { Image, StyleSheet, Text, View } from "react-native";

const CONTAINER_HEIGHT = 70;
const IMAGE_SIZE = 50;

type ChatListItemViewProps<T extends any> = {
  chatItem: T;
  onItemPressed?: (item: T) => void;
};

function ChatListItemView<T extends any = any>({}: ChatListItemViewProps<T>) {
  return (
    <>
      <View style={styles.container}>
        <Image source={require("@assets/adaptive-icon.png")} style={styles.image} />
        <View style={{ flex: 1 }}>
          <Text style={{ fontWeight: "bold", fontSize: 16 }}>User name</Text>
          <Text style={{ fontSize: 12, fontStyle: "italic" }}>Last conversation</Text>
        </View>
        <View style={{ width: IMAGE_SIZE, margin: 10 }}>
          <Text style={{ flex: 1, color: "black", textAlign: "center", textAlignVertical: "center" }}>Time</Text>
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
});

export default ChatListItemView;
