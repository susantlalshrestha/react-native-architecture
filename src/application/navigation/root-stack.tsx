import { AuthStack } from "@features/auth";
import { SettingsStack } from "@features/settings";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import HomeTab, { HomeTabParamList } from "./home-tab";

export type RootStackParamList = {
  "auth-stack": undefined;
  "home-stack": { screens: keyof HomeTabParamList } | undefined;
  "settings-stack": undefined;
};

const { Group, Navigator, Screen } = createNativeStackNavigator<RootStackParamList>();

export default () => {
  return (
    <Navigator screenOptions={{ headerBackTitleVisible: false, headerTitleAlign: "center" }}>
      <Group screenOptions={{ headerShown: false }}>
        <Screen component={AuthStack} name="auth-stack" />
        <Screen component={HomeTab} name="home-stack" />
        <Screen component={SettingsStack} name="settings-stack" />
      </Group>
    </Navigator>
  );
};
