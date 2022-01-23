import { createNativeStackNavigator, NativeStackScreenProps } from "@react-navigation/native-stack";
import { FC } from "react";
import { SettingsContextProvider } from "../context";
import {
  AccountSecurityScreen,
  GeneralSettingsScreen,
  MainSettingsScreen,
  NotificationSettingsScreen,
  PrivacyScreen,
} from "../screens";

type SettingsStackParamList = {
  "account-security-screen": undefined;
  "general-settings-screen": undefined;
  "main-settings-screen": undefined;
  "notification-settings-screen": undefined;
  "privacy-screen": undefined;
};

export type SettingsStackScreenProps = NativeStackScreenProps<SettingsStackParamList>;

const { Group, Navigator, Screen } = createNativeStackNavigator<SettingsStackParamList>();

const SettingsStack: FC = () => {
  return (
    <SettingsContextProvider>
      <Navigator
        initialRouteName="main-settings-screen"
        screenOptions={{ headerBackTitleVisible: false, headerTitleAlign: "center" }}
      >
        <Group screenOptions={{ headerShadowVisible: false }}>
          <Screen
            component={AccountSecurityScreen}
            name="account-security-screen"
            options={{ title: "Account Securtiy" }}
          />
          <Screen
            component={GeneralSettingsScreen}
            name="general-settings-screen"
            options={{ title: "General Settings" }}
          />
          <Screen component={MainSettingsScreen} name="main-settings-screen" options={{ title: "Settings" }} />
          <Screen
            component={NotificationSettingsScreen}
            name="notification-settings-screen"
            options={{ title: "Notification Settings" }}
          />
          <Screen component={PrivacyScreen} name="privacy-screen" options={{ title: "Privacy" }} />
        </Group>
      </Navigator>
    </SettingsContextProvider>
  );
};

export default SettingsStack;
