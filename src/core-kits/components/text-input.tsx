import { FC, ReactElement } from "react";
import {
  StyleProp,
  StyleSheet,
  TextInput as RNTextInput,
  TextInputProps,
  TextStyle,
  View,
  ViewStyle,
} from "react-native";

export type ITextInputProps = Omit<TextInputProps, "style"> & {
  containerStyle?: StyleProp<ViewStyle>;
  error?: boolean;
  iconLeft?: () => ReactElement;
  iconRight?: () => ReactElement;
  textStyle?: StyleProp<TextStyle>;
};

const TextInput: FC<ITextInputProps> = ({
  containerStyle,
  error,
  iconLeft,
  iconRight,
  textStyle,
  ...textInputProps
}) => {
  const fContainerStyle = StyleSheet.flatten([
    styles.defaultContainer,
    containerStyle,
    styles.container,
    iconLeft ? { paddingLeft: 0 } : { paddingLeft: 10 },
    iconRight ? { paddingRight: 0 } : { paddingRight: 10 },
  ]);

  const fContainerErrorStyle = StyleSheet.flatten([fContainerStyle, { borderColor: error ? "red" : undefined }]);

  return (
    <View style={error ? fContainerErrorStyle : fContainerStyle}>
      {iconLeft && <View style={styles.iconContainer}>{iconLeft()}</View>}
      <View style={styles.textInputContainer}>
        <RNTextInput {...textInputProps} style={[textStyle, styles.textInput]} />
      </View>
      {iconRight && <View style={styles.iconContainer}>{iconRight()}</View>}
    </View>
  );
};

const styles = StyleSheet.create({
  defaultContainer: {
    borderColor: "black",
    borderRadius: 2,
    borderWidth: 1,
    height: 48,
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
  textInputContainer: {
    flex: 1,
    flexDirection: "column",
    height: "100%",
  },
  textInput: {
    flex: 1,
    width: "100%",
  },
});

export default TextInput;
