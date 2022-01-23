import { ReactElement } from "react";
import {
  ButtonProps,
  Platform,
  StyleProp,
  StyleSheet,
  Text,
  TextStyle,
  TouchableNativeFeedback,
  TouchableOpacity,
  View,
  ViewStyle,
} from "react-native";

const BUTTON_HEIGHT = 54;

export type IMenuButtonProps = Omit<ButtonProps, "color"> & {
  containerStyle?: StyleProp<ViewStyle>;
  icon?: () => ReactElement;
  itemRight?: () => ReactElement;
  titleStyle?: StyleProp<TextStyle>;
};

const MenuButton: React.FC<IMenuButtonProps> = (props) => {
  let { containerStyle, icon, itemRight, titleStyle, title, ...touchableProps } = props;
  containerStyle = StyleSheet.flatten([styles.defaultContainer, containerStyle, styles.container]);
  titleStyle = StyleSheet.flatten([styles.defaultTitle, titleStyle, styles.title]);

  const containerPadding: ViewStyle = { paddingLeft: icon ? undefined : 16, paddingRight: itemRight ? undefined : 16 };

  const buttonView = (
    <View style={[containerPadding, containerStyle]}>
      {icon && <View style={styles.iconContainer}>{icon()}</View>}
      <Text numberOfLines={1} style={titleStyle}>
        {title}
      </Text>
      {itemRight && <View style={styles.itemRightContainer}>{itemRight()}</View>}
    </View>
  );

  return Platform.OS === "ios" ? (
    <TouchableOpacity {...touchableProps}>{buttonView}</TouchableOpacity>
  ) : (
    <TouchableNativeFeedback {...touchableProps}>{buttonView}</TouchableNativeFeedback>
  );
};

const styles = StyleSheet.create({
  defaultContainer: {
    borderColor: "black",
    borderRadius: BUTTON_HEIGHT / 6,
    borderWidth: 1,
    height: BUTTON_HEIGHT,
  },
  container: {
    alignItems: "center",
    flexDirection: "row",
  },
  iconContainer: {
    alignItems: "center",
    justifyContent: "center",
    padding: 5,
    height: "100%",
    width: 48,
  },
  itemRightContainer: {
    alignItems: "center",
    justifyContent: "center",
    padding: 5,
    height: "100%",
  },
  defaultTitle: {
    fontWeight: "bold",
  },
  title: {
    flex: 1,
    textAlignVertical: "center",
  },
});

export default MenuButton;
