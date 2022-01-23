import { FC } from "react";
import { Image, StyleProp, StyleSheet, Text, View, ViewStyle } from "react-native";

const VIEW_HEIGHT = 100;
const IMAGE_SIZE = 70;

type IMenuProfileViewProps = {
  containerStyle?: StyleProp<ViewStyle>;
};

const MenuProfileView: FC<IMenuProfileViewProps> = ({ containerStyle }) => {
  return (
    <View style={[containerStyle, styles.container]}>
      <Image source={require("@assets/adaptive-icon.png")} style={styles.image} />
      <View style={{ flex: 1, margin: 10, marginLeft: 0 }}>
        <Text style={{ fontSize: 16, fontWeight: "bold", textTransform: "capitalize" }}>User name</Text>
        <Text style={{ fontSize: 12 }}>Status</Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    alignItems: "center",
    backgroundColor: "white",
    borderRadius: VIEW_HEIGHT / 6,
    flexDirection: "row",
    height: VIEW_HEIGHT,
    justifyContent: "center",
  },
  image: {
    borderRadius: IMAGE_SIZE / 2,
    height: IMAGE_SIZE,
    margin: 10,
    width: IMAGE_SIZE,
  },
});

export default MenuProfileView;
