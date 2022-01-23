import { BottomModal, Button, TextInput } from "@core-kits/components";
import { MaterialCommunityIcons, MaterialIcons } from "@expo/vector-icons";
import { FC, useLayoutEffect, useMemo, useState } from "react";
import { Dimensions, Text, View } from "react-native";
import Animated, { runOnJS, useAnimatedStyle, useSharedValue, withTiming } from "react-native-reanimated";
import { useAuthCoordinator } from "../coordinators";

export type ILoginSignUpProps = {
  onDismiss: () => void;
  visible: boolean;
  view?: "login" | "signup";
};

const LoginSignUpView: FC<ILoginSignUpProps> = (props) => {
  const { onDismiss, visible, view } = props;
  const coordinator = useAuthCoordinator();
  const screenWidth = Dimensions.get("window").width;
  const [activeView, setActiveView] = useState<"login" | "signup">("signup");

  // animation properties
  const initialIndicatorX = useMemo(() => (activeView === "login" ? screenWidth / 2 : 0), [activeView]);
  const activeIndicatorX = useSharedValue(initialIndicatorX);
  const rIndicator = useAnimatedStyle(() => ({ transform: [{ translateX: activeIndicatorX.value }] }));
  const showLogin = () => {
    "worklet";
    const toValue = screenWidth / 2;
    activeIndicatorX.value = withTiming(toValue, { duration: 350 });
    runOnJS(setActiveView)("login");
  };
  const showSignUp = () => {
    "worklet";
    const toValue = 0;
    activeIndicatorX.value = withTiming(toValue, { duration: 350 });
    runOnJS(setActiveView)("signup");
  };

  useLayoutEffect(() => {
    if (view === "login") showLogin();
    else if (view === "signup") showSignUp();
  }, [view]);

  const headerContent = () => {
    return (
      <View style={{ flex: 1, flexDirection: "row" }}>
        <Button
          containerStyle={{ flex: 1, borderColor: "transparent" }}
          onPress={() => {
            showSignUp();
          }}
          title="Sign Up"
        />
        <Button
          containerStyle={{ flex: 1, borderColor: "transparent" }}
          onPress={() => {
            showLogin();
          }}
          title="Login"
        />
        <Animated.View
          style={[
            {
              backgroundColor: "black",
              bottom: 0,
              height: 1.5,
              position: "absolute",
              width: "50%",
            },
            rIndicator,
          ]}
        />
      </View>
    );
  };

  return (
    <BottomModal headerContent={headerContent} mode="fullscreen-wrap" onDismiss={onDismiss} visible={visible}>
      <View style={{ padding: 12, marginBottom: 12 }}>
        {activeView === "signup" && (
          <TextInput
            containerStyle={{ margin: 12 }}
            iconLeft={() => <MaterialIcons size={20} name="person" />}
            placeholder="Full Name"
          />
        )}
        <TextInput
          containerStyle={{ margin: 12 }}
          iconLeft={() => <MaterialIcons size={20} name="call" />}
          keyboardType="phone-pad"
          placeholder="Phone Number"
        />
        <TextInput
          containerStyle={{ margin: 12 }}
          iconLeft={() => <MaterialIcons size={20} name="lock" />}
          placeholder="Password"
          secureTextEntry={true}
        />
        {activeView === "signup" && (
          <TextInput
            containerStyle={{ margin: 12 }}
            iconLeft={() => <MaterialCommunityIcons size={20} name="lock-check" />}
            placeholder="Confirm Password"
            secureTextEntry={true}
          />
        )}
        {activeView === "login" && (
          <Text style={{ color: "blue", fontSize: 12, margin: 18, marginTop: 0, textAlign: "right" }}>
            Forgot password?
          </Text>
        )}
        {activeView === "signup" && <Button containerStyle={{ margin: 12 }} title="Sign Up" onPress={() => {}} />}
        {activeView === "login" && (
          <Button containerStyle={{ margin: 12 }} title="Login" onPress={() => coordinator?.toHomeScreen()} />
        )}
        <Text style={{ margin: 12, textAlign: "center" }}>OR</Text>
        <Button
          containerStyle={{ borderColor: "red", margin: 12 }}
          titleStyle={{ color: "red" }}
          title="Continue with Gmail"
          onPress={() => {}}
        />
        <Button
          containerStyle={{ borderColor: "dodgerblue", margin: 12 }}
          titleStyle={{ color: "dodgerblue" }}
          title="Continue with Facebook"
          onPress={() => {}}
        />
      </View>
    </BottomModal>
  );
};

export default LoginSignUpView;
