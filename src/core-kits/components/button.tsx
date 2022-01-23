import {
  ActivityIndicator,
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

export type IButtonProps = Omit<ButtonProps, "color"> & {
  containerStyle?: StyleProp<ViewStyle>;
  loading?: boolean;
  titleStyle?: StyleProp<TextStyle>;
};

const Button: React.FC<IButtonProps> = (props) => {
  let { containerStyle, disabled, loading, titleStyle, title, ...touchableProps } = props;
  containerStyle = StyleSheet.flatten([styles.defaultContainer, containerStyle, styles.container]);
  titleStyle = StyleSheet.flatten([styles.defaultTitle, titleStyle, styles.title]);

  const buttonView = (
    <View style={containerStyle}>
      <Text numberOfLines={1} style={titleStyle}>
        {title}
      </Text>
      {loading && <ActivityIndicator color={titleStyle.color || "black"} size="small" style={styles.loading} />}
    </View>
  );

  return Platform.OS === "ios" ? (
    <TouchableOpacity {...touchableProps} disabled={loading || disabled}>
      {buttonView}
    </TouchableOpacity>
  ) : (
    <TouchableNativeFeedback {...touchableProps} disabled={loading || disabled}>
      {buttonView}
    </TouchableNativeFeedback>
  );
};

const styles = StyleSheet.create({
  defaultContainer: {
    borderColor: "black",
    borderRadius: 20,
    borderWidth: 1,
    padding: 14,
  },
  container: {
    flexDirection: "row",
  },
  loading: {
    position: "absolute",
    right: 0,
    alignSelf: "center",
    margin: 10,
  },
  defaultTitle: {
    fontWeight: "bold",
    textAlign: "center",
  },
  title: {
    flex: 1,
    textAlignVertical: "center",
  },
});

export default Button;
